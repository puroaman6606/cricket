// import React from "react";

// // Sample data for batting and bowling
// const battingData = [
//   { name: "Player 1", runs: 42, balls: 30, fours: 5, sixes: 1, sr: 140 },
//   { name: "Player 2", runs: 5
// 8, balls: 40, fours: 7, sixes: 2, sr: 145 },
//   { name: "Player 3", runs: 10, balls: 8, fours: 1, sixes: 0, sr: 125 },
//   { name: "Player 4", runs: 18, balls: 12, fours: 2, sixes: 0, sr: 150 },
//   { name: "Player 5", runs: 25, balls: 20, fours: 3, sixes: 1, sr: 125 },
//   // Add more players as needed...
// ];

// const bowlingData = [
//   { name: "Bowler 1", overs: 4, runs: 22, wickets: 2, economy: 5.5 },
//   { name: "Bowler 2", overs: 4, runs: 36, wickets: 1, economy: 9 },
//   { name: "Bowler 3", overs: 2, runs: 18, wickets: 0, economy: 9 },
//   // Add more bowlers as needed...
// ];

// const Scorecard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-green-600 text-white p-4 text-center">
//         <h1 className="text-2xl font-bold">Match Scorecard</h1>
//       </header>

//       <main className="p-6">
//         {/* Batting Scorecard */}
//         <div className="bg-white p-6 mb-8 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Batting Scorecard</h2>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Batsman</th>
//                 <th className="px-4 py-2 text-center">Runs</th>
//                 <th className="px-4 py-2 text-center">Balls</th>
//                 <th className="px-4 py-2 text-center">4s</th>
//                 <th className="px-4 py-2 text-center">6s</th>
//                 <th className="px-4 py-2 text-center">SR</th>
//               </tr>
//             </thead>
//             <tbody>
//               {battingData.map((player, index) => (
//                 <tr key={index} className="border-t border-gray-300">
//                   <td className="px-4 py-2">{player.name}</td>
//                   <td className="px-4 py-2 text-center">{player.runs}</td>
//                   <td className="px-4 py-2 text-center">{player.balls}</td>
//                   <td className="px-4 py-2 text-center">{player.fours}</td>
//                   <td className="px-4 py-2 text-center">{player.sixes}</td>
//                   <td className="px-4 py-2 text-center">{player.sr}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Bowling Scorecard */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Bowling Scorecard</h2>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Bowler</th>
//                 <th className="px-4 py-2 text-center">Overs</th>
//                 <th className="px-4 py-2 text-center">Runs</th>
//                 <th className="px-4 py-2 text-center">Wickets</th>
//                 <th className="px-4 py-2 text-center">Economy</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bowlingData.map((bowler, index) => (
//                 <tr key={index} className="border-t border-gray-300">
//                   <td className="px-4 py-2">{bowler.name}</td>
//                   <td className="px-4 py-2 text-center">{bowler.overs}</td>
//                   <td className="px-4 py-2 text-center">{bowler.runs}</td>
//                   <td className="px-4 py-2 text-center">{bowler.wickets}</td>
//                   <td className="px-4 py-2 text-center">{bowler.economy}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>

//       <footer className="bg-green-600 text-white p-4 text-center">
//         <p>&copy; 2024 Cricket Scorecard. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Scorecard;




// import React, { useState } from "react";
// import { FaBaseballBall, FaFootballBall } from "react-icons/fa";

// const Livescore = () => {
//   const [batters, setBatters] = useState([
//     { name: "Batsman 1", score: 30, balls: 18 },
//     { name: "Batsman 2", score: 45, balls: 25 },
//   ]);
//   const [bowlers, setBowlers] = useState([
//     { name: "Bowler 1", overs: 4, wickets: 2 },
//     { name: "Bowler 2", overs: 3, wickets: 1 },
//   ]);

//   // Example function to update a batter's score (for simulation)
//   const updateBatterScore = (index, newScore, newBalls) => {
//     setBatters((prevBatters) => {
//       const updatedBatters = [...prevBatters];
//       updatedBatters[index] = { ...updatedBatters[index], score: newScore, balls: newBalls };
//       return updatedBatters;
//     });
//   };

//   // Example function to update a bowler's overs and wickets
//   const updateBowlerStats = (index, newOvers, newWickets) => {
//     setBowlers((prevBowlers) => {
//       const updatedBowlers = [...prevBowlers];
//       updatedBowlers[index] = { ...updatedBowlers[index], overs: newOvers, wickets: newWickets };
//       return updatedBowlers;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-blue-50 py-8 px-6">
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {/* Batters Section */}
//           <div className="border-b-2 border-gray-300 pb-6">
//             <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
//               Batting Live Score
//             </h2>
//             <div className="space-y-4">
//               {batters.map((batter, index) => (
//                 <div key={index} className="flex items-center justify-between bg-pink-100 p-4 rounded-lg shadow-md">
//                   <div className="flex items-center space-x-4">
//                     <FaBaseballBall className="text-4xl text-pink-500" />
//                     <div>
//                       <h3 className="font-semibold text-lg">{batter.name}</h3>
//                       <p className="text-gray-600">
//                         {batter.score} ( {batter.balls} balls )
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-pink-600 text-white rounded-md py-1 px-4"
//                     onClick={() => updateBatterScore(index, batter.score + 10, batter.balls + 5)}
//                   >
//                     Update Score
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bowlers Section */}
//           <div>
//             <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
//               Bowling Live Stats
//             </h2>
//             <div className="space-y-4">
//               {bowlers.map((bowler, index) => (
//                 <div key={index} className="flex items-center justify-between bg-green-100 p-4 rounded-lg shadow-md">
//                   <div className="flex items-center space-x-4">
//                     <FaFootballBall className="text-4xl text-green-500" />
//                     <div>
//                       <h3 className="font-semibold text-lg">{bowler.name}</h3>
//                       <p className="text-gray-600">
//                         {bowler.overs} overs, {bowler.wickets} wickets
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-green-600 text-white rounded-md py-1 px-4"
//                     onClick={() => updateBowlerStats(index, bowler.overs + 1, bowler.wickets + 1)}
//                   >
//                     Update Stats
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Livescore;
   
//liked it









// import React, { useState, useEffect } from "react";
// import { FaCircle } from "react-icons/fa"; // Use FaCircle as a simple circular icon

// const Livescore = () => {
//   const [batters, setBatters] = useState([
//     { name: "Batsman 1", score: 30, balls: 18, strikeRate: 0 },
//     { name: "Batsman 2", score: 45, balls: 25, strikeRate: 0 },
//   ]);
//   const [bowlers, setBowlers] = useState([
//     { name: "Bowler 1", overs: 4, wickets: 2, economy: 0 },
//     { name: "Bowler 2", overs: 3, wickets: 1, economy: 0 },
//   ]);
//   const [balls, setBalls] = useState([
//     { ball: 1, run: 1 },
//     { ball: 2, run: 0 },
//     { ball: 3, run: 2 },
//     { ball: 4, run: 1 },
//     { ball: 5, run: 4 },
//     { ball: 6, run: "W" },
//   ]);

//   const updateBatters = (index, score, balls) => {
//     setBatters((prev) =>
//       prev.map((bat, i) =>
//         i === index
//           ? { ...bat, score, balls, strikeRate: ((score / balls) * 100).toFixed(2) }
//           : bat
//       )
//     );
//   };

//   const updateBowlers = (index, overs, wickets) => {
//     setBowlers((prev) =>
//       prev.map((bowl, i) =>
//         i === index
//           ? {
//               ...bowl,
//               overs: overs,
//               wickets: wickets,
//               economy: (overs === 0 ? 0 : (score / overs).toFixed(2)),
//             }
//           : bowl
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-aqua-300 to-pink-300">
//       <header className="bg-green-600 text-white p-6 text-center">
//         <h1 className="text-3xl font-semibold">Live Cricket Score</h1>
//         <p className="text-xl mt-2">Follow the action in real-time!</p>
//       </header>

//       <div className="flex justify-center gap-12 my-8">
//         <div className="w-1/3 p-4 bg-white rounded-lg shadow-lg">
//           <h3 className="text-xl text-center font-bold text-green-700">Batters</h3>
//           <div className="space-y-4 mt-4">
//             {batters.map((batter, index) => (
//               <div key={index} className="bg-green-100 p-3 rounded-xl shadow-md">
//                 <h4 className="text-xl font-semibold">{batter.name}</h4>
//                 <div className="flex justify-between">
//                   <p>Runs: {batter.score}</p>
//                   <p>Balls: {batter.balls}</p>
//                   <p>Strike Rate: {batter.strikeRate}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-1/3 p-4 bg-white rounded-lg shadow-lg">
//           <h3 className="text-xl text-center font-bold text-blue-700">Bowlers</h3>
//           <div className="space-y-4 mt-4">
//             {bowlers.map((bowler, index) => (
//               <div key={index} className="bg-blue-100 p-3 rounded-xl shadow-md">
//                 <h4 className="text-xl font-semibold">{bowler.name}</h4>
//                 <div className="flex justify-between">
//                   <p>Overs: {bowler.overs}</p>
//                   <p>Wickets: {bowler.wickets}</p>
//                   <p>Economy: {bowler.economy}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="w-full p-4 bg-white rounded-lg shadow-lg my-8">
//         <h3 className="text-xl font-semibold text-center text-pink-700">Ball by Ball Updates</h3>
//         <div className="grid grid-cols-6 gap-2 mt-4">
//           {balls.map((ball, index) => (
//             <div key={index} className="flex justify-center items-center p-3">
//               <div
//                 className={`w-12 h-12 rounded-full flex justify-center items-center text-white ${
//                   ball.run === "W"
//                     ? "bg-red-500"
//                     : ball.run === 1
//                     ? "bg-green-500"
//                     : ball.run === 4
//                     ? "bg-yellow-400"
//                     : ball.run === 2
//                     ? "bg-blue-400"
//                     : "bg-gray-500"
//                 }`}
//               >
//                 {ball.run === "W" ? (
//                   <span>W</span>
//                 ) : (
//                   <FaCircle /> // Use FaCircle for a simple circle icon representation
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-green-600 text-white p-4 text-center">
//         <p>&copy; 2024 Live Cricket Score. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Livescore;
import React, { useState, useEffect } from 'react';

const Livescore = () => {
  const [batterData, setBatterData] = useState([
    { id: 1, name: "Player 1", runs: 35, balls: 30, fours: 5, sixes: 1, strikeRate: 116.67 },
    { id: 2, name: "Player 2", runs: 25, balls: 28, fours: 2, sixes: 0, strikeRate: 89.29 },
  ]);
  const [bowlerData, setBowlerData] = useState([
    { id: 1, name: "Bowler 1", overs: 6, runs: 45, maidens: 1, economy: 7.5, wickets: 1 },
    { id: 2, name: "Bowler 2", overs: 4, runs: 25, maidens: 0, economy: 6.25, wickets: 0 },
  ]);
  const [commentaryData, setCommentaryData] = useState([
    { id: 1, ball: "12.3", type: '4', text: "He hits for a boundary!" },
    { id: 2, ball: "12.4", type: 'W', text: "He gets bowled out!" },
    { id: 3, ball: "13.1", type: '1', text: "Single taken." },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Fetching updated data...");
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const getCircleStyle = (type) => {
    switch (type) {
      case '4':
        return 'bg-yellow-300';
      case 'W':
        return 'bg-red-300';
      case '1':
        return 'bg-green-300';
      default:
        return 'bg-aqua-300';
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-100 to-lightgreen-500 p-6 font-sans">
      {/* Live Score Headline */}
      <div className="text-center bg-gradient-to-r from-aqua-500 to-aquamarine-300 text-green-1000 font-extrabold text-2xl py-3 mb-6 shadow-lg rounded-lg">
        <p className='text-green-900'>KK 127 (30.1) &nbsp; | &nbsp; NK 100/2 (22.4) &nbsp; CRR: 4.41 &nbsp; REQ: 1.02</p>
        <p className='text-red-900'>Nevla Knightriders need 28 runs</p>
      </div>

      {/* Batter Table */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-aqua-700">Batsman Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-lightgreen-300">
                <th className="border border-gray-400 px-6 py-2 text-left">Batter Name</th>
                <th className="border border-gray-400 px-6 py-2 text-center">R</th>
                <th className="border border-gray-400 px-6 py-2 text-center">B</th>
                <th className="border border-gray-400 px-6 py-2 text-center">4</th>
                <th className="border border-gray-400 px-6 py-2 text-center">6</th>
                <th className="border border-gray-400 px-6 py-2 text-center">SR</th>
              </tr>
            </thead>
            <tbody>
              {batterData.map((batter) => (
                <tr key={batter.id} className="text-center">
                  <td className="border border-gray-300 px-6 py-3">{batter.name}</td>
                  <td className="border border-gray-300 px-6 py-3">{batter.runs}</td>
                  <td className="border border-gray-300 px-6 py-3">{batter.balls}</td>
                  <td className="border border-gray-300 px-6 py-3">{batter.fours}</td>
                  <td className="border border-gray-300 px-6 py-3">{batter.sixes}</td>
                  <td className="border border-gray-300 px-6 py-3">{batter.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bowler Table */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-aqua-700">Bowler Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-lightred-300">
                <th className="border border-gray-400 px-6 py-2 text-left">Bowler Name</th>
                <th className="border border-gray-400 px-6 py-2 text-center">O</th>
                <th className="border border-gray-400 px-6 py-2 text-center">R</th>
                <th className="border border-gray-400 px-6 py-2 text-center">M</th>
                <th className="border border-gray-400 px-6 py-2 text-center">E</th>
                <th className="border border-gray-400 px-6 py-2 text-center">W</th>
              </tr>
            </thead>
            <tbody>
              {bowlerData.map((bowler) => (
                <tr key={bowler.id} className="text-center">
                  <td className="border border-gray-300 px-6 py-3">{bowler.name}</td>
                  <td className="border border-gray-300 px-6 py-3">{bowler.overs}</td>
                  <td className="border border-gray-300 px-6 py-3">{bowler.runs}</td>
                  <td className="border border-gray-300 px-6 py-3">{bowler.maidens}</td>
                  <td className="border border-gray-300 px-6 py-3">{bowler.economy}</td>
                  <td className="border border-gray-300 px-6 py-3">{bowler.wickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ball-by-Ball Commentary */}
      <div className="bg-lightgreen-400 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-aqua-700">Ball-by-Ball Commentary</h2>

        {commentaryData.length > 0 ? (
          commentaryData.map((entry) => (
            <div key={entry.id} className="mb-3 flex items-center">
              <div className={`rounded-full text-center w-10 h-10 flex items-center justify-center mr-4 ${getCircleStyle(entry.type)}`}>
                {entry.type}
              </div>
              <p className="text-base text-gray-700">
                {entry.ball} &nbsp; | &nbsp; {entry.text}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-black">Loading commentary...</div>
        )}
      </div>
    </div>
  );
};

export default Livescore;


