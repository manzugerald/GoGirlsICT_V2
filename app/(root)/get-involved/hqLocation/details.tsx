import React from 'react';

const GoGirlsDetailsCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-full flex flex-col justify-center">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">GoGirls ICT Initiative</h2>
        <h3 className="text-lg text-pink-600 font-medium mb-4">
          Female Founded and Female-led Non-Profit
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          <svg
            className="h-5 w-5 text-pink-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Plot #408, Suk Militia, Munuki Payam, Juba - South Sudan</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <svg
            className="h-5 w-5 text-pink-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v2m0 0h-2m2 0h2" />
          </svg>
          <span>
            <a href="mailto:info@gogirlsict.org" className="hover:underline text-pink-600">
              info@gogirlsict.org
            </a>
          </span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <svg
            className="h-5 w-5 text-pink-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
            />
          </svg>
          <span>
            <span className="font-medium">Open:</span> Week days Monday - Friday, 8:00AM - 5:00PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default GoGirlsDetailsCard;
