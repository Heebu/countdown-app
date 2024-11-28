import React from "react";
import Countdown from "./countdown";

function App() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-950 text-white">
        <header className="text-center mb-10">
          <img src="/ir.png" alt="IR Logo" className="h-40 w-auto mx-auto" />
          <h1 className="text-4xl font-bold mt-4">Countdown To Our Get Together</h1>
        </header>
        <Countdown targetDate="2024-12-23T00:00:00" />
      </div>
  );
}

export default App;
