// import React from "react";

// const Home = () => {
//   const cricketData = {
//     liveMatch: {
//       teams: "India vs Pakistan",
//       status: "Live",
//       overs: "10.4",
//       score: "87/2",
//     },
//   };

//   return (
//     <div className="bg-green-100 min-h-screen">
//       {/* Header */}
//       <header className="bg-green-700 text-white p-4 shadow-lg">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Cricket Live Scoring</h1>
//           <nav>
//             <ul className="flex gap-4">
//               <li>
//                 <a href="/" className="hover:underline">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/scorecard" className="hover:underline">
//                   Scorecard
//                 </a>
//               </li>
//               <li>
//                 <a href="/commentary" className="hover:underline">
//                   Commentary
//                 </a>
//               </li>
//               <li>
//                 <a href="/squads" className="hover:underline">
//                   Squads
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto py-6 px-4">
//         {/* Live Match Section */}
//         <section className="bg-white p-6 rounded shadow-lg text-center mb-6">
//           <h2 className="text-3xl font-bold mb-2 text-gray-800">Live Match</h2>
//           <p className="text-lg text-gray-600">{cricketData.liveMatch.teams}</p>
//           <p className="mt-1 text-lg font-semibold text-green-600">
//             Status: {cricketData.liveMatch.status}
//           </p>
//           <p className="mt-1 text-lg text-gray-600">
//             Overs: {cricketData.liveMatch.overs}
//           </p>
//           <p className="mt-1 text-lg text-gray-800">Score: {cricketData.liveMatch.score}</p>
//         </section>

//         {/* Featured Cricketer */}
//         <section className="bg-white p-6 rounded shadow-lg text-center">
//           <h3 className="text-2xl font-semibold mb-4">Featured Cricketer</h3>
//           <div className="flex justify-center items-center">
//             <img
//               src="https://via.placeholder.com/150" // Replace with a cricketer's image URL
//               alt="Cricketer"
//               className="rounded-full shadow-md"
//             />
//           </div>
//           <p className="text-lg mt-4 text-gray-800">Virat Kohli</p>
//           <p className="text-sm text-gray-600">Top Scorer of the Match</p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;





// import React from "react";
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const cricketData = {
//     liveMatch: {
//       teams: "Nevla Knightriders vs Kutta Kings",
//       status: "Live",
//       overs: "15.2",
//       score: "123/3",
//       requiredRunRate: "6.78",
//       target: "300",
//     },
//   };

//   return (
//     <div className="bg-gradient-to-r from-pink-200 via-white to-pink-200 min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-pink-300 text-white py-4 shadow-lg w-full">
//         <div className="flex justify-between items-center px-8">
//           <h1 className="text-3xl font-extrabold text-pink-600">🏏Gobaria Cricket Live,Barabanki</h1>
//           <nav>
//             <ul className="flex gap-6">
//               <li>
//                 <a href="/" className="hover:text-gray-300 font-semibold text-pink-900">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/Livescore" className="hover:text-gray-300 font-semibold text-pink-900">
//                   Livescore
//                 </a>
//               </li>
//               <li>
//                 <a href="/commentary" className="hover:text-gray-300 font-semibold text-pink-900">
//                   Commentary
//                 </a>
//               </li>
//               <li>
//                 <a href="/squads" className="hover:text-gray-300 font-semibold text-pink-900">
//                   Squads
//                 </a>
//               </li>
//               <li>
//                 <a href="/scorecard" className="hover:text-gray-300 font-semibold text-pink-900">
//                   Scorecard
//                 </a>
//               </li>
//               <li>
//                 <a href="/Field" className="hover:text-gray-300 font-semibold text-pink-900">
//                   Field
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       {/* <img src="https://images.pexels.com/photos/9420724/pexels-photo-9420724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not found" className=" w-full h-40"></img> */}

 


  



      
//       {/* Main Content */}
//       <main className="flex-grow pt-24 px-8">
//         {/* Live Match Section */}
//         <section className="bg-gradient-to-r from-pink-200 via-white to-pink-200 rounded shadow-lg mb-8 w-full mx-auto max-w-7xl">
//           <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Live Match Update</h2>
//           <div className="text-center">
//             <p className="text-xl text-green-700 font-semibold">
//               {cricketData.liveMatch.teams}
//             </p>
//             <p className="mt-2 text-lg">
//             <span className="text-pink-800 font-semibold">Status: </span>
//               {cricketData.liveMatch.status}
//             </p>
//             <p className="mt-1 text-lg">
//             <span className="text-pink-800 font-semibold">Overs: </span>
//               {cricketData.liveMatch.overs}
//             </p>
//             <p className="mt-1 text-lg">
//             <span className="text-pink-800 font-semibold">Score: </span>
//               {cricketData.liveMatch.score}
//             </p>
//             <p className="mt-1 text-lg">
//             <span className="text-pink-800 font-semibold">Target: </span>
//               {cricketData.liveMatch.target}
//             </p>
//             <p className="mt-1 text-lg">
//             <span className="text-pink-800 font-semibold">RRR: </span>
//               {cricketData.liveMatch.requiredRunRate}
//             </p>
//               {/* Check Live Score Button */}
//         <div className="text-center mt-6">
//           <Link 
//             to="/livescore" 
//             className="inline-block bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-pink-900 transition"
//           > Check Live Score
//           </Link>
//         </div>
//           </div>
//         </section>
//         {/* //image of cricket */}
      
        
//       <img src="https://tse2.mm.bing.net/th?id=OIG2.CcKzWms5ZqPdCmLqegMh&pid=ImgGn" 
//        className="w-full h-100" 
//        alt="example image" 
//           />

//         {/* Featured Cricketer Section */}
//         <section className="bg-gradient-to-r from-pink-200 via-white to-pink-200 p-6 rounded shadow-lg w-full mx-auto max-w-7xl">
//           <h3 className="text-3xl font-bold text-center mb-6 text-black">🌟 Featured Player of the Match</h3>
//           <div className="flex flex-col items-center">
//             <img
//               src="https://images.pexels.com/photos/2873591/pexels-photo-2873591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//               alt="Featured Cricketer"
//               className="rounded-full shadow-lg w-40 h-40"
//             />
//             <p className="text-2xl font-semibold mt-4 text-pink-900">Nevla</p>
//             <p className="text-gray-600 mt-2">Top Scorer of the Match - 89 (52)</p>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-pink-600 text-white text-center py-4 w-full">
//         <p className="text-sm">&copy; 2024 Cricket Live. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// likd it



//responsive


import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  const cricketData = {
    liveMatch: {
      teams: "Nevla Knightriders vs Kutta Kings",
      status: "Live",
      overs: "15.2",
      score: "123/3",
      requiredRunRate: "6.78",
      target: "300",
    },
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 via-white to-pink-200 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-pink-300 text-white py-4 shadow-lg w-full">
        <div className="flex justify-between items-center px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-pink-600">
            🏏 Gobaria Cricket Live, Barabanki
          </h1>
          <nav>
            <ul className="flex flex-wrap gap-4 text-sm sm:text-base">
              <li>
                <a href="/" className="hover:text-gray-300 font-semibold text-pink-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/Livescore" className="hover:text-gray-300 font-semibold text-pink-900">
                  Livescore
                </a>
              </li>
              {/* <li>
                <a href="/commentary" className="hover:text-gray-300 font-semibold text-pink-900">
                  Commentary
                </a>
              </li> */}
              <li>
                <a href="/squads" className="hover:text-gray-300 font-semibold text-pink-900">
                  Squads
                </a>
              </li>
              <li>
                <a href="/scorecard" className="hover:text-gray-300 font-semibold text-pink-900">
                  Scorecard
                </a>
              </li>
              <li>
                <a href="/Field" className="hover:text-gray-300 font-semibold text-pink-900">
                  Field
                </a>
              </li>  
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-12 sm:pt-24 px-4 sm:px-8">
        {/* Live Match Section */}
        <section className="bg-gradient-to-r from-pink-200 via-red-200 to-pink-200 rounded shadow-lg mb-8 w-full mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">Live Match Update</h2>
          <div className="text-center">
            <p className="text-xl sm:text-2xl text-green-700 font-semibold">
              {cricketData.liveMatch.teams}
            </p>
            <p className="mt-2 text-lg sm:text-xl">
              <span className="text-pink-800 font-semibold">Status: </span>
              {cricketData.liveMatch.status}
            </p>
            <p className="mt-1 text-lg sm:text-xl">
              <span className="text-pink-800 font-semibold">Overs: </span>
              {cricketData.liveMatch.overs}
            </p>
            <p className="mt-1 text-lg sm:text-xl">
              <span className="text-pink-800 font-semibold">Score: </span>
              {cricketData.liveMatch.score}
            </p>
            <p className="mt-1 text-lg sm:text-xl">
              <span className="text-pink-800 font-semibold">Target: </span>
              {cricketData.liveMatch.target}
            </p>
            <p className="mt-1 text-lg sm:text-xl">
              <span className="text-pink-800 font-semibold">RRR: </span>
              {cricketData.liveMatch.requiredRunRate}
            </p>

            {/* Check Live Score Button */}
               <div className="text-center mt-6">
              <Link
                to="/livescore"
                className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-900 transition"
              >
                Check Live Score
              </Link>
              
            </div>
            <div className="text-center mt-6">
              <Link
                to="/Scorecard"
                className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-900 transition"
              >
                Check scorecard
              </Link>
              
            </div>
            <div className="text-center mt-6">
              <Link
                to="/Squads"
                className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-900 transition"
              >
                Check squads
              </Link>
              
            </div>
            <div className="text-center mt-6">
              <Link
                to="/Field"
                className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-900 transition"
              >
                Check field
              </Link>
              
            </div>
          </div>
        </section>

        {/* Cricket Image */}
        <img
          src="https://tse2.mm.bing.net/th?id=OIG2.CcKzWms5ZqPdCmLqegMh&pid=ImgGn"
          className="w-full h-64 sm:h-96 object-cover mb-8"
          alt="Cricket Image"
        />

        {/* Featured Cricketer Section */}
        <section className="bg-gradient-to-r from-pink-200 via-white to-pink-200 p-6 rounded shadow-lg w-full mx-auto max-w-7xl mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            🌟 Featured Player of the Match
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/2873591/pexels-photo-2873591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Featured Cricketer"
              className="rounded-full shadow-lg w-40 h-40"
            />
            <p className="text-xl sm:text-2xl font-semibold mt-4 text-pink-900">Nevla</p>
            <p className="text-gray-600 mt-2">Top Scorer of the Match - 89 (52)</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-4 w-full">
        <p className="text-sm sm:text-base">&copy; 2024 Cricket Live. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;




