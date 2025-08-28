interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'magliette', label: 'MAGLIETTE' },
    { id: 'felpe', label: 'FELPE' },
    { id: 'giacconi', label: 'GIACCONI' },
    { id: 'pantaloncini', label: 'PANTALONCINI' },
    { id: 'pantaloni', label: 'PANTALONI' },
    { id: 'scarpe', label: 'SCARPE' },
    { id: 'accessori', label: 'ACCESSORI' },
    { id: 'carrello', label: 'CARRELLO' }
  ];

  return (
    <>
      {/* Header with logo and logout */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-black text-sm">CC</span>
              </div>
              <h1 className="text-xl font-black text-primary animate-street-glow font-military">
                CLOTHES COLLECTION
              </h1>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('auth_verified');
                window.location.reload();
              }}
              className="text-sm text-muted-foreground hover:text-destructive transition-colors font-tactical font-bold"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="sticky top-[73px] z-40 bg-secondary/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-center py-3">
            <div className="flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`px-4 py-2 font-bold text-sm tracking-wider transition-all duration-300 rounded-md font-tactical ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'text-muted-foreground hover:text-primary hover:bg-background/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden py-4">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`px-3 py-2 text-xs font-bold tracking-wider transition-all duration-300 rounded font-tactical ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-background text-foreground hover:bg-accent'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};