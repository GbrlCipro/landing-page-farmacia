"use client"

import { MessageCircle, Truck, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Truck, label: "Entrega Rápida" },
  { icon: Heart, label: "Atendimento Humanizado" },
  { icon: Shield, label: "Produtos de Qualidade" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium w-fit">
              <Heart className="h-4 w-4 fill-current" />
              Farmácia de confiança em Rio Verde
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Você merece alguém que não só te{" "}
              <span className="text-primary">atenda</span>, mas te{" "}
              <span className="text-accent">entenda</span>.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais do que uma farmácia, somos parceiros da sua saúde. Entrega rápida em 
              Rio Verde, atendimento humanizado e orientação farmacêutica especializada 
              para você e sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="https://wa.me/5564992055989?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-3 px-8 h-14 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Fazer Pedido via WhatsApp
                </Button>
              </a>
              <a href="#ofertas">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full h-14 px-8 text-base font-semibold border-2 hover:bg-secondary"
                >
                  Ver Ofertas
                </Button>
              </a>
            </div>

            {/* Trust Features */}
            <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-border">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  {feature.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Product Cards Preview */}
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-4 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-16 h-20 bg-primary/20 rounded-lg" />
                  </div>
                  <p className="text-xs text-muted-foreground">Suplemento</p>
                  <p className="font-semibold text-sm truncate">Vitamina D3</p>
                  <p className="text-primary font-bold">R$ 29,90</p>
                </div>
                <div className="bg-card rounded-2xl p-4 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-14 h-14 bg-accent/20 rounded-full" />
                  </div>
                  <p className="text-xs text-muted-foreground">Cuidados</p>
                  <p className="font-semibold text-sm truncate">Protetor Solar</p>
                  <p className="text-primary font-bold">R$ 49,90</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card rounded-2xl p-4 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 h-16 bg-blue-200/50 rounded-lg" />
                  </div>
                  <p className="text-xs text-muted-foreground">Medicamento</p>
                  <p className="font-semibold text-sm truncate">Dipirona</p>
                  <p className="text-primary font-bold">R$ 12,90</p>
                </div>
                <div className="bg-card rounded-2xl p-4 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-10 h-14 bg-pink-200/50 rounded-lg" />
                  </div>
                  <p className="text-xs text-muted-foreground">Beleza</p>
                  <p className="font-semibold text-sm truncate">Hidratante</p>
                  <p className="text-primary font-bold">R$ 34,90</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              Entrega Grátis acima de R$ 50
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
