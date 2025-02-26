import React from 'react';
import { PerizopeLogo } from './components/PerizopeLogo';
import { WeddingQuillLogo } from './components/WeddingQuillLogo';
import { WwonderlustLogo } from './components/WwonderlustLogo';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#30CBA8]/5 to-white">
      {/* Header */}
      <header className="w-full p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <PerizopeLogo className="w-24 sm:w-32" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 relative">
        {/* Background gradient blur */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-brand/20 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-brand/20 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Main text with positioned images */}
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Top right image - wwonderlust */}
          <a 
            href="https://www.wwonderlust.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute -top-12 sm:-top-20 right-0 transform rotate-6 transition-transform hover:scale-105"
          >
            <WwonderlustLogo className="w-48 sm:w-72" />
          </a>
          
          {/* Bottom left image - Your Wedding Quill */}
          <a 
            href="https://yourweddingquill.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute -bottom-12 sm:-bottom-20 -left-8 sm:-left-20 transform -rotate-6 transition-transform hover:scale-105"
          >
            <WeddingQuillLogo className="w-48 sm:w-72" />
          </a>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8 font-fira bg-gradient-to-b from-brand/0 to-brand text-transparent bg-clip-text">
            <span className="block">
              WE BELIEVE IN MAKING
            </span>
            <span className="block">
              EVERY EXPERIENCE
            </span>
            <span className="block italic">
              UNIQUELY YOURS
            </span>
          </h1>
        </div>

        {/* Contact section */}
        <div className="mt-8 sm:mt-16 text-center text-gray-600">
          <p className="text-sm sm:text-base">
            Interested in finding out more?{' '}
            <a
              href="mailto:kason@perizope.com"
              className="text-brand hover:text-brand/80 font-medium"
            >
              Contact kason@perizope.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;