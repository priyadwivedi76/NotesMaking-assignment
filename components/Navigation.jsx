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
        
        <div className="flex-1 max-w-xl mx-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search your thoughts..." 
              className="w-full bg-stone-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-stone-200 transition-all"
            />
          </div>
        </div>

        <Link href={'/create'} className="flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Note</span>
        </Link>
      </nav>
  )
}

export default Navigation