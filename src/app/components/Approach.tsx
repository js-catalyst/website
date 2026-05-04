import approachImage from '../../imports/image.png';

export function Approach() {
  return (
    <section id="approach" className="py-16 sm:py-20 md:py-24 bg-[#f5f1ed]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* On mobile, lead with the heading & copy; on desktop, image stays on the left */}
          <div className="order-2 md:order-1">
            <img
              src={approachImage}
              alt="Business workspace with laptop showing analytics"
              className="w-full h-72 sm:h-96 md:h-[500px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-xs sm:text-sm tracking-widest text-[#666] mb-4 md:mb-6">MY APPROACH</div>
            <h2 className="text-3xl md:text-4xl mb-5 md:mb-6 font-light leading-tight">
              Performance-driven.<br />
              <em className="font-serif italic">Results-focused.</em>
            </h2>
            <p className="text-[#666] leading-relaxed mb-5 md:mb-6 text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              Clients gain access to senior commercial expertise without the fixed cost or risk of a full-time hire. Enabling growth without adding fixed overhead.
            </p>
            <p className="text-[#666] leading-relaxed mb-5 md:mb-6 text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              Work is aligned with results, not hours. Performance-based, ensuring that effort translates directly into measurable revenue.
            </p>
            <p className="text-[#666] leading-relaxed text-sm sm:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
              Strategy only has value when it is executed. Turning direction into action, and action into results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
