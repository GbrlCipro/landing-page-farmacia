"use client"

import { Pill, Leaf, Heart, Baby, Sparkles } from "lucide-react"

const categories = [
  {
    icon: Pill,
    name: "Medicamentos",
    description: "Receituário e livre",
    color: "bg-primary/10 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-white",
  },
  {
    icon: Leaf,
    name: "Suplementos & Vitaminas",
    description: "Saúde e bem-estar",
    color: "bg-green-100 text-green-700",
    hoverColor: "group-hover:bg-green-600 group-hover:text-white",
  },
  {
    icon: Heart,
    name: "Cuidados Diários",
    description: "Higiene e cuidados",
    color: "bg-rose-100 text-rose-600",
    hoverColor: "group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    icon: Baby,
    name: "Mamãe & Bebê",
    description: "Para toda família",
    color: "bg-sky-100 text-sky-600",
    hoverColor: "group-hover:bg-sky-500 group-hover:text-white",
  },
  {
    icon: Sparkles,
    name: "Beleza & Cosméticos",
    description: "Cuidados especiais",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
  },
]

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Encontre o que você precisa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Navegue por nossas categorias e encontre os melhores produtos para sua saúde
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`https://wa.me/5564992055989?text=Olá! Gostaria de ver produtos de ${category.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full" // Adicionei h-full aqui
            >
              <div className="flex flex-col items-center p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className={`p-4 rounded-2xl transition-all mb-4 ${category.color} ${category.hoverColor}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <div className="text-center flex flex-col flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm lg:text-base leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
