import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Explore() {
  const menuItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "What's Different", path: "/difference" },
    { name: "Our Vision", path: "/vision" },
    { name: "Privacy Policy", path: "/privacy" }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1
              className="text-white leading-[0.85] mb-4"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
              }}
            >
              Explore
            </h1>
            <p className="text-lg text-white text-opacity-60 max-w-2xl mt-6">
              Navigate across the website with ease and look at what we have to offer
            </p>
          </div>

          <div className="space-y-4">
            {menuItems.map((item, index) => {
              const content = (
                <div className="flex items-center justify-between">
                  <h3
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.name}
                  </h3>
                  <div className="text-white text-opacity-0 group-hover:text-opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight size={32} />
                  </div>
                </div>
              );

              return item.path ? (
                <Link
                  key={index}
                  to={item.path}
                  className="group cursor-pointer border-b border-white border-opacity-10 pb-4 hover:border-opacity-30 transition-all duration-300 block"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={index}
                  className="group cursor-pointer border-b border-white border-opacity-10 pb-4 hover:border-opacity-30 transition-all duration-300"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
