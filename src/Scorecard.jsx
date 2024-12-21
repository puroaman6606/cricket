import React, { useState } from "react";

const Scorecard = () => {
  // Sample Data for Scorecard
  const [batters, setBatters] = useState([
    { name: "Batsman 1", score: 30, balls: 18, fours: 4, sixes: 1, strikeRate: 166.67, wicketBy: "Bowler 1" },
    { name: "Batsman 2", score: 45, balls: 25, fours: 5, sixes: 2, strikeRate: 180.00, wicketBy: "Bowler 2" },
    { name: "Batsman 3", score: 35, balls: 20, fours: 6, sixes: 2, strikeRate: 175.00, wicketBy: "Bowler 3" },
    { name: "Batsman 4", score: 40, balls: 22, fours: 7, sixes: 1, strikeRate: 181.81, wicketBy: "Bowler 1" },
    { name: "Batsman 5", score: 60, balls: 35, fours: 8, sixes: 3, strikeRate: 171.43, wicketBy: "Bowler 2" },
    { name: "Batsman 6", score: 10, balls: 8, fours: 1, sixes: 0, strikeRate: 125.00, wicketBy: "Bowler 3" },
    { name: "Batsman 7", score: 22, balls: 16, fours: 3, sixes: 1, strikeRate: 137.50, wicketBy: "Bowler 4" },
    { name: "Batsman 8", score: 53, balls: 29, fours: 6, sixes: 3, strikeRate: 182.76, wicketBy: "Bowler 5" },
    { name: "Batsman 9", score: 21, balls: 14, fours: 2, sixes: 0, strikeRate: 150.00, wicketBy: "Bowler 6" },
    { name: "Batsman 10", score: 30, balls: 20, fours: 3, sixes: 1, strikeRate: 150.00, wicketBy: "Bowler 7" },
    { name: "Batsman 11", score: 45, balls: 28, fours: 5, sixes: 2, strikeRate: 160.71, wicketBy: "Bowler 1" }
  ]);

  const [bowlers, setBowlers] = useState([
    { name: "Bowler 1", overs: 4, maidens: 0, wickets: 2, economy: 6.50 },
    { name: "Bowler 2", overs: 3, maidens: 1, wickets: 1, economy: 7.25 },
    { name: "Bowler 3", overs: 4, maidens: 0, wickets: 3, economy: 6.75 },
    { name: "Bowler 4", overs: 2, maidens: 0, wickets: 0, economy: 8.00 },
    { name: "Bowler 5", overs: 4, maidens: 1, wickets: 1, economy: 6.00 },
    { name: "Bowler 6", overs: 3, maidens: 0, wickets: 1, economy: 7.50 },
    { name: "Bowler 7", overs: 3, maidens: 0, wickets: 0, economy: 8.25 }
  ]);

  return (
    <div className="bg-gradient-to-b from-pink-600 via-gray-100 to-pink-600 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-pink-600 text-white py-4 shadow-lg w-full">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-3xl font-extrabold">🏏 Cricket Scorecard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-4 lg:px-8">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg my-8">
          <h3 className="text-xl font-semibold text-center text-aqua-700">Scorecard</h3>

          {/* Batting Section */}
          <div className="my-6">
            <h4 className="text-lg text-pink-900">Batsman</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-200 text-gray-950">
                    <th className="px-4 py-2">Batter</th>
                    <th className="px-4 py-2">R</th>
                    <th className="px-4 py-2">B</th>
                    <th className="px-4 py-2">4s</th>
                    <th className="px-4 py-2">6s</th>
                    <th className="px-4 py-2">SR</th>
                    <th className="px-4 py-2">Wicket By</th>
                  </tr>
                </thead>
                <tbody>
                  {batters.map((batter, index) => (
                    <tr key={index} className="border-t text-black">
                      <td className="px-4 py-2">{batter.name}</td>
                      <td className="px-4 py-2">{batter.score}</td>
                      <td className="px-4 py-2">{batter.balls}</td>
                      <td className="px-4 py-2">{batter.fours}</td>
                      <td className="px-4 py-2">{batter.sixes}</td>
                      <td className="px-4 py-2">{batter.strikeRate}</td>
                      <td className="px-4 py-2">{batter.wicketBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bowling Section */}
          <div className="my-6">
            <h4 className="text-lg text-pink-900">Bowlers</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-200 text-gray-950">
                    <th className="px-4 py-2">Bowler</th>
                    <th className="px-4 py-2">Overs</th>
                    <th className="px-4 py-2">Maidens</th>
                    <th className="px-4 py-2">Wickets</th>
                    <th className="px-4 py-2">Economy</th>
                  </tr>
                </thead>
                <tbody>
                  {bowlers.map((bowler, index) => (
                    <tr key={index} className="border-t text-black">
                      <td className="px-4 py-2">{bowler.name}</td>
                      <td className="px-4 py-2">{bowler.overs}</td>
                      <td className="px-4 py-2">{bowler.maidens}</td>
                      <td className="px-4 py-2">{bowler.wickets}</td>
                      <td className="px-4 py-2">{bowler.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-4">
        <p className="text-sm">&copy; 2024 Cricket Live. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Scorecard;



