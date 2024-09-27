import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBarMain.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Map from "./components/Map/Map.tsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="flex-shrink-0">
          <NavBar />
        </header>

        <main className="flex-grow">
          <Routes>
            {/* Route for the welcome page 
            <Route path="/" element={<WelcomePrompt />} />
*/}
            {/* Route for the map component */}
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>

        <footer className="flex-shrink-0">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
