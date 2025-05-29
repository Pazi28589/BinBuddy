import React from 'react';
import { AlertCircle, Clock, BellOff } from 'lucide-react';

const Alerts = () => {
  const alerts = [
    { id: 1, type: "low-stock", product: "Ceramic Mug", currentStock: 3, threshold: 5, date: "2023-05-20", severity: "high" },
    { id: 2, type: "low-stock", product: "Organic Tea Bags", currentStock: 12, threshold: 15, date: "2023-05-18", severity: "medium" },
    { id: 3, type: "expiring", product: "Premium Coffee Beans", expiryDate: "2023-06-15", daysLeft: 25, severity: "low" },
    { id: 4, type: "low-stock", product: "Coffee Filters", currentStock: 8, threshold: 10, date: "2023-05-22", severity: "medium" }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "low-stock": return <AlertCircle className="w-5 h-5" />;
      case "expiring": return <Clock className="w-5 h-5" />;
      default: return <BellOff className="w-5 h-5" />;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Alerts & Notifications</h1>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start p-4 border border-gray-200 rounded-lg">
              <div className={`p-2 rounded-full mr-4 ${getSeverityColor(alert.severity)}`}>
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  {alert.type === "low-stock" 
                    ? `Low Stock: ${alert.product} (${alert.currentStock} remaining)` 
                    : `Expiring Soon: ${alert.product} (${alert.daysLeft} days left)`}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {alert.type === "low-stock" 
                    ? `Stock level below threshold of ${alert.threshold}. Last updated: ${alert.date}` 
                    : `Expiry date: ${alert.expiryDate}`}
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;