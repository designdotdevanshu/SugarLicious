import React from "react";
import Contact from "../../components/Landing/Contact/Contact";
import Feature from "../../components/Landing/Feature/Feature";
import Layout from "../../components/Layout/Layout";
import AnimatedComponent from "../../animation/animation";

const HomePage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AnimatedComponent>
          <Feature />
        </AnimatedComponent>
        <AnimatedComponent>
          <Contact />
        </AnimatedComponent>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
