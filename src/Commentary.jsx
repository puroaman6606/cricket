import React, { useState, useEffect } from "react";

// Dummy data for commentary
const initialCommentary = [
  {
    batsman: "Player 1",
    bowler: "Player 5",
    runs: 4,
    delivery: "Cut shot to the boundary",
    over: 1,
  },
  {
    batsman: "Player 1",
    bowler: "Player 6",
    runs: 1,
    delivery: "Single to the off-side",
    over: 2,
  },
  {
    batsman: "Player 3",
    bowler: "Player 2",
    runs: 6,
    delivery: "SIX over deep mid-wicket!",
    over: 3,
  },
];

const Commentary = () => {
  const [commentary, setCommentary] = useState(initialCommentary);
  const [currentBatsman, setCurrentBatsman] = useState("Player 1");
  const [currentBowler, setCurrentBowler] = useState("Player 5");
  const [score, setScore] = useState(20); // Current score

  useEffect(() => {
    // Simulate getting new commentary (like from a live match)
    const interval = setInterval(() => {
      // Example update, you would replace with dynamic data
      const newEntry = {
        batsman: "Player 2",
        bowler: "Player 3",
        runs: Math.floor(Math.random() * 7), // Random runs
        delivery: "Drives down the ground for " + (Math.floor(Math.random() * 7)) + " runs",
        over: Math.floor(Math.random() * 10),
      };

      setCommentary((prevState) => [...prevState, newEntry]);
      setScore(score + newEntry.runs); // Update the score
    }, 10000); // Updating every 10 seconds with new commentary data

    return () => clearInterval(interval); // Clean up interval
  }, [score]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Match Commentary</h1>
      </header>

      <main className="p-6">
        <div className="bg-white p-4 mb-6 rounded-lg shadow-md">
          <h2 className="text-xl text-center font-semibold mb-4">Live Commentary</h2>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-lg font-medium">Current Score: {score}/2</p>
            </div>
            <div>
              <p><strong>Batsman:</strong> {currentBatsman}</p>
              <p><strong>Bowler:</strong> {currentBowler}</p>
            </div>
          </div>

          <div className="space-y-4">
            {commentary.map((entry, index) => (
              <div key={index} className="p-4 border-b border-gray-200">
                <p className="text-sm font-semibold">{entry.batsman} (Runs: {entry.runs})</p>
                <p className="text-sm">Delivery: {entry.delivery}</p>
                <p className="text-xs text-gray-600">Over {entry.over}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Recent Deliveries</h3>
          <div>
            {commentary.slice(-3).map((entry, index) => (
              <div key={index} className="p-2 border-b border-gray-300">
                <p><strong>{entry.batsman}</strong> took a {entry.delivery} off <strong>{entry.bowler}</strong></p>
                <p>Runs: {entry.runs} (Over {entry.over})</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-green-600 text-white p-4 text-center">
        <p>&copy; 2024 Cricket Live Score. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Commentary;
