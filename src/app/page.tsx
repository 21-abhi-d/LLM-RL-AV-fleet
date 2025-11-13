"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          AV <span className="text-[hsla(205,94%,39%,1.00)]">Fleet</span> Simulation
        </h1>

        <p className="text-2xl text-white max-w-2xl">
          This thesis demo showcases an RL + LLM based control mechanism for autonomous
          vehicle fleet management using SUMO and Flow.
        </p>

        <button
          onClick={() => router.push("/sim")}
          className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200"
        >
          Start Simulation
        </button>

        <p className="text-gray-300 text-sm mt-4">
          No authentication required. Directly launches simulation environment.
        </p>
      </div>
    </main>
  );
}
