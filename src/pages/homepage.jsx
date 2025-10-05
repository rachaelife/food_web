import React from "react";
import Hero from "../components/hero";
import AboutSection from "../components/about";
import SpecialDishes from "../components/product";
import ContactInfo from "../components/info";
import ReservationSection from "../components/reservation";
import Achievements from "../components/achievement";


import Layout from "../components/layout";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <AboutSection />
        <SpecialDishes />
        <ContactInfo />
        <ReservationSection />
        <Achievements />
      </Layout>
    </div>
  );
};

export default Homepage;
