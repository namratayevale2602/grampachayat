import React from "react";
import Banner from "./Banner";
import AboutUs from "./About";
import Manogat from "./Manogat";
import Team from "./Team";
import VisionMission from "./VisionMission";
import Functions from "./Functions";
import Gallery from "./Gallery";

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Manogat />
      <Team />
      <VisionMission />
      <Functions />
      <Gallery />
    </div>
  );
}

export default Home;
