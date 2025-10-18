import Navigation from '@/components/theater/Navigation';
import Hero from '@/components/theater/Hero';
import Performances from '@/components/theater/Performances';
import Troupe from '@/components/theater/Troupe';
import ContactForm from '@/components/theater/ContactForm';

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <Performances />
      <Troupe />
      <ContactForm />
    </div>
  );
}
