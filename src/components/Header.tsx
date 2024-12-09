import React, { useState } from 'react';
import { Search, Menu, User } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="ml-4 text-2xl font-bold text-purple-600">KidsWatch</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search kid-friendly videos..."
                className="w-full pl-4 pr-10 py-2 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </form>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}