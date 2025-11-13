// src/utils/fetchData.ts

// 1️⃣ Define what metrics look like
export interface SimulationMetrics {
  avg_wait_time: number;
  utilization: number;
  [key: string]: number | string | undefined; // allows extra fields if backend adds new metrics
}

// 2️⃣ Define what the entire simulation data response looks like
export interface SimulationData {
  metrics?: SimulationMetrics;
  vehicles?: unknown[];  // You can type these later
  requests?: unknown[];
  timestamp?: string;
}

// 3️⃣ Fetch function that returns a typed SimulationData object
export async function fetchSimulationData(mode: string): Promise<SimulationData> {
  const res = await fetch(`http://localhost:8000/simulation/${mode}`, {
    next: { revalidate: 0 }, // ensures no caching (always fetch fresh data)
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch simulation data for mode "${mode}"`);
  }

  // Parse JSON safely
  const data: unknown = await res.json();

  // Minimal runtime validation
  if (typeof data === "object" && data !== null) {
    return data as SimulationData;
  }

  throw new Error("Invalid simulation response format");
}
