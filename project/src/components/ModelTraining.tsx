import React from 'react';

function ModelTraining() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Machine Learning Model Training</h1>

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

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">2. Model Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-gray-800">Random Forest</h3>
            <p className="text-sm text-gray-600 mt-2">Accuracy: 85%</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-gray-800">XGBoost</h3>
            <p className="text-sm text-gray-600 mt-2">Accuracy: 87%</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-gray-800">LightGBM</h3>
            <p className="text-sm text-gray-600 mt-2">Accuracy: 86%</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium text-gray-800">Neural Network</h3>
            <p className="text-sm text-gray-600 mt-2">Accuracy: 84%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">3. Hyperparameter Tuning</h2>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Hyperparameter Tuning Results"
          className="w-full rounded-lg"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">4. Performance Evaluation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Confusion Matrix</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-bold">True Positive</p>
                <p>156</p>
              </div>
              <div className="bg-red-100 p-4 rounded text-center">
                <p className="font-bold">False Positive</p>
                <p>24</p>
              </div>
              <div className="bg-red-100 p-4 rounded text-center">
                <p className="font-bold">False Negative</p>
                <p>18</p>
              </div>
              <div className="bg-green-100 p-4 rounded text-center">
                <p className="font-bold">True Negative</p>
                <p>162</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="font-medium">87%</span>
              </div>
              <div className="flex justify-between">
                <span>Precision:</span>
                <span className="font-medium">86%</span>
              </div>
              <div className="flex justify-between">
                <span>Recall:</span>
                <span className="font-medium">89%</span>
              </div>
              <div className="flex justify-between">
                <span>F1 Score:</span>
                <span className="font-medium">87.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">5. Model Validation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">Cross-Validation Results</h3>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="w-20 text-sm text-gray-600">Fold 1:</span>
                <div className="flex-1 h-4 bg-blue-200 rounded-full">
                  <div className="w-4/5 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">80%</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-20 text-sm text-gray-600">Fold 2:</span>
                <div className="flex-1 h-4 bg-blue-200 rounded-full">
                  <div className="w-5/6 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">83%</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-20 text-sm text-gray-600">Fold 3:</span>
                <div className="flex-1 h-4 bg-blue-200 rounded-full">
                  <div className="w-9/10 h-full bg-blue-600 rounded-full"></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelTraining;