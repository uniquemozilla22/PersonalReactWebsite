import React from "react";
import Layout from "../Layout";
import classes from "./home.module.css";
import images from "../Assets/Images/Images.js";
import Data from "../Components/Data";

const Index = () => {
  return (
    <Layout>
      <div className={classes.home_wrap}>
        <div className={classes.bio_wrap}>
          <div className={classes.descimage}>
            <Data
              title={"Biography"}
              description={
                "Design a art to express.I'm Yogesh, a Full Stack Developer, and a Madridsta. "
              }
            />
            <div className={classes.descimage_img}>
              <img
                src={images.description}
                alt={"Apple Emoji"}
                height={"150px"}
              />
            </div>
          </div>
          <div className={classes.descimage_2}>
            <Data
              title={"Contact"}
              description={
                "Kathmandu Nepal. uniqgaming26@gmailcom , +977 9846 779 494"
              }
            />
            <div className={classes.descimage_img}>
              <img
                src={images.description}
                alt={"Apple Emoji"}
                height={"150px"}
              />
            </div>
          </div>
          <div className={classes.descimage_3}>
            <Data
              title={"Services"}
              description={"UI Design . Mobile Application Dev , Services"}
            />
            <div className={classes.descimage_img}>
              <img
                src={images.description}
                alt={"Apple Emoji"}
                height={"150px"}
              />
            </div>
          </div>
        </div>
        <div className={classes.image_wrap}>
          <img
            className={classes.img}
            src={images.Yogesh}
            alt={"Yogesh Bhattarai"}
          />
        </div>
        <div className={classes.data_wrap}>
          <Data title={"Years of Experience"} description={"2"} />
          <Data title={"Satisfaction Clients"} description={"100%"} />
          <Data title={"Projects Completed"} description={"12"} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
