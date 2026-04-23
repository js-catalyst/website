import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/23b1c6b0873890fb37489fbeeb26a7d1cec2900c.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional business portrait"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl mb-6 leading-tight font-serif font-light">
            STRATEGIC GROWTH. MEANINGFUL RESULTS.
          </h1>
          <p className="text-lg mb-8 font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
            Driving revenue through active sales execution<br />
            and strategic business development.
          </p>
          <button
            onClick={scrollToContact}
            className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            LET'S CONNECT
          </button>
        </div>
      </div>
    </section>
  );
}