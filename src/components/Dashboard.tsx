import React from 'react';
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Clock,
  Calculator,
  Eye,
  Bot,
  FileText
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Tổng người dùng',
      value: '2,847',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Câu hỏi hôm nay',
      value: '1,234',
      change: '+8%',
      changeType: 'positive',
      icon: MessageCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Tỷ lệ trả lời',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Thời gian phản hồi',
      value: '1.2s',
      change: '-0.3s',
      changeType: 'positive',
      icon: Clock,
      color: 'bg-orange-500'
    }
  ];

  const chatbotStats = [
    {
      name: 'EasyBooks AI',
      icon: Calculator,
      totalQuestions: 856,
      successRate: 96.3,
      avgResponseTime: 1.1,
      status: 'active',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      name: 'eVision AI',
      icon: Eye,
      totalQuestions: 378,
      successRate: 92.7,
      avgResponseTime: 1.4,
      status: 'active',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    }
  ];

  const recentQuestions = [
    {
      question: 'Làm thế nào để xuất báo cáo tài chính?',
      system: 'EasyBooks',
      time: '2 phút trước',
      status: 'answered'
    },
    {
      question: 'Hệ thống có phát hiện được khói lửa không?',
      system: 'eVision',
      time: '5 phút trước',
      status: 'answered'
    },
    {
      question: 'Cách cài đặt camera điểm danh mới?',
      system: 'eVision',
      time: '8 phút trước',
      status: 'answered'
    },
    {
      question: 'Hướng dẫn nhập hóa đơn mua hàng',
      system: 'EasyBooks',
      time: '12 phút trước',
      status: 'answered'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Tổng quan hệ thống ChatBot AI</p>
        </div>
        <div className="text-sm text-gray-500">
          Cập nhật lần cuối: {new Date().toLocaleString('vi-VN')}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chatbot Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Bot className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Hiệu suất Chatbot</h2>
          </div>
          <div className="space-y-4">
            {chatbotStats.map((bot, index) => {
              const Icon = bot.icon;
              return (
                <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`${bot.color} p-2 rounded-lg`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{bot.name}</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Hoạt động
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Câu hỏi</p>
                      <p className="font-semibold text-gray-900">{bot.totalQuestions}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Tỷ lệ thành công</p>
                      <p className="font-semibold text-gray-900">{bot.successRate}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Thời gian phản hồi</p>
                      <p className="font-semibold text-gray-900">{bot.avgResponseTime}s</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Questions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Câu hỏi gần đây</h2>
          </div>
          <div className="space-y-4">
            {recentQuestions.map((q, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  q.system === 'EasyBooks' ? 'bg-blue-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium text-sm">{q.question}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      q.system === 'EasyBooks' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {q.system}
                    </span>
                    <span className="text-xs text-gray-500">{q.time}</span>
                    <span className="text-xs text-green-600 font-medium">✓ Đã trả lời</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Thao tác nhanh</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <FileText className="h-6 w-6 text-gray-400" />
            <span className="text-gray-600 font-medium">Upload tài liệu mới</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
            <Bot className="h-6 w-6 text-gray-400" />
            <span className="text-gray-600 font-medium">Cấu hình chatbot</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
            <TrendingUp className="h-6 w-6 text-gray-400" />
            <span className="text-gray-600 font-medium">Xem báo cáo chi tiết</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;