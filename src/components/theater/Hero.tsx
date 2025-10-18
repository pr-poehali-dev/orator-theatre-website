import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ТЕАТР «КОМИЛЬФО»
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
  );
}
