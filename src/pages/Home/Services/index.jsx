import { Icon } from "@iconify/react";
import React from "react";

const Services = () => {
  const features = [
    {
      icon: <Icon icon="iconamoon:delivery-fast" width="28" height="28" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over 1,000,000 IDR",
    },
    {
      icon: <Icon icon="mdi:customer-service" width="28" height="28" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: (
        <Icon
          icon="streamline-flex:warranty-badge-highlight"
          width="28"
          height="28"
        />
      ),
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 ring-8 ring-gray-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-black mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
