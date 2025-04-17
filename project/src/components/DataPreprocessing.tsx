import React from 'react';

function DataPreprocessing() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Data Preprocessing</h1>

      {/* 1. Data Loading */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">1. Data Loading</h2>
        <p className="text-gray-600">
          Downloaded the dataset from Kaggle using <code>kagglehub</code> and loaded it into a Pandas DataFrame.
        </p>
      </div>

      {/* 2. Data Cleaning */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Data Cleaning</h2>
        <p className="text-gray-600">Performed the following steps to clean the data:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Checked for and removed null values and duplicates</li>
          <li>Filled missing numerical values with column mean</li>
          <li>Filled missing categorical values with column mode</li>
          <li>Dropped the column <code>Unnamed: 32</code> due to irrelevance</li>
        </ul>
      </div>

      {/* 3. Column Transformation */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Column Transformation</h2>
        <p className="text-gray-600">
          Converted the target column:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Transformed <code>diagnosis</code> from categorical to binary (Malignant = 1, Benign = 0)</li>
        </ul>
      </div>

      {/* 4. Feature Scaling */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Feature Scaling</h2>
        <p className="text-gray-600">
          Applied normalization on numerical features to improve model accuracy:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Used <code>StandardScaler</code> to standardize all numerical columns except the target variable</li>
        </ul>
      </div>
    </div>
  );
}

export default DataPreprocessing;
