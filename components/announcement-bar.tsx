"use client"

import { Zap, X } from "lucide-react"
import { useState } from "react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <Zap className="h-4 w-4 fill-current" />
        <span>Entrega rápida em Rio Verde | Peça pelo WhatsApp</span>
        <a 
          href="https://wa.me/5564992055989" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:no-underline font-semibold"
        >
          (64) 99205-5989
        </a>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Fechar anúncio"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
