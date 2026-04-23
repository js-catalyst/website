import { TrendingUp, Handshake, Users, Target } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'BUSINESS DEVELOPMENT',
      description: 'Active sales execution that closes deals and generates measurable revenue for your business.'
    },
    {
      icon: Handshake,
      title: 'CLIENT ACQUISITION',
      description: 'B2B pipeline development and strategic outreach to attract and secure high-value clients.'
    },
    {
      icon: Users,
      title: 'ACCOUNT MANAGEMENT',
      description: 'Building and nurturing client relationships to maximize lifetime value and drive account growth.'
    },
    {
      icon: Target,
      title: 'ONSITE COORDINATION',
      description: 'Direct on-site presence to ensure seamless execution and alignment between commercial commitments and delivery.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#e8e2d9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm tracking-widest text-[#666] mb-4">SERVICES</div>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <service.icon className="w-12 h-12 text-[#666] stroke-[1.5]" />
              </div>
              <h3 className="text-sm tracking-wider mb-4">{service.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
