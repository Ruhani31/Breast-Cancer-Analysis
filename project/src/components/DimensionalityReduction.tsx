import React from 'react';

function DimensionalityReduction() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dimensionality Reduction</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Principal Component Analysis (PCA)</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Explained Variance Ratio</h3>
            <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: '85%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              First 3 components explain 85% of variance
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Scree Plot</h3>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="PCA Scree Plot"
              className="w-full rounded-lg mt-2"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Component Loadings</h3>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PC1</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PC2</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PC3</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feature 1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.85</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.12</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.03</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feature 2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.76</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.21</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.03</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feature 3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.65</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.32</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">0.03</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DimensionalityReduction;