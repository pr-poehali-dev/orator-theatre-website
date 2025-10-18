import { Card } from '@/components/ui/card';

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

export default function Troupe() {
  return (
    <section id="troupe" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-heading font-bold text-center mb-12">Наша труппа</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {troupe.map((member, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
