import { LavaLamp } from './ui/fluid-blob';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FluidBlobDemo() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <LavaLamp />
      <Link
        to="/"
        className="absolute top-8 left-8 z-10 text-white hover:opacity-60 transition-opacity flex items-center gap-2 mix-blend-exclusion"
      >
        <ArrowLeft size={20} />
        <span className="text-sm uppercase tracking-wide">Back</span>
      </Link>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap">
        Morphic Dreams
      </h1>
      <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed px-6 mt-4">
        Where thoughts take shape and consciousness flows like liquid mercury through infinite dimensions.
      </p>
    </div>
  );
}
