import { useState, useRef, useEffect } from "react";
import { Search, X, FileText, Users, Building, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'service' | 'feature';
  href: string;
  icon: any;
}

const searchData: SearchResult[] = [
  {
    id: '1',
    title: 'Contact Us',
    description: 'Get in touch with our legal team',
    type: 'page',
    href: '/contact',
    icon: Users
  },
  {
    id: '2',
    title: 'About',
    description: 'Learn more about our legal services',
    type: 'page',
    href: '/#about',
    icon: FileText
  },
  {
    id: '3',
    title: 'Corporate Law',
    description: 'Legal support for mergers, acquisitions, and compliance',
    type: 'service',
    href: '/#services',
    icon: Building
  },
  {
    id: '4',
    title: 'Real Estate Law',
    description: 'Expert guidance through property transactions',
    type: 'service',
    href: '/#services',
    icon: Building
  },
  {
    id: '5',
    title: 'Litigation',
    description: 'Aggressive representation in commercial disputes',
    type: 'service',
    href: '/#services',
    icon: Scale
  },
  {
    id: '6',
    title: 'Pricing',
    description: 'View our service pricing and packages',
    type: 'page',
    href: '/pricing',
    icon: FileText
  },
  {
    id: '7',
    title: 'Product Features',
    description: 'Explore our legal practice management software',
    type: 'page',
    href: '/product',
    icon: FileText
  }
];

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar = ({ isOpen, onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 6));
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : prev);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selected = results[selectedIndex];
      window.location.href = selected.href;
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleResultClick = (href: string) => {
    window.location.href = href;
    onClose();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-primary/10 text-primary';
      case 'service': return 'bg-accent/10 text-accent';
      case 'feature': return 'bg-secondary/10 text-secondary';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-2xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="relative bg-background border-2 border-border/50 rounded-2xl shadow-2xl">
            <div className="flex items-center px-6 py-4">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <Input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for services, features, or pages..."
                className="flex-1 text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="ml-2 hover:bg-muted/50"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Search Results */}
            <AnimatePresence>
              {results.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-border/50 max-h-96 overflow-y-auto"
                >
                  {results.map((result, index) => {
                    const Icon = result.icon;
                    return (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-start space-x-4 p-4 cursor-pointer transition-all duration-200 ${
                          index === selectedIndex
                            ? 'bg-primary/5 border-l-4 border-primary'
                            : 'hover:bg-muted/30'
                        }`}
                        onClick={() => handleResultClick(result.href)}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-foreground text-sm">
                              {result.title}
                            </h3>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${getTypeColor(result.type)}`}>
                              {result.type}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {result.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* No Results */}
            {query.trim() && results.length === 0 && (
              <div className="border-t border-border/50 p-6 text-center">
                <p className="text-muted-foreground">No results found for "{query}"</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try searching for services, features, or pages
                </p>
              </div>
            )}
          </div>

          {/* Search Tips */}
          {!query.trim() && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Try searching for: "Corporate Law", "Contact", "Pricing", or "About"
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SearchBar;