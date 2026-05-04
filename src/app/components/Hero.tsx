import heroImage from 'figma:asset/23b1c6b0873890fb37489fbeeb26a7d1cec2900c.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional business portrait"
          className="w-full h-full object-cover object-[80%_center] md:object-right"
        />
        {/* Stronger bottom-up overlay on mobile so the centered text reads against the body of the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 md:bg-gradient-to-r md:from-black/60 md:via-black/40 md:to-black/20"></div>
      </div>
      <div className="relative container mx-auto px-6 min-h-[100svh] flex items-end lg:items-center pb-48 md:pb-32 lg:pb-0 pt-32 lg:pt-0">
        <div className="max-w-2xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6 leading-[1.2] font-serif font-light">
            STRATEGIC GROWTH.<br />MEANINGFUL RESULTS.
          </h1>
          <p
            className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 font-light leading-relaxed max-w-md"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Driving revenue through active sales execution and strategic business development.
          </p>
          <button
            onClick={scrollToContact}
            className="border border-white px-7 py-3 text-xs sm:text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            LET'S CONNECT
          </button>
        </div>
      </div>
    </section>
  );
}
