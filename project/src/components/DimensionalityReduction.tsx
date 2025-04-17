import React from 'react';

function DimensionalityReduction() {
  return (
    <div className="space-y-8 px-6 py-8 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-fuchsia-700">Dimensionality Reduction</h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Principal Component Analysis (PCA)</h2>

        {/* Explained Variance */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Explained Variance Ratio</h3>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-pink-400 transition-all duration-500 ease-in-out" style={{ width: '95%' }}></div>
          </div>
          <p className="text-sm text-gray-600">
            The first 10 principal components explain approximately <span className="font-semibold text-pink-700">95%</span> of the total variance,
            enabling a significant dimensionality reduction without major information loss.
          </p>
        </div>

        {/* Scree Plot */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Scree Plot</h3>
          <img
            src="/images/Screeplo.png"
            alt="PCA Scree Plot for Breast Cancer Dataset"
            className="w-full rounded-lg mt-3 shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2">The elbow point suggests that the top 10 components retain most of the information.</p>
        </div>

        {/* PCA Stats Summary */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">PCA Statistics</h3>
          <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 mt-2">
            <li>Data was standardized before applying PCA.</li>
            <li>10 components were selected based on cumulative variance.</li>
            <li>First 2 components (PC1 and PC2) used for visual comparison.</li>
            <li>PCA transformation was applied on all 33 features (30 original + 3 engineered).</li>
          </ul>
        </div>

        {/* Feature Loadings */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Top Feature Loadings</h3>
          <div className="overflow-x-auto mt-3 rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
              <thead className="bg-pink-100 text-pink-700 font-semibold">
                <tr>
                  <th className="px-6 py-3 text-left">Feature</th>
                  <th className="px-6 py-3 text-left">PC1</th>
                  <th className="px-6 py-3 text-left">PC2</th>
                  <th className="px-6 py-3 text-left">PC3</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4">radius_mean</td>
                  <td className="px-6 py-4">0.52</td>
                  <td className="px-6 py-4">0.14</td>
                  <td className="px-6 py-4">0.09</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">texture_mean</td>
                  <td className="px-6 py-4">0.48</td>
                  <td className="px-6 py-4">0.23</td>
                  <td className="px-6 py-4">0.12</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">area_mean</td>
                  <td className="px-6 py-4">0.43</td>
                  <td className="px-6 py-4">0.17</td>
                  <td className="px-6 py-4">0.15</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">concavity_mean</td>
                  <td className="px-6 py-4">0.35</td>
                  <td className="px-6 py-4">0.28</td>
                  <td className="px-6 py-4">0.19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Before vs After PCA Visual Comparison */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-800">PCA Visualization: Before vs After</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <img
                src="/images/pca_before.png"
                alt="Before PCA: radius_mean vs texture_mean"
                className="rounded-md w-full"
              />
              <p className="text-sm text-gray-600 mt-2">Original feature space using <strong>radius_mean</strong> and <strong>texture_mean</strong> with diagnosis color coding.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <img
                src="/images/pca_after.png"
                alt="After PCA: PC1 vs PC2"
                className="rounded-md w-full"
              />
              <p className="text-sm text-gray-600 mt-2">PCA-transformed space using <strong>PC1</strong> and <strong>PC2</strong>, providing clearer separation between benign and malignant cases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DimensionalityReduction;
