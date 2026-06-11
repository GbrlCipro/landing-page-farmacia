import { MessageCircle, Instagram, MapPin, Clock, Phone, Heart } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  categorias: [
    { label: "Medicamentos", href: "#categorias" },
    { label: "Suplementos", href: "#categorias" },
    { label: "Cosméticos", href: "#categorias" },
    { label: "Higiene", href: "#categorias" },
  ],
  atendimento: [
    { label: "Falar no WhatsApp", href: "https://wa.me/5564992055989" },
    { label: "Orientação Farmacêutica", href: "#farmaceutica" },
    { label: "Ofertas da Semana", href: "#ofertas" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary rounded-xl" />
                <div className="relative flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 4v16M4 12h16" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <span className="font-bold text-xl text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Tião Farma
              </span>
            </Link>
            <p className="text-card/70 text-sm mb-4 leading-relaxed">
              Sua farmácia de confiança em Rio Verde - GO. Atendimento humanizado, 
              entrega rápida e os melhores preços da região.
            </p>
            <a
              href="https://instagram.com/tiaofarma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-card/70 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @tiaofarma
            </a>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categorias</h4>
            <ul className="space-y-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-card/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-semibold text-white mb-4">Atendimento</h4>
            <ul className="space-y-2">
              {footerLinks.atendimento.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-card/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-card/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Rua das Flores, 123 - Centro<br />Rio Verde - GO, 75901-000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-card/70">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Seg - Sáb: 7h às 22h<br />Dom: 8h às 18h</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-card/70">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+5564992055989" className="hover:text-primary transition-colors">
                  (64) 99205-5989
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <MessageCircle className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-white">Precisa de ajuda?</p>
                <p className="text-sm text-card/70">Fale com a gente pelo WhatsApp</p>
              </div>
            </div>
            <a
              href="https://wa.me/5564992055989"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              (64) 99205-5989
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-card/50">
          <p>© 2024 Tião Farma. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-accent fill-accent" /> em Rio Verde - GO
          </p>
        </div>
      </div>
    </footer>
  )
}
