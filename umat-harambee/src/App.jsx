import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CampusGuideIndex from "./pages/campus-guide/CampusGuideIndex";
import HostelDirectory from "./pages/campus-guide/HostelDirectory";
import LocationDetail from "./pages/campus-guide/LocationDetail";
import AcademicBank from "./pages/AcademicBank";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import Services from "./pages/Services";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";
import AdminAds from "./pages/AdminAds";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0d] text-white transition-opacity duration-300">
      <div className="w-10 h-10 border-4 border-[#FFD700] border-t-transparent rounded-full animate-spin mb-4"></div>
      <h1 className="text-lg font-bold tracking-wide text-white mb-1">Team Harambee</h1>
      <p className="text-xs uppercase tracking-widest text-[#FFD700] font-semibold">Together We Move</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus-guide" element={<CampusGuideIndex />} />
          <Route path="/campus-guide/hostels" element={<HostelDirectory />} />
          <Route path="/campus-guide/location/:slug" element={<LocationDetail />} />
          <Route path="/academic-bank" element={<AcademicBank />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:slug" element={<UpdateDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/admin/ads" element={<AdminAds />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}