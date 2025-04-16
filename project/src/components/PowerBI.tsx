import React from 'react';
import { ExternalLink } from 'lucide-react';

function PowerBI() {
  // Replace this with your actual PowerBI dashboard URL
  const powerBiDashboardUrl = "https://app.powerbi.com/your-dashboard-url";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Power BI Dashboard</h1>
        <a
          href={powerBiDashboardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Live Dashboard
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Interactive Dashboard</h2>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Power BI Dashboard"
            className="w-full rounded-lg"
          />
        </div>
        <p className="mt-4 text-gray-600">
          Our Power BI dashboard provides interactive visualizations of the model results and key metrics.
          Users can filter and drill down into specific aspects of the analysis.
          Click the "Open Live Dashboard" button above to access the full interactive version.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Model Accuracy</span>
              <span className="text-lg font-semibold text-blue-600">87%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Features Used</span>
              <span className="text-lg font-semibold text-blue-600">15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Time</span>
              <span className="text-lg font-semibold text-blue-600">2.5s</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Real-time Monitoring</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800">System Status</h3>
              <div className="flex items-center mt-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-600">All systems operational</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Last Updated</h3>
              <p className="text-sm text-gray-600 mt-2">2 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerBI;