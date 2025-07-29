import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Clock,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7days');
  const [selectedSystem, setSelectedSystem] = useState('all');

  const topQuestions = [
    {
      question: 'Làm thế nào để xuất báo cáo tài chính?',
      system: 'EasyBooks',
      count: 234,
      trend: '+12%'
    },
    {
      question: 'Cách cài đặt camera điểm danh?',
      system: 'eVision',
      count: 189,
      trend: '+8%'
    },
    {
      question: 'Hướng dẫn nhập hóa đơn mua hàng',
      system: 'EasyBooks',
      count: 156,
      trend: '+15%'
    },
    {
      question: 'Phát hiện cháy nổ hoạt động như thế nào?',
      system: 'eVision',
      count: 142,
      trend: '+5%'
    },
    {
      question: 'Cách tạo báo cáo thuế VAT',
      system: 'EasyBooks',
      count: 128,
      trend: '+22%'
    }
  ];

  const userConcerns = [
    {
      category: 'Báo cáo tài chính',
      percentage: 35,
      count: 892,
      color: 'bg-blue-500'
    },
    {
      category: 'Cài đặt thiết bị',
      percentage: 28,
      count: 714,
      color: 'bg-purple-500'
    },
    {
      category: 'Nhập liệu kế toán',
      percentage: 18,
      count: 459,
      color: 'bg-green-500'
    },
    {
      category: 'Phát hiện sự cố',
      percentage: 12,
      count: 306,
      color: 'bg-orange-500'
    },
    {
      category: 'Khác',
      percentage: 7,
      count: 178,
      color: 'bg-gray-500'
    }
  ];

  const weeklyStats = [
    { day: 'Thứ 2', questions: 245, responses: 238, avgTime: 1.2 },
    { day: 'Thứ 3', questions: 289, responses: 282, avgTime: 1.1 },
    { day: 'Thứ 4', questions: 267, responses: 259, avgTime: 1.3 },
    { day: 'Thứ 5', questions: 298, responses: 290, avgTime: 1.0 },
    { day: 'Thứ 6', questions: 234, responses: 228, avgTime: 1.4 },
    { day: 'Thứ 7', questions: 156, responses: 152, avgTime: 1.2 },
    { day: 'Chủ nhật', questions: 134, responses: 131, avgTime: 1.1 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Thống kê & Phân tích</h1>
          <p className="text-gray-600 mt-1">Báo cáo chi tiết về hiệu suất chatbot</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Xuất báo cáo</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="24hours">24 giờ qua</option>
                <option value="7days">7 ngày qua</option>
                <option value="30days">30 ngày qua</option>
                <option value="90days">90 ngày qua</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tất cả hệ thống</option>
                <option value="easybooks">EasyBooks</option>
                <option value="evision">eVision</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tổng câu hỏi</p>
              <p className="text-2xl font-bold text-gray-900">1,889</p>
              <p className="text-sm text-green-600 mt-1">+12% so với tuần trước</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Người dùng hoạt động</p>
              <p className="text-2xl font-bold text-gray-900">542</p>
              <p className="text-sm text-green-600 mt-1">+8% so với tuần trước</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tỷ lệ trả lời thành công</p>
              <p className="text-2xl font-bold text-gray-900">94.2%</p>
              <p className="text-sm text-green-600 mt-1">+2.1% so với tuần trước</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Thời gian phản hồi TB</p>
              <p className="text-2xl font-bold text-gray-900">1.2s</p>
              <p className="text-sm text-green-600 mt-1">-0.3s so với tuần trước</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Performance Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Hiệu suất theo ngày</h2>
          </div>
          <div className="space-y-4">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{stat.day}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{stat.questions} câu hỏi</span>
                      <span>{stat.responses} trả lời</span>
                      <span>{stat.avgTime}s</span>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(stat.responses / stat.questions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Concerns */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="h-5 w-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">Vấn đề quan tâm</h2>
          </div>
          <div className="space-y-4">
            {userConcerns.map((concern, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <div className={`w-4 h-4 rounded ${concern.color}`}></div>
                  <span className="font-medium text-gray-900">{concern.category}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">{concern.count}</span>
                  <span className="font-semibold text-gray-900">{concern.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Questions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <MessageCircle className="h-5 w-5 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900">Câu hỏi phổ biến nhất</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Câu hỏi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hệ thống
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số lượt hỏi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Xu hướng
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topQuestions.map((q, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{q.question}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      q.system === 'EasyBooks' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {q.system}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {q.count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600">{q.trend}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;