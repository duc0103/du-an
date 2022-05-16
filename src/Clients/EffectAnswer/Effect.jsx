import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
// import Audio from "../../assets/audios/correct.mp3"
import correct from "../../assets/audios/correct.mp3";
import wrong from "../../assets/audios/wrong.mp3";

const Effect = (props) => {
  const { status } = props;
  const [audio] = useState(new Audio(status ? correct : wrong));
  useEffect(() => {
    // audio.play();
    // const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }, []);
  const audioClick = () => {
    audio.play();
  };
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: "rgba(240, 240, 240,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={audioClick}
    >
      {status ? (
        <>
          <div>
            <CheckCircleIcon color="success" sx={{ fontSize: 100 }} />
          </div>
          <Typography style={{ color: "#2e7d32" }} component="p">
            {" "}
            CORRECT
          </Typography>
        </>
      ) : (
        <>
          <div>
            <ClearIcon sx={{ fontSize: 100, color: pink[500] }} />
          </div>
          <Typography component="p" style={{ color: "#e91e63" }}>
            {" "}
            WRONG
          </Typography>
        </>
      )}
    </div>
  );
};

export default Effect;
