import React from 'react';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import { getNotes } from './actions/reacNote';
const Home = async() => {
  const Notes= await getNotes()

  // const notes = [
  //   { id: 1, title: "Q4 Project Strategy", content: "Focus on user retention and API optimization...", date: "Oct 12", tag: "Work" },
  //   { id: 2, title: "Grocery List", content: "Oat milk, Avocados, Coffee beans, Sourdough...", date: "Oct 14", tag: "Personal" },
  //   { id: 3, title: "Book Ideas", content: "A thriller set in a high-tech library in 2050...", date: "Oct 15", tag: "Creative" },
  //   // Add more dummy data here
  // ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Navigation />

      <main className="max-w-7xl mx-auto p-8">
        <header className="mb-10">
          <h1 className="text-4xl font-light mb-2">Welcome</h1>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {Notes.map((note) => (
            <Card key={note._id} data={note}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
