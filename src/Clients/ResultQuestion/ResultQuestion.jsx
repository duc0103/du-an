import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import LinearProgressWithLabel from "../LinearProgressWithLabel";
import { CountContext } from "../../components/CountProvider";
import QuestionColumn from "../SortItem/QuestionColumn";

// import "./style.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
const ResultQuestion = (props) => {
  const { open, onClose, data } = props;
  const { count, setCount, updateAnswered } = useContext(CountContext);
  const [bar, setBar] = useState(50);
  const [choose, setChoose] = useState(0);
  const classes = useStyles();
  const handleChoose = (index) => {
    setChoose(index);
  };
  const handleSubmit = () => {
    if (data.key === `option${choose}`) {
      setCount(count + 1);
      updateAnswered(true, data?.objectid);
    } else {
      updateAnswered(false, data?.objectid);
    }
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      {/* <DialogTitle>
        <div className={classes.root}>
          <LinearProgressWithLabel value={bar} />
          <Button onClick={() => setBar(bar + 1)}>Increase +5</Button>
        </div>
      </DialogTitle> */}
      <DialogContent>
        {data.type === "question" && (
          <div className="container">
            <div className="question-container">
              <div className="question-box">{data?.question}</div>
            </div>
            <div className="answer-container">
              {[...Array(4).keys()].map((index) => (
                <div
                  className={`answer-box option${index + 1}`}
                  onClick={() => handleChoose(index + 1)}
                  style={{
                    background: choose === index + 1 ? "#7CFC00	" : "#fff",
                  }}
                >
                  <span>
                    <i className="bx bxs-square"></i>
                  </span>
                  <p>{data[`option${index + 1}`]}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {data.type === "column" && (
          <div className="container">
            <div className="question-container">
              <div className="question-box">{data?.question}</div>
            </div>
            <QuestionColumn data={data} />
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button className="bx " onClick={() => handleSubmit()}>
          Trả lời{" "}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultQuestion;
