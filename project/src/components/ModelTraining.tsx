import React from 'react';

function ModelTraining() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Breast Cancer Model Training</h1>

      {/* Data Splitting */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">1. Data Splitting</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 h-4 bg-blue-200 rounded-full">
            <div className="w-3/5 h-full bg-blue-600 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600">Training (60%)</span>
          <div className="flex-1 h-4 bg-green-200 rounded-full">
            <div className="w-1/5 h-full bg-green-600 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600">Validation (20%)</span>
          <div className="flex-1 h-4 bg-red-200 rounded-full">
            <div className="w-1/5 h-full bg-red-600 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600">Test (20%)</span>
        </div>
      </div>

      {/* Model Comparison */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Model Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Logistic Regression', acc: '92%' },
            { name: 'Random Forest', acc: '96%' },
            { name: 'Support Vector Machine (SVM)', acc: '94%' },
            { name: 'K-Nearest Neighbors (KNN)', acc: '91%' },
            { name: 'Decision Tree', acc: '93%' }
          ].map((model, idx) => (
            <div key={idx} className="p-4 border rounded-lg">
              <h3 className="font-medium text-gray-800">{model.name}</h3>
              <p className="text-sm text-gray-600 mt-2">Accuracy: {model.acc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hyperparameter Tuning */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Hyperparameter Tuning</h2>
        <p className="text-gray-600 mb-4">
          GridSearchCV and RandomizedSearchCV were used to optimize parameters like max_depth, C, and n_neighbors for each model.
        </p>
        <img
          src="/images/hyperparameter-results.png" // Replace with your actual tuning graph image
          alt="Hyperparameter Tuning Results"
          className="w-full rounded-lg"
        />
      </div>

      {/* Evaluation Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Performance Evaluation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Confusion Matrix (Best Model)</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-bold">True Positive</p>
                <p>182</p>
              </div>
              <div className="bg-red-100 p-4 rounded text-center">
                <p className="font-bold">False Positive</p>
                <p>12</p>
              </div>
              <div className="bg-red-100 p-4 rounded text-center">
                <p className="font-bold">False Negative</p>
                <p>8</p>
              </div>
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-bold">True Negative</p>
                <p>178</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="font-medium">96%</span>
              </div>
              <div className="flex justify-between">
                <span>Precision:</span>
                <span className="font-medium">95%</span>
              </div>
              <div className="flex justify-between">
                <span>Recall:</span>
                <span className="font-medium">96.7%</span>
              </div>
              <div className="flex justify-between">
                <span>F1 Score:</span>
                <span className="font-medium">95.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Validation */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">5. Cross-Validation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">K-Fold Results (K=5)</h3>
            {[
              { fold: 'Fold 1', score: 94 },
              { fold: 'Fold 2', score: 96 },
              { fold: 'Fold 3', score: 95 },
              { fold: 'Fold 4', score: 97 },
              { fold: 'Fold 5', score: 94 }
            ].map((f, idx) => (
              <div key={idx} className="flex items-center mt-1">
                <span className="w-24 text-sm text-gray-600">{f.fold}:</span>
                <div className="flex-1 h-4 bg-blue-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${f.score}%` }}></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">{f.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelTraining;
