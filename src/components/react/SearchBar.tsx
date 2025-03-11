import Fuse from 'fuse.js';
import { useEffect, useRef, useState } from 'react';

interface SearchItem {
  title: string;
  url: string;
  description?: string;
  tags?: string[];
}

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder = 'Search...' }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [allItems, setAllItems] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const fuseOptions = {
    keys: ['title', 'description', 'tags'],
    threshold: 0.4,
    includeScore: true,
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch('/search-data.json');
        if (!response.ok) {
          throw new Error('Cannot load search data');
        }
        const data = await response.json();
        setAllItems(data);
      } catch (error) {
        console.error('Error loading search data:', error);
        setAllItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchData();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim() || allItems.length === 0) {
      setSearchResults([]);
      return;
    }

    const fuse = new Fuse(allItems, fuseOptions);
    const results = fuse.search(searchTerm);
    setSearchResults(results.map((result) => result.item));
  }, [searchTerm, allItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(value.trim().length > 0);
  };

  return (
    <div className="relative w-full mx-auto" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 pr-4 flex h-9 rounded-md border border-input/50 bg-transparent text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          aria-label="Search"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">Loading...</div>
          ) : searchResults.length > 0 ? (
            <ul className="py-2">
              {searchResults.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label={`Read article: ${item.title}`}
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : searchTerm.trim() !== '' ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              No results found for "{searchTerm}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
