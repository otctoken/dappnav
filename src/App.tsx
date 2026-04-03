import { useState, useMemo } from 'react';
import { Search, Flame, ChevronDown, Send } from 'lucide-react';
import { projects, categories, Category } from './data';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const lowerQuery = searchQuery.toLowerCase();
    return projects.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const projectsByCategory = useMemo(() => {
    const grouped = {} as Record<Category, typeof projects>;
    categories.forEach(c => grouped[c] = []);
    filteredProjects.forEach(p => {
      if (grouped[p.category]) {
        grouped[p.category].push(p);
      }
    });
    return grouped;
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-green-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]" />
      </div>

      {/* Header - Logo and Search parallel and centered */}
      <header className="relative z-50 pt-6 pb-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[#0d83e2] font-bold text-2xl sm:text-3xl tracking-tight shrink-0">
            <img
              src="/logo.png"
              alt="SuiNav Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full bg-white/5"
            />
            <span>SuiNav</span>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-focus-within:text-green-400 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 focus:bg-white/10 transition-all text-sm sm:text-base shadow-lg shadow-black/20"
              placeholder="Search SUI DApp、DeFi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Telegram Link */}
          <a
            href="https://t.me/Sui_UpgradeCap_Radar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#24A1DE]/10 hover:bg-[#24A1DE]/20 border border-[#24A1DE]/20 text-[#24A1DE] transition-all shrink-0 shadow-lg"
            title="Telegram"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 -ml-0.5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-2 sm:px-4 py-1 relative z-10 pb-10">
        {/* Main Directory Container */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">

          {searchQuery && filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500">未找到相关项目</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {categories.map((category, index) => {
                const categoryProjects = projectsByCategory[category];
                if (categoryProjects.length === 0) return null;

                const isExpanded = expandedCategories[category] || searchQuery.trim() !== '';

                return (
                  <div
                    key={category}
                    className={`flex flex-col md:flex-row py-1.5 px-3 hover:bg-white/[0.02] transition-colors ${index !== categories.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                  >
                    {/* Category Name */}
                    <div className="w-full md:w-24 shrink-0 flex items-center mb-1.5 md:mb-0">
                      <span className="text-[#0d83e2] font-bold text-sm sm:text-base tracking-normal flex items-center gap-2">
                        {category}
                      </span>
                    </div>

                    {/* Links Grid - Adaptive 1 row: 3 on mobile, 4 on tablet, 6 on desktop */}
                    <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-1 sm:gap-y-2 gap-x-1.5 sm:gap-x-2">
                      {categoryProjects.map((project, idx) => {
                        // Logic to show exactly 1 row when collapsed
                        let visibilityClass = 'flex';
                        if (!isExpanded) {
                          if (idx >= 3 && idx < 4) visibilityClass = 'hidden sm:flex';
                          else if (idx >= 4 && idx < 6) visibilityClass = 'hidden lg:flex';
                          else if (idx >= 6) visibilityClass = 'hidden';
                        }

                        return (
                          <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group items-start gap-0 sm:gap-0 text-slate-300 hover:text-green-300 text-base sm:text-base transition-colors ${visibilityClass}`}
                            title={project.description}
                          >
                            <span className="break-words whitespace-normal leading-snug">{project.name}</span>
                            {project.hot && <span className="inline-block text-sm ml-0.5 align-baseline">🔥</span>}
                          </a>
                        );
                      })}
                    </div>

                    {/* More Button - Far Right */}
                    <div className="w-full md:w-16 shrink-0 flex justify-end items-start mt-1.5 md:mt-0 pl-1">
                      {!searchQuery.trim() && (
                        <>
                          {/* Mobile button (shows if > 3) */}
                          {categoryProjects.length > 3 && (
                            <button
                              onClick={() => toggleCategory(category)}
                              className="sm:hidden text-xs text-blue-400 hover:text-green-400 flex items-center gap-1 transition-colors"
                            >
                              {expandedCategories[category] ? 'Less' : 'More'}
                              <ChevronDown className={`w-3 h-3 transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                          {/* Tablet button (shows if > 4) */}
                          {categoryProjects.length > 4 && (
                            <button
                              onClick={() => toggleCategory(category)}
                              className="hidden sm:flex lg:hidden text-xs text-blue-400 hover:text-green-400 items-center gap-1 transition-colors"
                            >
                              {expandedCategories[category] ? 'Less' : 'More'}
                              <ChevronDown className={`w-3 h-3 transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                          {/* Desktop button (shows if > 6) */}
                          {categoryProjects.length > 6 && (
                            <button
                              onClick={() => toggleCategory(category)}
                              className="hidden lg:flex text-xs text-blue-400 hover:text-green-400 items-center gap-1 transition-colors"
                            >
                              {expandedCategories[category] ? 'Less' : 'More'}
                              <ChevronDown className={`w-3 h-3 transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-slate-500 text-sm">
        <p>©2026 All rights reserved</p>
      </footer>
    </div>
  );
}
