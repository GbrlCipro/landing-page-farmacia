"use client"

import { Search, Menu, X, MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Container da imagem */}
      <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl group-hover:rotate-10 border border-gray-200">
        <img
          src="/logo.png"
          alt="Tião Farma Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Textos */}
      <div className="flex flex-col leading-none">
        <span className="font-bold text-xl tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
          Tião Farma
        </span>
        <span className="text-xs text-muted-foreground">Rio Verde - GO</span>
      </div>
    </Link>
  )
}

const navLinks = [
  { href: "#categorias", label: "Categorias" },
  { href: "#ofertas", label: "Ofertas" },
  { href: "#farmaceutica", label: "Falar com Farmacêutico" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-10 pr-4 h-10 bg-secondary border-0 rounded-full focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button Desktop */}
          <a
            href="https://wa.me/5564992055989"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="pl-10 pr-4 h-10 bg-secondary border-0 rounded-full focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5564992055989"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                <MessageCircle className="h-4 w-4" />
                Falar pelo WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
