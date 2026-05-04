import { Linkedin, Mail } from 'lucide-react';
import logoBlack from '../../assets/logo-black.svg';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#e8e2d9] text-[#2c2c2c] py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <img
              src={logoBlack}
              alt="JS Catalyst"
              className="h-7 sm:h-9 w-auto"
            />
          </div>
          <div>
            <div className="text-xs tracking-widest mb-4">LET'S CONNECT</div>
            <div className="space-y-2 mb-6 sm:mb-8">
              <p className="text-sm font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
                Ready to accelerate your revenue growth?
              </p>
              <a
                href="mailto:contact@js-catalyst.com"
                className="text-sm font-light break-all hover:underline inline-block"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                contact@js-catalyst.com
              </a>
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
                href="mailto:contact@js-catalyst.com"
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
