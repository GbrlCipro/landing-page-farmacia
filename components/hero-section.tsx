"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Truck, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Truck, label: "Entrega Rápida" },
  { icon: Heart, label: "Atendimento Humanizado" },
  { icon: Shield, label: "Produtos de Qualidade" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-12 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="relative top-[-2rem] flex flex-col gap-6 max-w-xl">
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-3 px-8 h-14 text-base font-semibold shadow-xl transition-all"
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

            {/* Features ajustadas para não criar scrollbar */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-6 border-t border-border">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="whitespace-nowrap">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Grid Responsivo */}
          <div className="w-full lg:max-w-lg mx-auto lg:mx-0">
            {/* Grid adaptável: 1 coluna no celular, 2 colunas no tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

              {/* Card 1 */}
              <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
                <div className="aspect-square bg-green-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src="/vitamina.png" alt="Vitamina D3" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground">Suplemento</p>
                <p className="font-semibold text-sm truncate">Vitamina D3</p>
                <p className="text-primary font-bold">R$ 29,90</p>
              </div>

              {/* Card 2 */}
              <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
                <div className="aspect-square bg-blue-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src="/dipirona.png" alt="Dipirona" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground">Medicamento</p>
                <p className="font-semibold text-sm truncate">Dipirona</p>
                <p className="text-primary font-bold">R$ 12,90</p>
              </div>

              {/* Card 3 */}
              <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
                <div className="aspect-square bg-red-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src="/protetor_solar.png" alt="Protetor Solar" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground">Cuidados</p>
                <p className="font-semibold text-sm truncate">Protetor Solar</p>
                <p className="text-primary font-bold">R$ 49,90</p>
              </div>

              {/* Card 4 */}
              <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
                <div className="aspect-square bg-pink-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src="/hidratante.png" alt="Hidratante" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground">Beleza</p>
                <p className="font-semibold text-sm truncate">Hidratante</p>
                <p className="font-bold text-primary">R$ 34,90</p>
              </div>
            </div>

            {/* Badge Centralizada */}
            <div className="flex justify-center w-full mt-6">
              <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-base sm:text-lg font-bold shadow-xl animate-pulse whitespace-nowrap text-center">
                Entrega Grátis acima de R$ 50
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}