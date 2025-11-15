import type { Metrics } from "~/types/sim";

export default function SimulationMetricsCard({
  title,
  metrics,
}: {
  title: string;
  metrics: Metrics | null;
}) {
  if (!metrics) {
    return (
      <section className="bg-[#050816] text-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        <div className="border border-gray-700 rounded-xl h-40 flex items-center justify-center text-gray-300">
          (Waiting for data)
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#050816] text-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>

      <div className="border border-gray-700 rounded-xl p-4 flex flex-col text-gray-300 text-sm space-y-1">
        <p>Avg Wait: {metrics.avg_wait.toFixed(2)}</p>
        <p>Trip Duration: {metrics.avg_trip_duration.toFixed(2)}</p>
        <p>Completion: {(metrics.completion_rate * 100).toFixed(1)}%</p>
        <p>Utilization: {(metrics.utilization * 100).toFixed(1)}%</p>
        <p>Reward: {metrics.reward.toFixed(3)}</p>

        {metrics.rolling_avg_wait !== undefined && (
          <>
            <hr className="border-gray-700 my-2" />
            <p>Smoothed Avg Wait: {metrics.rolling_avg_wait.toFixed(2)}</p>
            <p>
              Smoothed Utilization:{" "}
              {(metrics.rolling_utilization! * 100).toFixed(1)}%
            </p>
            <p>Smoothed Reward: {metrics.rolling_reward!.toFixed(3)}</p>
          </>
        )}
      </div>
    </section>
  );
}
