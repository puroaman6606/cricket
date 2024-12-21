// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Squads from './Squads'; // Import Squads page component
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
//       {/* Header with navigation links */}
//       <div className="bg-green-600 text-white p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Cricket Live Score</h1>
//           <nav>
//             {/* Navigation links */}
//             <Link to="/" className="text-white mx-4">Home</Link>
//             <Link to="/squads" className="text-white mx-4">Squads</Link>
//           </nav>
//         </div>
//       </div>

//       {/* Main content rendering based on the route */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/squads" element={<Squads />} />
//       </Routes>

//       {/* Footer */}
//       <footer className="bg-green-600 text-white p-4 text-center">
//         <p>&copy; 2024 Cricket Squads. All rights reserved.</p>
//       </footer>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Squads from './Squads';
import './App.css';
import Commentary from './Commentary';
// import Scorecard from "./Livescore"; 
import LiveScore from "./Livescore";
import Scorecard from './Scorecard'; // Make sure the path is correct based on your folder structure
import Field from "./Field";


function App() {
  return (
    <Router>
      {/* Main content routing */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/squads" element={<Squads />} />
          {/* <Route path="/commentary" element={<Commentary />} /> */}
          <Route path="/livescore" element={<LiveScore />} />
          <Route path="/scorecard" element={<Scorecard />} /> 
          <Route path="/field" element={<Field />} /> 

        </Routes>
      </main>

      {/* Unified Footer */}
      {/* <footer className="bg-green-600 text-white p-4 text-center">
        <p>&copy; 2024 Cricket Squads. All rights reserved.</p>
      </footer> */}
    </Router>
  );
}

export default App;
