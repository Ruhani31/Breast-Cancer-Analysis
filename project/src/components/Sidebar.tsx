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
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Project Dashboard</h2>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
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