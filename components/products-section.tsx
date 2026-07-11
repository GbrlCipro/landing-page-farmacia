"use client"

import { MessageCircle, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  description: string
  originalPrice: number
  salePrice: number
  discount: number
  category: string
  bgColor: string
  image: string // Campo adicionado para a imagem
}

const products: Product[] = [
  {
    id: "1",
    name: "Picolinato de Cromo + Vitamina E",
    description: "60 cápsulas - Auxilia no metabolismo",
    originalPrice: 89.90,
    salePrice: 59.90,
    discount: 33,
    category: "Suplemento",
    bgColor: "from-emerald-50 to-emerald-100",
    image: "/picolinato.png", // Ajuste o caminho aqui
  },
  {
    id: "2",
    name: "Cimegripe",
    description: "20 comprimidos - Gripe e resfriado",
    originalPrice: 32.90,
    salePrice: 24.90,
    discount: 24,
    category: "Medicamento",
    bgColor: "from-blue-50 to-blue-100",
    image: "/cimegripe.png", 
  },
  {
    id: "3",
    name: "Carmed Fini",
    description: "Hidratante labial - Edição especial",
    originalPrice: 29.90,
    salePrice: 22.90,
    discount: 23,
    category: "Beleza",
    bgColor: "from-pink-50 to-pink-100",
    image: "/carmed.png",
  },
  {
    id: "4",
    name: "Ômega 3 EPA DHA",
    description: "120 cápsulas - Saúde cardiovascular",
    originalPrice: 79.90,
    salePrice: 54.90,
    discount: 31,
    category: "Suplemento",
    bgColor: "from-amber-50 to-amber-100",
    image: "/omega 3.png",
  },
  {
    id: "5",
    name: "Vitamina D3 2000UI",
    description: "60 cápsulas - Imunidade",
    originalPrice: 49.90,
    salePrice: 34.90,
    discount: 30,
    category: "Vitamina",
    bgColor: "from-yellow-50 to-yellow-100",
    image: "/vitamina d3.png",
  },
  {
    id: "6",
    name: "Protetor Solar FPS 50",
    description: "200ml - Proteção diária",
    originalPrice: 89.90,
    salePrice: 69.90,
    discount: 22,
    category: "Cuidados",
    bgColor: "from-orange-50 to-orange-100",
    image: "/protetor solar.png",
  },
]

function formatPrice(price: number) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Area */}
      <div className={`relative aspect-square bg-white p-6 flex items-center justify-center`}>
        {/* Discount Badge */}
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold shadow-md z-10">
          <Tag className="h-3 w-3 mr-1" />
          -{product.discount}%
        </Badge>

        {/* Imagem do Produto Dinâmica */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-contain w-full h-full"
          />
        </div>
      </div> 

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-medium text-primary mb-1">{product.category}</p>
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">{product.description}</p>

        {/* Prices */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xs text-muted-foreground line-through">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.salePrice)}
          </span>
        </div>

        {/* Buy Button */}
        <a
          href={`https://wa.me/5564992055989?text=Olá! Gostaria de comprar: ${product.name} por ${formatPrice(product.salePrice)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 h-11 font-semibold group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
            <MessageCircle className="h-4 w-4" />
            Pedir no WhatsApp
          </Button>
        </a>
      </div>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="ofertas" className="py-16 lg:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <Badge variant="outline" className="mb-4 border-accent text-accent font-semibold">
              Ofertas Especiais
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground mt-2">
              Aproveite os melhores preços da região
            </p>
          </div>
          <a
            href="https://wa.me/5564992055989?text=Olá! Gostaria de ver todas as ofertas disponíveis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="rounded-full">
              Ver todas as ofertas
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}