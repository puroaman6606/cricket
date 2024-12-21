import React from "react";

// Adding scores for each player
const players1 = [
  { name: "Player 1", image: "https://picsum.photos/536/354", score: 42 },
  { name: "Player 2", image: "./src/asset/aman.jpg", score: 58 },
  { name: "Player 3", image: "https://placeimg.com/100/100/people", score: 34 },
  { name: "Player 4", image: "https://placeimg.com/100/100/people", score: 28 },
  { name: "Player 5", image: "https://placeimg.com/100/100/people", score: 55 },
  { name: "Player 6", image: "https://placeimg.com/100/100/people", score: 18 },
  { name: "Player 7", image: "https://placeimg.com/100/100/people", score: 72 },
  { name: "Player 8", image: "https://placeimg.com/100/100/people", score: 61 },
  { name: "Player 9", image: "https://placeimg.com/100/100/people", score: 46 },
  { name: "Player 10", image: "https://placeimg.com/100/100/people", score: 39 },
  { name: "Player 11", image: "https://placeimg.com/100/100/people", score: 51 },
];

const players2 = [
  { name: "Player 1", image: "https://placeimg.com/100/100/people", score: 48 },
  { name: "Player 2", image: "https://placeimg.com/100/100/people", score: 55 },
  { name: "Player 3", image: "https://placeimg.com/100/100/people", score: 34 },
  { name: "Player 4", image: "https://placeimg.com/100/100/people", score: 40 },
  { name: "Player 5", image: "https://placeimg.com/100/100/people", score: 64 },
  { name: "Player 6", image: "https://placeimg.com/100/100/people", score: 18 },
  { name: "Player 7", image: "https://placeimg.com/100/100/people", score: 72 },
  { name: "Player 8", image: "https://placeimg.com/100/100/people", score: 61 },
  { name: "Player 9", image: "https://placeimg.com/100/100/people", score: 46 },
  { name: "Player 10", image: "https://placeimg.com/100/100/people", score: 39 },
  { name: "Player 11", image: "https://placeimg.com/100/100/people", score: 51 },
];

const Squads = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-aqua-300 to-lime-200">
      <header className="bg-gradient-to-r from-pink-500 to-aquamarine-500 text-white p-6 text-center shadow-xl rounded-b-xl">
        <h1 className="text-3xl font-extrabold">Cricket Squads</h1>
      </header>

      <main className="p-8 sm:p-12 md:p-16">
        <div className="flex flex-wrap justify-center space-x-8">
          {/* Team 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 mt-4">
            <h2 className="text-xl font-bold mb-6 text-center text-pink-600">Team 1</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {players1.map((player, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="rounded-full w-24 h-24 border-4 border-gradient-to-r from-aqua-400 to-pink-500 shadow-md transform transition-transform hover:scale-110"
                  />
                  <p className="mt-4 text-xl text-green-700 font-semibold">{player.name}</p>
                  <p className="text-lg text-gray-600">Score: {player.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 mt-4">
            <h2 className="text-xl font-bold mb-6 text-center text-aqua-600">Team 2</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {players2.map((player, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="rounded-full w-24 h-24 border-4 border-gradient-to-r from-aqua-400 to-pink-500 shadow-md transform transition-transform hover:scale-110"
                  />
                  <p className="mt-4 text-xl text-green-700 font-semibold">{player.name}</p>
                  <p className="text-lg text-gray-600">Score: {player.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-pink-500 to-aquamarine-500 text-white p-6 text-center mt-8 shadow-xl rounded-t-xl">
        <p className="text-lg">&copy; 2024 Cricket Squads. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Squads;
