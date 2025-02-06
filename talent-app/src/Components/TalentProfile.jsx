
// src/components/TalentProfile.jsx
import { CAREER_ROLES } from '../Data/careers'; // Add this import

export const TalentProfile = ({ data, onReset }) => {
  const selectedRoles = CAREER_ROLES.filter(role => data.roles.includes(role.id));
  
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.name}'s Talent Profile</h2>
          {data.age && <p className="text-gray-600">Age/Grade: {data.age}</p>}
        </div>
  
        {data.interests && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Interests</h3>
            <div className="flex flex-wrap gap-2">
              {data.interests.split(',').map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {interest.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
  
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Recommended Career Paths</h3>
          <div className="space-y-3">
            {selectedRoles.map(role => (
              <div key={role.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800">{role.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Matching keywords: {role.keywords.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <button
          onClick={onReset}
          className="mt-8 w-full bg-gray-100 text-gray-600 py-2 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Create New Profile
        </button>
      </div>
    );
  };