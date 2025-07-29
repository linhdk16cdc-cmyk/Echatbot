import React, { useState } from 'react';
import { 
  Calculator, 
  Eye, 
  Settings, 
  Play, 
  Pause, 
  RefreshCw,
  AlertCircle,
  CheckCircle,
  MoreVertical
} from 'lucide-react';

const ChatbotManagement: React.FC = () => {
  const [selectedChatbot, setSelectedChatbot] = useState('easybooks');

  const chatbots = [
    {
      id: 'easybooks',
      name: 'EasyBooks AI',
      description: 'Chatbot hỗ trợ hệ thống kế toán',
      icon: Calculator,
      status: 'active',
      version: '2.1.0',
      lastUpdate: '2024-01-15',
      totalQuestions: 15420,
      successRate: 96.3,
      avgResponseTime: 1.1,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      features: [
        'Hướng dẫn nhập liệu kế toán',
        'Xuất báo cáo tài chính',
        'Hỗ trợ thuế và pháp lý',
        'Quản lý khách hàng nhà cung cấp'
      ]
    },
    {
      id: 'evision',
      name: 'eVision AI',
      description: 'Chatbot hỗ trợ hệ thống thị giác máy tính',
      icon: Eye,
      status: 'active',
      version: '1.8.2',
      lastUpdate: '2024-01-12',
      totalQuestions: 8940,
      successRate: 92.7,
      avgResponseTime: 1.4,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      features: [
        'Hướng dẫn cài đặt camera',
        'Cấu hình điểm danh',
        'Phát hiện cháy nổ',
        'Báo cáo an ninh'
      ]
    }
  ];

  const selectedBot = chatbots.find(bot => bot.id === selectedChatbot);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Chatbot</h1>
          <p className="text-gray-600 mt-1">Cấu hình và giám sát các AI Assistant</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chatbot List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Danh sách Chatbot</h2>
            <div className="space-y-3">
              {chatbots.map((bot) => {
                const Icon = bot.icon;
                return (
                  <div
                    key={bot.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedChatbot === bot.id
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedChatbot(bot.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`${bot.color} p-2 rounded-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{bot.name}</h3>
                        <p className="text-sm text-gray-600">{bot.description}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            bot.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {bot.status === 'active' ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Hoạt động
                              </>
                            ) : (
                              <>
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Tạm dừng
                              </>
                            )}
                          </span>
                          <span className="text-xs text-gray-500">v{bot.version}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Chatbot Details */}
        <div className="lg:col-span-2 space-y-6">
          {selectedBot && (
            <>
              {/* Header */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${selectedBot.color} p-3 rounded-xl`}>
                      <selectedBot.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedBot.name}</h2>
                      <p className="text-gray-600">{selectedBot.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">
                          Phiên bản: {selectedBot.version}
                        </span>
                        <span className="text-sm text-gray-500">
                          Cập nhật: {selectedBot.lastUpdate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Settings className="h-4 w-4" />
                      <span>Cấu hình</span>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tổng câu hỏi</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedBot.totalQuestions.toLocaleString()}</p>
                    </div>
                    <div className="text-blue-600">
                      <RefreshCw className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tỷ lệ thành công</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedBot.successRate}%</p>
                    </div>
                    <div className="text-green-600">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Thời gian phản hồi</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedBot.avgResponseTime}s</p>
                    </div>
                    <div className="text-purple-600">
                      <Play className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features & Controls */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tính năng chính</h3>
                  <div className="space-y-3">
                    {selectedBot.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Điều khiển</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Trạng thái hoạt động</h4>
                        <p className="text-sm text-gray-600">Bật/tắt chatbot</p>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Pause className="h-4 w-4" />
                        <span>Tạm dừng</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Cập nhật mô hình</h4>
                        <p className="text-sm text-gray-600">Tải lại dữ liệu training</p>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <RefreshCw className="h-4 w-4" />
                        <span>Cập nhật</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Cài đặt nâng cao</h4>
                        <p className="text-sm text-gray-600">Tùy chỉnh tham số AI</p>
                      </div>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        <Settings className="h-4 w-4" />
                        <span>Cấu hình</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotManagement;