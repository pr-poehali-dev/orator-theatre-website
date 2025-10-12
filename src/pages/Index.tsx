import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const performances = [
    {
      title: "Гамлет",
      date: "15-20 ноября 2024",
      description: "Классическая трагедия Уильяма Шекспира в современной интерпретации",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800"
    },
    {
      title: "Три сестры",
      date: "5-10 декабря 2024",
      description: "Пьеса Антона Чехова о мечтах, надеждах и разочарованиях",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800"
    },
    {
      title: "Ревизор",
      date: "20-25 декабря 2024",
      description: "Комедия Николая Гоголя с элементами современной сатиры",
      image: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800"
    }
  ];

  const troupe = [
    {
      name: "Александр Петров",
      role: "Художественный руководитель",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Екатерина Смирнова",
      role: "Актриса",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    },
    {
      name: "Михаил Волков",
      role: "Актер",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
    {
      name: "Анна Кузнецова",
      role: "Актриса",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
    "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600",
    "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
    "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=600"
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">ТЕАТР «КОМИЛЬФО»</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#performances" className="hover:text-primary transition-colors">Спектакли</a>
              <a href="#troupe" className="hover:text-primary transition-colors">Труппа</a>
              <a href="#education" className="hover:text-primary transition-colors">Обучение</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Афиша</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ТЕАТР СВИБ
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Где оживают истории и рождается искусство
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билеты
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Calendar" className="mr-2" size={20} />
                Афиша
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Performances Section */}
      <section id="performances" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-12">Спектакли</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {performances.map((perf, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={perf.image} 
                    alt={perf.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-heading font-bold mb-2">{perf.title}</h3>
                    <p className="text-sm opacity-90">{perf.date}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{perf.description}</p>
                  <Button className="w-full">
                    <Icon name="Ticket" className="mr-2" size={16} />
                    Купить билеты
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troupe Section */}
      <section id="troupe" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-12">Труппа</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {troupe.map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                <div className="relative h-80 overflow-hidden group">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-heading font-bold text-center mb-12">Обучение</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <Icon name="GraduationCap" className="mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-heading font-semibold mb-3">Актёрское мастерство</h3>
                <p className="text-muted-foreground mb-4">Основы актёрской игры, импровизация, работа с текстом</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Длительность: 3 месяца</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Занятия 2 раза в неделю</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Сертификат по окончанию</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <Icon name="Mic2" className="mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-heading font-semibold mb-3">Сценическая речь</h3>
                <p className="text-muted-foreground mb-4">Постановка голоса, дикция, выразительное чтение</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Длительность: 2 месяца</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Индивидуальный подход</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Практика на сцене</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Registration Form */}
            <Card className="p-8 shadow-xl">
              <h3 className="text-3xl font-heading font-bold mb-6 text-center">Запись на курсы</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="ivan@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о себе и выберите курс..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-12">Афиша</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {performances.map((perf, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-2">{perf.title}</h3>
                    <p className="text-muted-foreground">{perf.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Icon name="Calendar" className="text-primary" size={18} />
                      <span className="font-medium">{perf.date}</span>
                    </div>
                    <Button>
                      <Icon name="Ticket" className="mr-2" size={16} />
                      Билеты
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-12">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
                <img 
                  src={img} 
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="p-8">
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="text-xl font-heading font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Театральная, 15</p>
              </Card>
              <Card className="p-8">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="text-xl font-heading font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </Card>
              <Card className="p-8">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="text-xl font-heading font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@teatrsvib.ru</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">© 2024 Театр СВИБ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}