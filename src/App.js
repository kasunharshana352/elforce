import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NewsMedia from "./components/NewsMedia";
import NewsArticleDetail from "./components/NewsArticleDetail"; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/news-media" element={<NewsMedia/>} />
            <Route path="/news-media/article/:id" element={<NewsArticleDetail/>} /> {/* Add this route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;