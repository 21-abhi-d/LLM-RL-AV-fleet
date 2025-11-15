// Unified types & backward-compatible loader for old episode structures

export type VehicleCompressed = [string, number, number, 0 | 1];

export type RequestState = {
  id: string;
  pos: [number, number];
  time: number;
};

export type Metrics = {
  avg_wait: number;
  avg_trip_duration: number;
  completion_rate: number;
  utilization: number;
  active_requests: number;
  reward: number;

  // optional unified rolling metrics
  rolling_avg_wait?: number;
  rolling_utilization?: number;
  rolling_reward?: number;
};

export type Timestep = {
  t: number;
  vehicles: VehicleCompressed[] | Record<string, unknown>;
  requests: RequestState[];
  metrics: Metrics;
};

export type EpisodeUnified = {
  meta: {
    fleet_size: number;
    total_steps: number;
    log_interval: number;
    smooth_window: number;
    model_type: string;
  };
  timesteps: Timestep[];
  summary: unknown;
};

// For backward-compatibility (old files are just arrays)
export type EpisodeOld = Timestep[];
