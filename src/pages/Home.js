import React from 'react';
import Card from '../components/Card';
import Chart from '../components/Chart';

const Home = () => {
  const summaryData = [
    { title: "Total Products", value: 245, icon: "package", trend: "up", change: "12%" },
    { title: "Low Stock Items", value: 18, icon: "alert-circle", trend: "up", change: "5%" },
    { title: "Recent Orders", value: 32, icon: "shopping-cart", trend: "down", change: "8%" },
    { title: "Active Alerts", value: 7, icon: "bell", trend: "same" }
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} icon={item.icon} trend={item.trend} change={item.change} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Inventory Trends</h2>
          <Chart type="line" />
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Sales Analytics</h2>
          <Chart type="bar" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
          <i className="fas fa-plus"></i> Add Product
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
          <i className="fas fa-boxes"></i> View Inventory
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
          <i className="fas fa-file-alt"></i> Generate Report
        </button>
      </div>
    </div>
  );
};

export default Home;