// src/App.jsx
import { useState } from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { TalentForm } from './Components/TalentForm';
import { TalentProfile } from './Components/TalentProfile';

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {!submittedData ? (
            <TalentForm onSubmit={setSubmittedData} />
          ) : (
            <TalentProfile data={submittedData} onReset={() => setSubmittedData(null)} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}