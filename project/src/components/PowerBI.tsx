import React from 'react';
import { ExternalLink } from 'lucide-react';

function PowerBI() {
  // Replace this with your actual PowerBI dashboard URL
  const powerBiDashboardUrl = "https://app.powerbi.com/your-dashboard-url";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Breast Cancer Prediction Dashboard</h1>
        <a
          href={powerBiDashboardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Open Live Dashboard
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-700">Interactive Prediction Dashboard</h2>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="/images/Dashboard.png"
            alt="Breast Cancer Prediction Dashboard"
            className="w-full rounded-lg"
          />
        </div>
        <p className="mt-4 text-gray-600">
          This dashboard provides interactive visualizations of breast cancer prediction results and key performance metrics. 
          You can filter and analyze various aspects of the model's predictions and key metrics related to the dataset.
          Click the "Open Live Dashboard" button above to access the full interactive version.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-fuchsia-700">Key Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Model Accuracy</span>
              <span className="text-lg font-semibold text-pink-600">99%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Features Used</span>
              <span className="text-lg font-semibold text-pink-600">32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Prediction Time</span>
              <span className="text-lg font-semibold text-pink-600">2.5s</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-fuchsia-700">Real-time Monitoring</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800">System Status</h3>
              <div className="flex items-center mt-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-600">All systems operational</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Last Prediction Update</h3>
              <p className="text-sm text-gray-600 mt-2">5 minutes ago</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Model Version</h3>
              <p className="text-sm text-gray-600 mt-2">v1.2.3 (PCA)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerBI;
