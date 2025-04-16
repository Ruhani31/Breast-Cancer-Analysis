import React from 'react';
import { ArrowRight, BarChart3, Database, GitBranch, Share2 } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
}

function LandingPage({ onLoginClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Data Science Project Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive analysis platform showcasing data preprocessing, exploratory data analysis,
            dimensionality reduction, and machine learning model training results.
          </p>
          <button
            onClick={onLoginClick}
            className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login to Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Preprocessing</h3>
            <p className="text-gray-600">
              Comprehensive data cleaning, feature engineering, and preparation pipeline.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exploratory Analysis</h3>
            <p className="text-gray-600">
              In-depth statistical analysis and visualization of data patterns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <GitBranch className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dimensionality Reduction</h3>
            <p className="text-gray-600">
              Advanced techniques for feature selection and dimension reduction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Share2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Model Training</h3>
            <p className="text-gray-600">
              State-of-the-art machine learning models with performance metrics.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6">About the Project</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              This comprehensive data science project demonstrates the complete lifecycle of a machine learning solution, 
              from data preprocessing to model deployment. Our analysis includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Advanced data cleaning and preprocessing techniques</li>
              <li>Detailed exploratory data analysis with statistical insights</li>
              <li>Feature engineering and selection methods</li>
              <li>Implementation of various machine learning models</li>
              <li>Interactive visualizations through Power BI integration</li>
            </ul>
            <p className="text-gray-600">
              The project showcases best practices in data science and machine learning, 
              providing valuable insights through interactive dashboards and comprehensive analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;