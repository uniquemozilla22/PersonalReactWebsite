import React from "react";
import Layout from "../Layout";
import images from "../Assets/Images/images";
import Project from "../Components/Project";

const index = () => {
  return (
    <Layout>
      <Project
        title={"Mero Health"}
        description={
          "Mero Health is a health communication application. - Chat with Doctor , - Book Appointments"
        }
        images={images.mero_health_gif}
        logo={images.mero_health}
        background={`url(${images.mero_health_background})`}
      />
      <Project
        title={"Mero Health"}
        description={
          "Mero Health is a health communication application. - Chat with Doctor , - Book Appointments"
        }
        images={images.mero_health_gif}
        background={`url(${images.mero_health_background})`}
      />
    </Layout>
  );
};

export default index;
