import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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

export default function Performances() {
  return (
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
                  <h3 className="text-2xl font-heading font-bold mb-2">{perf.title}</h3>
                  <p className="text-sm opacity-90 flex items-center">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    {perf.date}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{perf.description}</p>
                <Button className="w-full">
                  <Icon name="Ticket" className="mr-2" size={16} />
                  Купить билет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
