import Marquee from 'react-fast-marquee';

export default function BottomMarquee() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 py-1 border-t border-white/5">
      <Marquee speed={50} autoFill>
        <span className="text-xs font-bold uppercase tracking-wider mx-4">
          <span className="text-white">WHERE AI MEETS </span>
          <span className="text-white">BUSINESS EXCELLENCE</span>
          <span className="text-white">.</span>
        </span>
      </Marquee>
    </div>
  );
}
