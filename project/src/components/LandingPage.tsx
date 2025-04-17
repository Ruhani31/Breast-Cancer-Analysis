import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Activity,
  Brain,
  Sliders,
  LineChart
} from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
}

function LandingPage({ onLoginClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Breast Cancer Analysis Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An interactive platform presenting a full-fledged machine learning pipeline for breast cancer prediction—
            including data exploration, dimensionality reduction, model comparison, explainability, and Power BI insights.
          </p>
          <button
            onClick={onLoginClick}
            className="mt-8 inline-flex items-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
          >
            Login to Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Key Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Activity className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Preprocessing</h3>
            <p className="text-gray-600">
              Cleaning, encoding, and transforming raw medical data into a model-ready format.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart3 className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exploratory Analysis</h3>
            <p className="text-gray-600">
              Univariate, bivariate, and multivariate visualizations revealing patterns and insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Sliders className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dimensionality Reduction</h3>
            <p className="text-gray-600">
              Principal Component Analysis (PCA) applied for feature compression and interpretability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Brain className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Model Training</h3>
            <p className="text-gray-600">
              Logistic Regression, SVM, Random Forest, and others evaluated with SHAP-based explainability.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">About the Project</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              This breast cancer analysis project demonstrates the complete ML pipeline on a real-world healthcare dataset.
              We focus on high interpretability, precise predictions, and seamless integration of business intelligence tools.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>In-depth Exploratory Data Analysis (EDA) with visualization</li>
              <li>Feature engineering and dimensionality reduction via PCA</li>
              <li>Training and comparing multiple ML models (LogReg, SVM, RF, etc.)</li>
              <li>SHAP explainability integration to interpret predictions</li>
              <li>Power BI dashboards for interactive business insights</li>
            </ul>
            <p className="text-gray-600">
              The project not only highlights technical depth but also provides intuitive visuals and a user-friendly dashboard interface for stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
