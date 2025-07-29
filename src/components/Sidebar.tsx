import React from 'react';
import { 
  BarChart3, 
  Bot, 
  FileText, 
  Settings, 
  TrendingUp,
  Home,
  Calculator,
  Eye
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'chatbots', label: 'Quản lý Chatbot', icon: Bot },
    { id: 'documents', label: 'Tài liệu', icon: FileText },
    { id: 'analytics', label: 'Thống kê', icon: TrendingUp },
    { id: 'settings', label: 'Cài đặt', icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ChatBot Manager</h1>
            <p className="text-sm text-gray-500">Quản lý AI Assistant</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Calculator className="h-5 w-5" />
            <span className="font-semibold">EasyBooks</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5" />
            <span className="font-semibold">eVision</span>
          </div>
          <p className="text-blue-100 text-sm mt-2">Hệ thống AI đa nền tảng</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;