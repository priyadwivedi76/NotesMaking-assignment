import React from 'react';
import { ArrowLeft, Tag, AlignLeft, Type, Save } from 'lucide-react';
import addNote from '../actions/addNote';

const CreateNotePage = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col">
      {/* Subtle Header / Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-stone-200">
        <button 
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Notes</span>
        </button>
      </nav>

      <main className="flex-1 flex justify-center py-12 px-4">
        <div className="w-full max-w-3xl">
          {/* Form Card */}
          <div className="bg-white border border-stone-200 rounded-3xl shadow-sm overflow-hidden">
            <form className="p-10 space-y-8" action={addNote}>
              
              {/* Title Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400">
                  <Type className="w-3 h-3" /> Note Title
                </label>
                <input 
                  type="text" 
                  name="title"
                  placeholder="The beginning of a great idea..." 
                  className="w-full text-3xl font-light border-none focus:ring-0 placeholder:text-stone-200 p-0"
                />
              </div>

              {/* Tag Selection */}
              <div className="space-y-2">
                <label name="tag" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400">
                  <Tag className="w-3 h-3" /> Category Tag
                </label>
                <select name="tag" className="w-full md:w-1/3 bg-stone-50 border border-stone-200 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none appearance-none cursor-pointer">
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Creative</option>
                  <option>Urgent</option>
                </select>
              </div>

              {/* Content Area */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-400">
                  <AlignLeft className="w-3 h-3" /> Content
                </label>
                <textarea 
                  rows="8"
                  name="content"
                  placeholder="Start typing your thoughts here..."
                  className="w-full bg-stone-50/50 border border-stone-100 rounded-2xl p-6 text-stone-700 leading-relaxed focus:ring-2 focus:ring-stone-200 outline-none resize-none transition-all"
                ></textarea>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-4 pt-6 border-t border-stone-100">
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-stone-900 text-stone-50 px-8 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-lg shadow-stone-200 font-medium"
                >
                  <Save className="w-4 h-4" />
                  Save Note
                </button>
              </div>

            </form>
          </div>
          
          {/* Helper Footer */}
          <p className="text-center mt-8 text-stone-400 text-xs">
            Click <kbd className="bg-stone-200 px-1 rounded text-stone-600 font-sans">Save Note</kbd> to quickly save your progress.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CreateNotePage;