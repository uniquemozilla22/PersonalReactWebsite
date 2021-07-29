import React from "react";
import classes from "./project.module.css";
import Data from "../Data";
import { GitHub } from "@material-ui/icons";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  Slide,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Index = ({ images, title, description, background, logo }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={classes.project_data_wrap}
      style={{
        background: background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100vh",
        backgroundPosition: "fixed",
      }}
    >
      <div className={classes.project_info}>
        <Button onClick={() => setOpen(!open)} focusRipple>
          View Project
        </Button>
        <Data title={title} description={description} color="black" />
        <div className={classes.links}>
          <a href="https://github.com/uniquemozilla22/Mero_Hospital">
            <GitHub fontSize={"large"} />
          </a>
        </div>
      </div>
      <div className={classes.project_image}>
        <img src={images} alt={"Project"} />
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        fullScreen={true}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          {logo ? (
            <div className={classes.logo_dialog}>
              <img src={logo} alt={"Project"} height="100px" />
              <p>{title}</p>
            </div>
          ) : (
            title
          )}
        </DialogTitle>
        <DialogContent>
          <div className={classes.dialog_content}>
            <div className={classes.project_image_responsive}>
              <img src={images} alt={"Project"} />
            </div>
            <DialogContentText>
              <div className={classes.links_responsive}>
                <a href="https://github.com/uniquemozilla22/Mero_Hospital">
                  <GitHub fontSize={"large"} />
                </a>
                <a href="https://github.com/uniquemozilla22/Mero_Hospital">
                  Visit Github Link
                </a>
              </div>
              <p>{description.split(".")[0]}</p>
              <p>{description.split(".")[1]?.split(",")[0]}</p>
              <p>{description.split(".")[1]?.split(",")[1]}</p>
              <p>{description.split(".")[1]?.split(",")[2]}</p>
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Index;
