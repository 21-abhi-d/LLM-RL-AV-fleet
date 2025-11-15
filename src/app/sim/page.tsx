"use client";

import { useEffect, useState } from "react";

import SimulationSettings from "../_components/SimulationSettings";
import SimulationCard from "../_components/SimulationCard";
import SimulationMetricsCard from "../_components/SimulationMetricsCard";

import { normalizeEpisode } from "~/utils/normalizeEpisode";
import type { EpisodeUnified, Timestep } from "~/types/sim";

export default function SimulationPage() {
  const [fleetSize, setFleetSize] = useState("6");
  const [map, setMap] = useState("MiniCity");
  const [speed, setSpeed] = useState("1x");

  const [progress, setProgress] = useState(0);

  const [episode, setEpisode] = useState<EpisodeUnified | null>(null);

  // Load the test data
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/demo_data/rl/test/episode.json");

        if (!res.ok) {
          console.error("Failed to fetch episode:", res.statusText);
          return;
        }

        const raw = (await res.json()) as unknown;
        const normalized = normalizeEpisode(raw);
        setEpisode(normalized);
      } catch (err) {
        console.error("Failed to load episode:", err);
      }
    }

    void load();
  }, []);

  const timesteps = episode?.timesteps ?? [];
  const totalSteps = timesteps.length;

  // Maps slider 0–100 to index 0–steps-1
  const currentIndex =
    totalSteps > 1 ? Math.round((progress / 100) * (totalSteps - 1)) : 0;

  const currentTimestep: Timestep | null =
    timesteps[currentIndex] ?? null;

  return (
    <main className="min-h-screen bg-[#fdfcf7] text-black flex flex-col items-center py-8 px-6">

      {/* ===================== TITLE ===================== */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        LLM Simulation for Decision-making in Dynamic Urban Environments
      </h1>

      {/* ===================== SETTINGS ===================== */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-2xl font-semibold mb-4">Simulation Settings</h2>
      </div>

      <SimulationSettings
        fleetSize={fleetSize}
        setFleetSize={setFleetSize}
        map={map}
        setMap={setMap}
        speed={speed}
        setSpeed={setSpeed}
      />

      {/* ===================== SLIDER ===================== */}
      <div className="w-full max-w-6xl my-8">
        <h2 className="text-2xl font-semibold mb-4">Simulation Timeline</h2>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-gray-600 text-sm">
            Progress: {progress}% {currentTimestep && ` | t = ${currentTimestep.t}`}
          </p>
        </div>
      </div>

      {/* ===================== SIMULATION VISUALS ===================== */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-2xl font-semibold mb-4">Simulation Visuals</h2>
      </div>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <SimulationCard title="RL-Only Simulation" timestep={currentTimestep} />
        <SimulationCard title="LLM-Augmented Simulation" timestep={null} />
      </section>

      {/* ===================== METRICS ===================== */}
      <div className="w-full max-w-6xl mb-4">
        <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
      </div>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        <SimulationMetricsCard
          title="RL Metrics"
          metrics={currentTimestep?.metrics ?? null}
        />
        <SimulationMetricsCard title="LLM Metrics" metrics={null} />
      </section>
    </main>
  );
}
