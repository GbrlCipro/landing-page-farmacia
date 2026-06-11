"use client"

import { MessageCircle, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PharmacistSection() {
  return (
    <section id="farmaceutica" className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                {/* Avatar Placeholder */}
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center shadow-xl">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <span className="text-5xl md:text-6xl">👩‍⚕️</span>
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                    CRF-GO 12345
                  </div>
                </div>

                {/* Decorative Stars */}
                <div className="absolute top-8 right-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <Quote className="h-4 w-4" />
                  Sua Farmacêutica Amiga
                </div>

                <h2 
                  className="text-2xl md:text-3xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Olá! Sou a Rany
                </h2>
                <p className="text-primary font-medium mb-4">
                  Farmacêutica responsável da Tião Farma
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {`"Estou aqui para te ajudar com orientação especializada sobre medicamentos, 
                  interações, dosagens e muito mais. Minha missão é garantir que você use 
                  seus medicamentos de forma segura e eficaz. Pode contar comigo!"`}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Orientação sobre uso de medicamentos
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Verificação de interações medicamentosas
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Dicas de saúde e bem-estar
                  </div>
                </div>

                <a
                  href="https://wa.me/5564992055989?text=Olá Rany! Gostaria de tirar uma dúvida sobre medicamentos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-3 px-8 h-12 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all w-full md:w-auto"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Tirar Dúvidas sobre Medicamentos
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
