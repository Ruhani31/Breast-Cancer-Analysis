import React from 'react';

function DataPreprocessing() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Data Preprocessing</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">1. Handling Missing Values</h2>
        <p className="text-gray-600">
          We identified and handled missing values using multiple techniques:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Mean imputation for numerical features</li>
          <li>Mode imputation for categorical features</li>
          <li>Forward fill for time series data</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Handling Duplicates</h2>
        <p className="text-gray-600">
          Removed duplicate entries while preserving the first occurrence of each record.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Data Cleaning</h2>
        <p className="text-gray-600">
          Performed extensive data cleaning including:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Removing special characters</li>
          <li>Standardizing text formats</li>
          <li>Correcting data types</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Feature Encoding</h2>
        <p className="text-gray-600">
          Applied various encoding techniques:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>One-hot encoding for nominal variables</li>
          <li>Label encoding for ordinal variables</li>
          <li>Target encoding for high-cardinality features</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">5. Feature Scaling & Normalization</h2>
        <p className="text-gray-600">
          Implemented scaling methods:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>StandardScaler for normal distribution</li>
          <li>MinMaxScaler for bounded features</li>
          <li>RobustScaler for handling outliers</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">6. Feature Selection</h2>
        <p className="text-gray-600">
          Selected relevant features using:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Correlation analysis</li>
          <li>Feature importance from tree-based models</li>
          <li>Recursive feature elimination</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">7. Outlier Detection</h2>
        <p className="text-gray-600">
          Detected and handled outliers using:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>IQR method</li>
          <li>Z-score method</li>
          <li>Isolation Forest</li>
        </ul>
      </div>
    </div>
  );
}

export default DataPreprocessing;