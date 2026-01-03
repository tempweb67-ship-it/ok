import Marquee from 'react-fast-marquee';

export default function BottomMarquee() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-black py-1">
      <Marquee speed={50} autoFill>
        <span className="text-xs font-bold uppercase tracking-wider mx-4 text-white">
          WHERE AI MEETS BUSINESS EXCELLENCE.
        </span>
      </Marquee>
    </div>
  );
}
