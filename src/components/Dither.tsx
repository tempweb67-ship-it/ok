import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { useRef, useState, useMemo, forwardRef } from 'react';
import * as THREE from 'three';
import { Effect, BlendFunction } from 'postprocessing';

interface DitherProps {
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
}

const ditherShader = `
  uniform float colorNum;

  float dither8x8(vec2 position, float brightness) {
    int x = int(mod(position.x, 8.0));
    int y = int(mod(position.y, 8.0));
    int index = x + y * 8;
    float limit = 0.0;

    if (index < 8) limit = (float(index) + 0.5) / 64.0;
    else if (index < 16) limit = (float(index - 8) + 0.5) / 64.0;
    else if (index < 24) limit = (float(index - 16) + 0.5) / 64.0;
    else if (index < 32) limit = (float(index - 24) + 0.5) / 64.0;
    else if (index < 40) limit = (float(index - 32) + 0.5) / 64.0;
    else if (index < 48) limit = (float(index - 40) + 0.5) / 64.0;
    else if (index < 56) limit = (float(index - 48) + 0.5) / 64.0;
    else limit = (float(index - 56) + 0.5) / 64.0;

    return brightness < limit ? 0.0 : 1.0;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 pixelPos = uv * resolution.xy;

    float brightness = (inputColor.r + inputColor.g + inputColor.b) / 3.0;
    float dithered = dither8x8(pixelPos, brightness);

    float quantized = floor(brightness * colorNum) / colorNum;
    vec3 finalColor = mix(inputColor.rgb * quantized, inputColor.rgb * dithered, 0.3);

    outputColor = vec4(finalColor, inputColor.a);
  }
`;

class DitherEffectImpl extends Effect {
  constructor({ colorNum = 4 }: { colorNum?: number } = {}) {
    super('DitherEffect', ditherShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map([
        ['colorNum', new THREE.Uniform(colorNum)]
      ])
    });
  }
}

const DitherEffect = forwardRef<any, { colorNum?: number }>(({ colorNum = 4 }, ref) => {
  const effect = useMemo(() => new DitherEffectImpl({ colorNum }), [colorNum]);
  return <primitive ref={ref} object={effect} />;
});

DitherEffect.displayName = 'DitherEffect';

function WavePlane({
  waveColor = [1, 0, 0.4],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  waveAmplitude = 0.3,
  waveFrequency = 3,
  waveSpeed = 0.05,
}: DitherProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();
  const timeRef = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color(...waveColor) },
      uAmplitude: { value: waveAmplitude },
      uFrequency: { value: waveFrequency },
      uMouseRadius: { value: mouseRadius },
    }),
    [waveColor, waveAmplitude, waveFrequency, mouseRadius]
  );

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uAmplitude;
    uniform float uFrequency;
    uniform float uMouseRadius;

    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;

      vec3 pos = position;

      float wave = sin(pos.x * uFrequency + uTime) * cos(pos.y * uFrequency + uTime) * uAmplitude;

      float distanceToMouse = distance(uMouse, uv);
      float mouseInfluence = smoothstep(uMouseRadius, 0.0, distanceToMouse);
      float mouseEffect = mouseInfluence * 0.5;

      pos.z += wave + mouseEffect;
      vElevation = wave + mouseEffect;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vec3 color = uColor;
      float brightness = 0.5 + vElevation * 2.0;
      color *= brightness;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame((state, delta) => {
    if (!disableAnimation && meshRef.current) {
      timeRef.current += delta * waveSpeed;
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = timeRef.current;

      if (enableMouseInteraction) {
        (meshRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value.set(
          mousePos.x,
          mousePos.y
        );
      }
    }
  });

  const handlePointerMove = (event: any) => {
    if (enableMouseInteraction) {
      const x = (event.point.x / viewport.width) * 0.5 + 0.5;
      const y = (event.point.y / viewport.height) * 0.5 + 0.5;
      setMousePos({ x, y });
    }
  };

  return (
    <mesh ref={meshRef} onPointerMove={handlePointerMove}>
      <planeGeometry args={[viewport.width, viewport.height, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Dither({
  waveColor = [1, 0, 0.4],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  colorNum = 4,
  waveAmplitude = 0.3,
  waveFrequency = 3,
  waveSpeed = 0.05,
}: DitherProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <WavePlane
        waveColor={waveColor}
        disableAnimation={disableAnimation}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={mouseRadius}
        waveAmplitude={waveAmplitude}
        waveFrequency={waveFrequency}
        waveSpeed={waveSpeed}
      />
      <EffectComposer>
        <DitherEffect colorNum={colorNum} />
      </EffectComposer>
    </Canvas>
  );
}
