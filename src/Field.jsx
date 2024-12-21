import React from "react";

const Field = ({ players }) => {
  // Default players if not provided
  const defaultPlayers = {
    bowler: { name: "Bowler" },
    wicketkeeper: { name: "Wicketkeeper" },
    batter1: { name: "Striker" }, // Batter on strike
    batter2: { name: "Non-Striker" }, // Batter on non-strike
    fielders: Array.from({ length: 9 }, (_, i) => ({
      name: `Fielder ${i + 1}`,
      position: {
        top: Math.random() * 80 + 10, // Ensure fielders stay inside field
        left: Math.random() * 80 + 10,
      },
    })),
  };

  const gamePlayers = players || defaultPlayers;

  return (
    <div className="flex flex-col items-center bg-green-200 min-h-screen py-4">
      {/* Cricket Field */}
      <div className="relative w-[90%] max-w-[1200px] h-[600px] bg-[#ade5ab] rounded-full border-[4px] border-white">
        {/* Bowler */}
        <div
          className="absolute bg-red-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center"
          style={{ top: "45%", left: "15%" }}
        >
          {gamePlayers.bowler.name}
        </div>

        {/* Wicketkeeper */}
        <div
          className="absolute bg-red-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center"
          style={{ top: "45%", right: "5%" }}
        >
          {gamePlayers.wicketkeeper.name}
        </div>

        {/* Striker Batter (On Strike) */}
        <div
          className="absolute bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center"
          style={{ top: "45%", left: "20%" }}
        >
          {gamePlayers.batter1.name}
        </div>

        {/* Non-Striker Batter */}
        <div
          className="absolute bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center"
          style={{ top: "45%", left: "35%" }}
        >
          {gamePlayers.batter2.name}
        </div>

        {/* Fielders */}
        {gamePlayers.fielders.map((fielder, index) => (
          <div
            key={index}
            className="absolute bg-yellow-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              top: `${fielder.position.top}%`,
              left: `${fielder.position.left}%`,
            }}
          >
            {fielder.name}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 w-[90%] text-center">
        <p className="text-sm text-gray-700">
          <span className="bg-red-500 text-white p-1 rounded-md">
            Red: Bowler/Wicketkeeper
          </span>
          ,
          <span className="bg-blue-500 text-white p-1 rounded-md ml-2">
            Blue: Batters
          </span>
          ,
          <span className="bg-yellow-500 text-white p-1 rounded-md ml-2">
            Yellow: Fielders
          </span>
        </p>
      </div>
    </div>
  );
};

export default Field;

