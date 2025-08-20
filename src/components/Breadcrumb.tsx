import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2" role="list">
        <li role="listitem">
          <Link 
            to="/" 
            className="flex items-center hover:text-foreground transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2" role="listitem">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" aria-hidden="true" />
            
            {item.current ? (
              <span 
                className="text-foreground font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <Link 
                to={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-muted-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 