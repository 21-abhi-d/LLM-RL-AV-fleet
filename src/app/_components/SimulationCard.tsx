import type { Timestep, VehicleCompressed } from "~/types/sim";

export default function SimulationCard({
  title,
  timestep,
}: {
  title: string;
  timestep: Timestep | null;
}) {
  if (!timestep) {
    return (
      <section className="bg-[#050816] text-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        <div className="border border-gray-700 rounded-xl h-64 flex items-center justify-center text-gray-400">
          (Waiting for data)
        </div>
      </section>
    );
  }

  // Typed handling of both formats
  let vehicles: VehicleCompressed[] = [];

  if (Array.isArray(timestep.vehicles)) {
    vehicles = timestep.vehicles;
  } else {
    const dict = timestep.vehicles as Record<
      string,
      { pos?: [number, number]; status?: string }
    >;

    vehicles = Object.entries(dict).map(([id, v]) => {
      return [
        id,
        v.pos?.[0] ?? 0,
        v.pos?.[1] ?? 0,
        v.status === "busy" ? 1 : 0,
      ] as VehicleCompressed;
    });
  }

  const vehicleCount = vehicles.length;
  const busy = vehicles.filter((v) => v[3] === 1).length;

  return (
    <section className="bg-[#050816] text-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>

      <div className="border border-gray-700 rounded-xl h-64 flex flex-col items-center justify-center text-gray-400">
        <p>t = {timestep.t}</p>
        <p>Vehicles: {vehicleCount}</p>
        <p>Busy: {busy}</p>
        <p>Active Requests: {timestep.metrics.active_requests}</p>
      </div>
    </section>
  );
}
