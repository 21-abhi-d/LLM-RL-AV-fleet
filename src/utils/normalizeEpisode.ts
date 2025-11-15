import type { EpisodeUnified, Timestep } from "~/types/sim";

type MaybeUnified = {
  timesteps?: unknown;
};

function isUnifiedEpisode(raw: unknown): raw is EpisodeUnified {
  return (
    typeof raw === "object" &&
    raw !== null &&
    Array.isArray((raw as MaybeUnified).timesteps)
  );
}


function isOldEpisode(raw: unknown): raw is Timestep[] {
  return Array.isArray(raw);
}

export function normalizeEpisode(raw: unknown): EpisodeUnified {
  if (isUnifiedEpisode(raw)) {
    return raw;
  }

  if (isOldEpisode(raw)) {
    const timesteps = raw;

    return {
      meta: {
        fleet_size: 0,
        total_steps: timesteps.length,
        log_interval: 0,
        smooth_window: 0,
        model_type: "RL",
      },
      timesteps,
      summary: {},
    };
  }

  throw new Error("Unknown episode JSON structure");
}
