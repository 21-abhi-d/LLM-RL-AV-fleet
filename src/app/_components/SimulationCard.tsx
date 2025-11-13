"use client";

import React from "react";

interface SimulationCardProps {
  title: string;
}

export default function SimulationCard({ title }: SimulationCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center h-[350px] border border-gray-200">
      <p className="text-xl font-semibold mb-4">{title}</p>
      <div className="border border-dashed border-gray-300 rounded-lg h-full w-full flex items-center justify-center text-gray-400">
        (Simulation Visual Placeholder)
      </div>
    </div>
  );
}
