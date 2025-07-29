import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChatbotManagement from './components/ChatbotManagement';
import DocumentUpload from './components/DocumentUpload';
import Analytics from './components/Analytics';
import Settings from './components/Settings';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'chatbots':
        return <ChatbotManagement />;
      case 'documents':
        return <DocumentUpload />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 ml-64 p-6">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;