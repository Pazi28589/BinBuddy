import React, { useState } from 'react';
import { Download, FileText, BarChart2, List } from 'lucide-react';

const Reports = () => {
  const [reportType, setReportType] = useState("inventory");
  const [dateRange, setDateRange] = useState({
    start: "",
    end: ""
  });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({ ...prev, [name]: value }));
  };

  const generateReport = () => {
    console.log("Generating report", { reportType, dateRange });
    // In a real app, this would trigger report generation and download
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Reports</h1>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setReportType("inventory")}
                className={`p-3 rounded-lg flex flex-col items-center ${reportType === "inventory" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
              >
                <FileText className="w-5 h-5 mb-1" />
                <span className="text-xs">Inventory</span>
              </button>
              <button
                onClick={() => setReportType("sales")}
                className={`p-3 rounded-lg flex flex-col items-center ${reportType === "sales" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
              >
                <BarChart2 className="w-5 h-5 mb-1" />
                <span className="text-xs">Sales</span>
              </button>
              <button
                onClick={() => setReportType("orders")}
                className={`p-3 rounded-lg flex flex-col items-center ${reportType === "orders" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
              >
                <List className="w-5 h-5 mb-1" />
                <span className="text-xs">Orders</span>
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                name="start"
                value={dateRange.start}
                onChange={handleDateChange}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Start date"
              />
              <input
                type="date"
                name="end"
                value={dateRange.end}
                onChange={handleDateChange}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="End date"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={generateReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" /> Generate PDF
          </button>
          <button
            onClick={generateReport}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" /> Generate CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;