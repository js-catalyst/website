import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#e8e2d9] text-[#2c2c2c] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-2xl tracking-wider font-light mb-2" style={{ fontFamily: '"Cormorant Garamond", serif' }}>JS CATALYST</div>
          </div>
          <div>
            <div className="text-xs tracking-widest mb-4">LET'S CONNECT</div>
            <div className="space-y-2 mb-8">
              <p className="text-sm font-light" style={{ fontFamily: '"Inter", sans-serif' }}>Ready to accelerate your revenue growth?</p>
              <p className="text-sm font-light" style={{ fontFamily: '"Inter", sans-serif' }}>contact@jscatalyst.com</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jaski-seegers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#2c2c2c] rounded-full flex items-center justify-center hover:bg-[#2c2c2c] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto: info@jscatalyst.com"
                className="w-10 h-10 border border-[#2c2c2c] rounded-full flex items-center justify-center hover:bg-[#2c2c2c] hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
