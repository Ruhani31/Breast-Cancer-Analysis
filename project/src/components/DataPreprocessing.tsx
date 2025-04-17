import React from 'react';

function DataPreprocessing() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Data Preprocessing</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">1. Data Cleaning</h2>
        <p className="text-gray-600">
          Ensured data consistency by:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Removing unnecessary columns like 'id'</li>
          <li>Converting diagnosis column to binary format (Malignant = 1, Benign = 0)</li>
          <li>Ensuring no null values were present in the dataset</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Feature Engineering</h2>
        <p className="text-gray-600">
          Created additional meaningful features to improve model performance:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Area-Perimeter Interaction</li>
          <li>Radius-Texture Ratio</li>
          <li>Retained original features for comprehensive analysis</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Feature Scaling</h2>
        <p className="text-gray-600">
          Applied feature scaling to normalize feature values:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Used <code>StandardScaler</code> to bring features to standard normal distribution</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Dimensionality Reduction</h2>
        <p className="text-gray-600">
          Applied Principal Component Analysis (PCA) to reduce feature dimensionality:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Captured 95% variance using fewer principal components</li>
          <li>Helped reduce noise and improve model performance</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">5. Data Splitting</h2>
        <p className="text-gray-600">
          Divided the dataset into training and testing sets using an 80:20 ratio:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Maintained class distribution with stratified sampling</li>
          <li>Prepared separate sets for model evaluation</li>
        </ul>
      </div>
    </div>
  );
}

export default DataPreprocessing;
