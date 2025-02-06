// src/components/Header.jsx
import React from 'react';

export const Header = () => (
  <header className="bg-white shadow-sm">
    <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center">
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Beyond925
        </span>
      </div>
    </nav>
  </header>
);