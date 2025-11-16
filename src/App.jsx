import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Home/Gallery";
import EventsPage from "./pages/Events/EventsPage";
import EventDetailPage from "./pages/Events/EventDetailPage";
import Team from "./pages/Home/Team";
import ContactPage from "./pages/Contact/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/event/:slug" element={<EventDetailPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
