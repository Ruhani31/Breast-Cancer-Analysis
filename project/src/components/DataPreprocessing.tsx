import React from 'react';

function DataPreprocessing() {
  return (
    <div className="space-y-8 px-6 py-8 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-fuchsia-700">Data Preprocessing</h1>

      {/* 1. Data Loading */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">1. Data Loading</h2>
        <p className="text-gray-700 text-sm">
          Downloaded the dataset from Kaggle using <code className="bg-pink-100 text-pink-700 px-1 rounded">kagglehub</code> and loaded it into a Pandas DataFrame.
        </p>
      </div>

      {/* 2. Data Cleaning */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">2. Data Cleaning</h2>
        <p className="text-gray-700 text-sm mb-2">Performed the following steps to clean the data:</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>Checked for and removed null values and duplicates</li>
          <li>Filled missing numerical values with column mean</li>
          <li>Filled missing categorical values with column mode</li>
          <li>Dropped the column <code className="bg-pink-100 text-pink-700 px-1 rounded">Unnamed: 32</code> due to irrelevance</li>
        </ul>
      </div>

      {/* 3. Column Transformation */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">3. Column Transformation</h2>
        <p className="text-gray-700 text-sm mb-2">Converted the target column:</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>Transformed <code className="bg-pink-100 text-pink-700 px-1 rounded">diagnosis</code> from categorical to binary (Malignant = <span className="text-pink-700 font-medium">1</span>, Benign = <span className="text-pink-700 font-medium">0</span>)</li>
        </ul>
      </div>

      {/* 4. Feature Scaling */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">4. Feature Scaling</h2>
        <p className="text-gray-700 text-sm mb-2">Applied normalization on numerical features to improve model accuracy:</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>Used <code className="bg-pink-100 text-pink-700 px-1 rounded">StandardScaler</code> to standardize all numerical columns except the target variable</li>
        </ul>
      </div>
    </div>
  );
}

export default DataPreprocessing;

