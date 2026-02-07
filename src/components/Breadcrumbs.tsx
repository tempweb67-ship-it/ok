import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-4 md:px-8 py-4"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            to="/"
            className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
            itemProp="item"
          >
            <Home size={16} />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <ChevronRight size={16} className="ml-2 text-white/30" />
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            {index === items.length - 1 ? (
              <span
                className="text-white font-medium"
                itemProp="name"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <>
                <Link
                  to={item.url}
                  className="text-white/60 hover:text-white transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
                <ChevronRight size={16} className="ml-2 text-white/30" />
              </>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
