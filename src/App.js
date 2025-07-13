import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
// import AboutPage from "./components/AboutPage"; // Example for another page
// import MenuPage from "./components/MenuPage";   // Example for another page

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/menu" element={<MenuPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
