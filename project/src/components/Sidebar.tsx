import React from 'react';
import { Database, BarChart3, GitBranch, Share2, PieChart } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: 'preprocessing', icon: Database, label: 'Data Preprocessing' },
    { id: 'eda', icon: BarChart3, label: 'EDA' },
    { id: 'dimensionality', icon: GitBranch, label: 'Dimensionality Reduction' },
    { id: 'model', icon: Share2, label: 'Model Training' },
    { id: 'powerbi', icon: PieChart, label: 'Power BI Dashboard' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg">
      <div className="p-4 border-b-2 border-fuchsia-700">
        <h2 className="text-xl font-bold text-fuchsia-700">Breast Cancer Prediction</h2>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-pink-100 text-fuchsia-700 border-l-4 border-fuchsia-700'
                  : 'text-gray-600 hover:bg-pink-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
