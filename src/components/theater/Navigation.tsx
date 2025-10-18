import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/files/62de617f-f0c9-4511-a748-662954c7038b.jpeg" 
            alt="Театр Комильфо" 
            className="h-12 md:h-16 w-auto"
          />
          
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#performances" className="hover:text-primary transition-colors">Спектакли</a>
            <a href="#troupe" className="hover:text-primary transition-colors">Труппа</a>
            <a href="#education" className="hover:text-primary transition-colors">Обучение</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Афиша</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            <a 
              href="#home" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#performances" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Спектакли
            </a>
            <a 
              href="#troupe" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Труппа
            </a>
            <a 
              href="#education" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Обучение
            </a>
            <a 
              href="#schedule" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Афиша
            </a>
            <a 
              href="#gallery" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#contacts" 
              className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
