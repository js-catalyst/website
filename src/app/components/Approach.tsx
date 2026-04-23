import approachImage from '../../imports/image.png';

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-[#f5f1ed]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={approachImage}
              alt="Business workspace with laptop showing analytics"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <div className="text-sm tracking-widest text-[#666] mb-6">MY APPROACH</div>
            <h2 className="text-4xl mb-6 font-light">
              Performance-driven.<br />
              <em className="font-serif italic">Results-focused.</em>
            </h2>
            <p className="text-[#666] leading-relaxed mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
              Clients gain access to senior commercial expertise without the fixed cost or risk of a full-time hire. Enabling growth without adding fixed overhead.
            </p>
            <p className="text-[#666] leading-relaxed mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
              Work is aligned with results, not hours. Performance-based, ensuring that effort translates directly into measurable revenue.
            </p>
            <p className="text-[#666] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              Strategy only has value when it is executed. Turning direction into action, and action into results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
