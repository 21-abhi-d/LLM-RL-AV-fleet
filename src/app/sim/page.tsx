"use client";

import { useState } from "react";
import SimulationSettings from "../_components/SimulationSettings";
import SimulationCard from "../_components/SimulationCard";
import SimulationMetricsCard from "../_components/SimulationMetricsCard";

export default function SimulationPage() {
  // placeholders for controls
  const [fleetSize, setFleetSize] = useState("6");
  const [map, setMap] = useState("MiniCity");
  const [speed, setSpeed] = useState("1x");
  const [progress, setProgress] = useState(50);

  return (
    <main className="min-h-screen bg-white- text-black flex flex-col items-center py-8 px-6">
      {/* ===================== 1. TITLE ===================== */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        LLM Simulation for Decision-making in Dynamic Urban
Environments Demo
      </h1>

      {/* ===================== 2. SETTINGS PANEL ===================== */}
        <div className="w-full max-w-6xl mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-left">Simulation Settings</h2>
        </div>
      <SimulationSettings
        fleetSize={fleetSize}
        setFleetSize={setFleetSize}
        map={map}
        setMap={setMap}
        speed={speed}
        setSpeed={setSpeed}
      />

      {/* ===================== 3. SLIDER CONTROL ===================== */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-left">Simulation Timeline</h2>
      </div>
      <section className="w-full max-w-4xl flex flex-col items-center mb-10">
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="mt-2 text-gray-400 text-sm">
          Simulation Progress: {progress}%
        </p>
      </section>

      {/* ===================== 4. SIMULATION DISPLAY ===================== */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-left">Simulation Visuals</h2>
      </div>
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <SimulationCard title="RL-Only Simulation" />
        <SimulationCard title="RL + LLM Simulation" />
      </section>

      {/* ===================== 5. METRICS CHARTS ===================== */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-left">Performance Metrics</h2>
      </div>
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <SimulationMetricsCard title="RL Metrics" />
        <SimulationMetricsCard title="LLM Metrics" />
      </section>
    </main>
  );
}
