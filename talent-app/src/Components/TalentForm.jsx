// src/components/TalentForm.jsx
import { useState } from 'react';

const CAREER_ROLES = [
  { id: 1, title: 'AI Engineer', keywords: ['tech', 'programming', 'machine learning'] },
  { id: 2, title: 'UX Designer', keywords: ['design', 'psychology', 'user experience'] },
  { id: 3, title: 'Quantum Technician', keywords: ['physics', 'research', 'engineering'] },
  { id: 4, title: 'Bioinformatics Specialist', keywords: ['biology', 'data science', 'healthcare'] },
];

export const TalentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    interests: '',
    roles: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const getRecommendedRoles = () => {
    const userInterests = formData.interests.toLowerCase().split(',');
    return CAREER_ROLES.filter(role =>
      role.keywords.some(keyword =>
        userInterests.includes(keyword.trim())
      )
    ).map(role => role.id);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age / Grade</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Comma separated (e.g., tech, design, physics)"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Select Career Roles *</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CAREER_ROLES.map((role) => {
              const isRecommended = getRecommendedRoles().includes(role.id);
              return (
                <label
                  key={role.id}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.roles.includes(role.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200'
                  } ${isRecommended ? 'ring-2 ring-purple-200' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={formData.roles.includes(role.id)}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        roles: prev.roles.includes(role.id)
                          ? prev.roles.filter(id => id !== role.id)
                          : [...prev.roles, role.id]
                      }));
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{role.title}</span>
                    {isRecommended && (
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Generate Talent Profile
      </button>
    </form>
  );
};