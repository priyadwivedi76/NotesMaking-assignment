import React from 'react'
import Link from 'next/link'
import { StickyNote, Search, Plus } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center">
            <StickyNote className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Scriptor</span>
        </div>

        <Link href={'/create'} className="flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Note</span>
        </Link>
      </nav>
  )
}

export default Navigation