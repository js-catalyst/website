import aboutImage from 'figma:asset/73a3596fbd92f242c9ffc154c0c87fb55807c8b1.png';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#f5f1ed]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image first on mobile so readers see the person before the wall of text */}
          <div className="order-1 md:order-2">
            <img
              src={aboutImage}
              alt="Professional portrait"
              className="w-full h-72 sm:h-96 md:h-[500px] object-cover object-top"
            />
          </div>
          <div className="order-2 md:order-1">
            <div className="text-xs sm:text-sm tracking-widest text-[#666] mb-4 md:mb-6">ABOUT</div>
            <h2 className="text-3xl md:text-4xl mb-5 md:mb-6 font-light leading-tight">
              From alignment to revenue.
            </h2>
            <p className="text-[#666] leading-relaxed mb-5 md:mb-6 text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              Ensuring what is sold is delivered, and what is delivered drives repeat business.
            </p>
            <p className="text-[#666] leading-relaxed mb-5 md:mb-6 text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              Sales is the art of alignment. Matching real demand with the right solution while protecting brand integrity, quality, and long-term value. This is where human judgment remains essential. Trust is built in the relationship, not through automation.
            </p>
            <p className="text-[#666] leading-relaxed mb-5 md:mb-6 text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              From managing multi-million-euro revenue streams to building sales structures from the ground up, the approach combines scaling existing business with creating new revenue.
            </p>
            <p className="text-[#666] leading-relaxed mb-7 md:mb-8 text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              Where required, this extends into direct execution, including account management and on-site presence, ensuring commercial commitments are carried through to delivery with precision.
            </p>
            <p
              className="text-lg sm:text-xl text-[#8b7355] opacity-90 italic font-semibold mb-3 mt-4 leading-snug"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              I've never been the constant. I've always been the shift.
            </p>
            <div
              className="text-3xl sm:text-4xl text-[#8b7355] opacity-90 mt-2 font-bold"
              style={{
                fontFamily: '"Allura", cursive',
              }}
            >
              Jaski Seegers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
