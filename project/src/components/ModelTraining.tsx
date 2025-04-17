import React from 'react';

function ModelTraining() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-pink-600">Breast Cancer Model Training</h1>

      {/* Data Splitting */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-500">1. Data Splitting</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 h-4 bg-pink-100 rounded-full">
            <div className="w-4/5 h-full bg-pink-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-700">Training (80%)</span>
          <div className="flex-1 h-4 bg-fuchsia-100 rounded-full">
            <div className="w-1/5 h-full bg-fuchsia-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-700">Testing (20%)</span>
        </div>
      </div>

      {/* Model Comparison */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-500">2. Model Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Logistic Regression (Best)', acc: '99.12%' },
            { name: 'Random Forest', acc: '95.61%' },
            { name: 'SVM', acc: '96.49%' },
            { name: 'KNN', acc: '95.61%' },
            { name: 'Decision Tree', acc: '92.11%' }
          ].map((model, idx) => (
            <div key={idx} className="p-4 border border-pink-100 rounded-xl bg-gray-50">
              <h3 className="font-medium text-pink-600">{model.name}</h3>
              <p className="text-sm text-gray-600 mt-2">Accuracy: {model.acc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hyperparameter Tuning */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-500">3. Hyperparameter Tuning</h2>
        <p className="text-gray-700 mb-4">
          GridSearchCV was used to optimize parameters like <code>max_depth</code>, <code>C</code>, and <code>n_neighbors</code> for each model.
        </p>
        <img
          src="/images/hyper.png"
          alt="Hyperparameter Tuning Results"
          className="w-full rounded-lg border border-gray-200"
        />
      </div>

      {/* Evaluation Metrics */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-500">4. Performance Evaluation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-pink-600 mb-2">Confusion Matrix (Logistic Regression)</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-pink-100 p-4 rounded text-center">
                <p className="font-bold">True Positive</p>
                <p>72</p>
              </div>
              <div className="bg-red-100 p-4 rounded text-center">
                <p className="font-bold">False Positive</p>
                <p>0</p>
              </div>
              <div className="bg-red-100 p-4 rounded text-center">
                <p className="font-bold">False Negative</p>
                <p>1</p>
              </div>
              <div className="bg-pink-100 p-4 rounded text-center">
                <p className="font-bold">True Negative</p>
                <p>41</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-pink-600 mb-2">Metrics</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="font-medium">99.12%</span>
              </div>
              <div className="flex justify-between">
                <span>Precision:</span>
                <span className="font-medium">99%</span>
              </div>
              <div className="flex justify-between">
                <span>Recall:</span>
                <span className="font-medium">98%</span>
              </div>
              <div className="flex justify-between">
                <span>F1 Score:</span>
                <span className="font-medium">99%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Validation */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-500">5. Cross-Validation</h2>
        <p className="text-gray-700 mb-4">
          5-Fold Cross-Validation was applied to training data to validate model stability.
        </p>
        <div className="space-y-3">
          {[
            { fold: 'Fold 1', score: 96.4 },
            { fold: 'Fold 2', score: 98.3},
            { fold: 'Fold 3', score: 98.2},
            { fold: 'Fold 4', score: 97.3},
            { fold: 'Fold 5', score: 98.3}
          ].map((f, idx) => (
            <div key={idx} className="flex items-center">
              <span className="w-24 text-sm text-gray-600">{f.fold}:</span>
              <div className="flex-1 h-4 bg-pink-100 rounded-full">
                <div
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${f.score}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-700">{f.score}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelTraining;

