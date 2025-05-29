import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const Card = ({ title, value, icon, trend, change }) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up": return <ArrowUp className="w-4 h-4 text-green-500" />;
      case "down": return <ArrowDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-1">{value}</h3>
        </div>
        <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
          {React.createElement(icon, { className: "w-5 h-5 text-blue-600" })}
        </div>
      </div>
      {change && (
        <div className="mt-4 flex items-center">
          {getTrendIcon()}
          <span className={`ml-1 text-sm font-medium ${
            trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-600"
          }`}>
            {change} {trend === "up" ? "increase" : trend === "down" ? "decrease" : ""}
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;