"use client";

import React from "react";

interface SimulationSettingsProps {
  fleetSize: string;
  setFleetSize: (value: string) => void;
  map: string;
  setMap: (value: string) => void;
  speed: string;
  setSpeed: (value: string) => void;
}

export default function SimulationSettings({
  fleetSize,
  setFleetSize,
  map,
  setMap,
  speed,
  setSpeed,
}: SimulationSettingsProps) {
  return (
    <section className="w-full max-w-4xl bg-gray-900 rounded-xl px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3 mb-8">
      {/* Fleet Size */}
      <div className="flex flex-col items-start text-sm">
        <label className="text-gray-400 mb-1">Fleet Size</label>
        <select
          value={fleetSize}
          onChange={(e) => setFleetSize(e.target.value)}
          className="bg-gray-800 text-white rounded-lg px-2 py-1 text-sm"
        >
          <option>6</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>

      {/* Map Type */}
      <div className="flex flex-col items-start text-sm">
        <label className="text-gray-400 mb-1">Map</label>
        <select
          value={map}
          onChange={(e) => setMap(e.target.value)}
          className="bg-gray-800 text-white rounded-lg px-2 py-1 text-sm"
        >
          <option>MiniCity</option>
          <option>Grid5x5</option>
          <option>TrafficLightGrid</option>
          <option>Highway</option>
        </select>
      </div>

      {/* Simulation Speed */}
      <div className="flex flex-col items-start text-sm">
        <label className="text-gray-400 mb-1">Simulation Speed</label>
        <select
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          className="bg-gray-800 text-white rounded-lg px-2 py-1 text-sm"
        >
          <option>0.5x</option>
          <option>1x</option>
          <option>2x</option>
          <option>4x</option>
        </select>
      </div>
    </section>
  );
}
