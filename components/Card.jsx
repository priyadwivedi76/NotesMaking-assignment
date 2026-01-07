import React from 'react'
import { Hash,MoreVertical,Calendar } from 'lucide-react'

const Card = ({data}) => {
    console.log(data)
    const {id,tag,title,content,date}=data
  return (
   <div 
    className="break-inside-avoid bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-stone-200/50 transition-all cursor-pointer group"
    >
        <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 flex items-center gap-1">
                <Hash className="w-3 h-3" /> {tag}
            </span>
            <MoreVertical className="w-4 h-4 text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-stone-700">{title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-6">{content}</p>
        
        <div className="flex items-center justify-end gap-2 pt-4 border-t border-stone-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button 
                className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all"
                title="Edit Note"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            
            <button 
                className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                title="Delete Note"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
        </div>

        <div className="flex items-center justify-between border-t border-stone-50 pt-4">
            <div className="flex items-center gap-2 text-stone-400">
                <Calendar className="w-3 h-3" />
                <span className="text-xs">{date}</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-amber-400" /></div>
            
        </div>
  )
}

export default Card