import React from 'react';

function EDA() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#db2777]">Exploratory Data Analysis</h1>

      {/* Summary Stats */}
      <div className="bg-[#fdf2f8] rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#ec4899] mb-4">1. Summary Statistics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f472b6]">
            <thead>
              <tr className="bg-[#fce7f3]">
                <th className="px-6 py-3 text-left text-xs font-bold text-[#db2777] uppercase tracking-wider">Metric</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-[#db2777] uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#f472b6]">
              <tr>
                <td className="px-6 py-4 text-sm text-[#6b7280]">Mean Radius</td>
                <td className="px-6 py-4 text-sm text-[#db2777] font-medium">14.1</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[#6b7280]">Mean Texture</td>
                <td className="px-6 py-4 text-sm text-[#db2777] font-medium">19.3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-[#6b7280]">Standard Error of Area</td>
                <td className="px-6 py-4 text-sm text-[#db2777] font-medium">351.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Univariate Analysis */}
      <div className="bg-[#fdf2f8] rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#ec4899] mb-4">2. Univariate Analysis</h2>
        <img
          src="/images/boxplot_distribution.png"
          alt="Boxplot of features"
          className="w-full rounded-xl shadow-sm border border-[#f9a8d4]"
        />
        <p className="text-sm text-gray-600 mt-2">Boxplots showing the distribution and outliers for key features across malignant and benign classes.</p>
      </div>

      {/* Bivariate & Multivariate Analysis */}
      <div className="bg-[#fdf2f8] rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#ec4899] mb-4">3. Bivariate & Multivariate Analysis</h2>
        <img
          src="/images/correlation_heatmap.png"
          alt="Correlation Heatmap"
          className="w-full rounded-xl shadow-sm border border-[#f9a8d4]"
        />
        <p className="text-sm text-gray-600 mt-2">Highly correlated features are clustered, such as area_mean and radius_mean.</p>
      </div>

      {/* Feature Engineering */}
      <div className="bg-[#fdf2f8] rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#ec4899] mb-4">4. Feature Engineering</h2>
        <p className="text-gray-700">
          Created new features using domain knowledge and interactions:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li><code className="text-[#d946ef]">area_perimeter_interaction</code> = area_mean × perimeter_mean</li>
          <li><code className="text-[#d946ef]">radius_texture_ratio</code> = radius_mean / texture_mean</li>
          <li><code className="text-[#d946ef]">id</code> retained for mapping predictions</li>
        </ul>
      </div>

      {/* Data Visualization */}
      <div className="bg-[#fdf2f8] rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#ec4899] mb-4">5. Data Visualization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="/images/histogram_radius_mean.png"
              alt="Distribution of Radius Mean"
              className="w-full rounded-xl shadow-sm border border-[#f9a8d4]"
            />
            <p className="text-sm text-gray-600 mt-1">Histogram of radius_mean across patients.</p>
          </div>
          <div>
            <img
              src="/images/pairplot.png"
              alt="Pairplot of selected features"
              className="w-full rounded-xl shadow-sm border border-[#f9a8d4]"
            />
            <p className="text-sm text-gray-600 mt-1">Pairplot showing feature relationships with target classes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EDA;
