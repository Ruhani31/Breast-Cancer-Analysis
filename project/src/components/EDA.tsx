import React from 'react';

function EDA() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Exploratory Data Analysis</h1>

      {/* Summary Stats */}
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
                <td className="px-6 py-4 text-sm text-gray-500">Mean Radius</td>
                <td className="px-6 py-4 text-sm text-gray-900">14.1</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-500">Mean Texture</td>
                <td className="px-6 py-4 text-sm text-gray-900">19.3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-500">Standard Error of Area</td>
                <td className="px-6 py-4 text-sm text-gray-900">351.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Univariate Analysis */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Univariate Analysis</h2>
        <img
          src="/images/boxplot_distribution.png"
          alt="Boxplot of features"
          className="w-full rounded-lg"
        />
        <p className="text-sm text-gray-600 mt-2">Boxplots showing the distribution and outliers for key features across malignant and benign classes.</p>
      </div>

      {/* Bivariate & Multivariate Analysis */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Bivariate & Multivariate Analysis</h2>
        <img
          src="/images/correlation_heatmap.png"
          alt="Correlation Heatmap"
          className="w-full rounded-lg"
        />
        <p className="text-sm text-gray-600 mt-2">Highly correlated features are clustered, such as area_mean and radius_mean.</p>
      </div>

      {/* Feature Engineering */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Feature Engineering</h2>
        <p className="text-gray-600">
          Created new features using domain knowledge and interactions:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><code>area_perimeter_interaction</code> = area_mean × perimeter_mean</li>
          <li><code>radius_texture_ratio</code> = radius_mean / texture_mean</li>
          <li><code>id</code> retained for mapping predictions</li>
        </ul>
      </div>

      {/* Data Visualization */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">5. Data Visualization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="/images/histogram_radius_mean.png"
              alt="Distribution of Radius Mean"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-gray-600 mt-1">Histogram of radius_mean across patients.</p>
          </div>
          <div>
            <img
              src="/images/pairplot.png"
              alt="Pairplot of selected features"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-gray-600 mt-1">Pairplot showing feature relationships with target classes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EDA;
