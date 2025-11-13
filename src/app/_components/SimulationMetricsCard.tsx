"use client";

import React from "react";

interface MetricsCardProps {
  title: string;
}

export default function SimulationMetricsCard({ title }: MetricsCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 h-[250px] flex items-center justify-center text-gray-400 border border-gray-200">
      {title} Graph Placeholder
    </div>
  );
}
