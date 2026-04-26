"use client";

import { cn } from "@/lib/utils";
import { IconFlame, IconShield, IconUsers, IconTrophy, IconClock, IconLeaf, IconSettings, IconHeart } from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Premium Quality",
      description: "Crafted with the finest materials for authentic taste and lasting durability.",
      icon: <IconFlame className="w-6 h-6" />,
    },
    {
      title: "GST Registered",
      description: "Fully certified and compliant. GST: 07KOEPS5938R1ZO",
      icon: <IconShield className="w-6 h-6" />,
    },
    {
      title: "1000+ Happy Customers",
      description: "Trusted by restaurants, hotels, and home chefs across India.",
      icon: <IconUsers className="w-6 h-6" />,
    },
    {
      title: "Award-Winning Design",
      description: "Precision engineering meets traditional craftsmanship.",
      icon: <IconTrophy className="w-6 h-6" />,
    },
    {
      title: "Fast Delivery",
      description: "Pan India shipping with careful handling and timely delivery.",
      icon: <IconClock className="w-6 h-6" />,
    },
    {
      title: "Eco-Friendly",
      description: "Traditional cooking methods with minimal environmental impact.",
      icon: <IconLeaf className="w-6 h-6" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored sizing and specifications for your unique needs.",
      icon: <IconSettings className="w-6 h-6" />,
    },
    {
      title: "1 Year Warranty",
      description: "Comprehensive coverage and dedicated customer support.",
      icon: <IconHeart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-orange-500">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};