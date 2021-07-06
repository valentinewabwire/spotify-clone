import React from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayOutlinedIcon from "@material-ui/icons/PlaylistPlayOutlined";
import VolumeDownOutlinedIcon from "@material-ui/icons/VolumeDownOutlined";
import { Slider } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumlogo"
          src="https://pngimg.com/uploads/angelina_jolie/angelina_jolie_PNG45.png"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Work Explicit </h4>
          <p> Rihanna</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
