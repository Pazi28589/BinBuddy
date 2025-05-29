import React from 'react';

const Chart = ({ type }) => {
  // In a real app, you would use a charting library like Chart.js or Recharts
  // This is just a placeholder for the UI
  
  const getChartPlaceholder = () => {
    if (type === "line") {
      return (
        <div className="h-64 flex items-center justify-center">
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Line Chart Placeholder
          </div>
        </div>
      );
    } else {
      return (
        <div className="h-64 flex items-center justify-center">
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Bar Chart Placeholder
          </div>
        </div>
      );
    }
  };

  return getChartPlaceholder();
};

export default Chart;