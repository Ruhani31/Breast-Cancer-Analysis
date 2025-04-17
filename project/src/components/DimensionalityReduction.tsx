import React from 'react';

function DimensionalityReduction() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dimensionality Reduction</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Principal Component Analysis (PCA)</h2>

        <div className="space-y-4">
          {/* Explained Variance */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Explained Variance Ratio</h3>
            <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: '95%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              The top principal components together capture 95% of the total variance in the dataset.
            </p>
          </div>

          {/* Scree Plot */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Scree Plot</h3>
            <img
              src="/images/Screeplo.png"
              alt="PCA Scree Plot for Breast Cancer Dataset"
              className="w-full rounded-lg mt-2"
            />
          </div>

          {/* Top Feature Loadings */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Top Feature Loadings</h3>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">radius_mean</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.52</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.14</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.09</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">texture_mean</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.48</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.23</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.12</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">area_mean</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.43</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.17</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.15</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">concavity_mean</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.35</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.28</td>
                    <td className="px-6 py-4 text-sm text-gray-900">0.19</td>
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
