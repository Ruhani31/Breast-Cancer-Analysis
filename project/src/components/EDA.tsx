import React from 'react';

function EDA() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Exploratory Data Analysis</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">1. Summary Statistics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">42.5</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Median</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">41.0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Standard Deviation</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15.2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Univariate Analysis</h2>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Univariate Analysis Chart"
          className="w-full rounded-lg"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Bivariate & Multivariate Analysis</h2>
        <img
          src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80"
          alt="Correlation Matrix"
          className="w-full rounded-lg"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Feature Engineering</h2>
        <p className="text-gray-600">
          Created new features through:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Polynomial features</li>
          <li>Interaction terms</li>
          <li>Domain-specific aggregations</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">5. Data Visualization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            alt="Distribution Plot"
            className="w-full rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80"
            alt="Scatter Plot"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default EDA;