import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Snackbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { CountContext } from "../../components/CountProvider";
import QuestionColumn from "../SortItem/QuestionColumn";
import Effect from "../EffectAnswer/Effect";

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
  const [validate, setValidate] = useState(false);
  const [status, setStatus] = useState("");
  console.log("status", status);
  const classes = useStyles();
  const handleChoose = (index) => {
    setChoose(index);
  };
  const [items, setItems] = useState(
    Object.keys(data?.key).map((v) => {
      return { key: v, value: data?.key[`${v}`] };
    }) || []
  );
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const handleSubmit = () => {
    if (data.type === "question") {
      if (choose !== 0) {
        if (data.key === `option${choose}`) {
          // audio = new Audio(this.props.url)
          setStatus("CORRECT");
          setCount(count + 1);
          updateAnswered(true, data?.objectid);
        } else {
          updateAnswered(false, data?.objectid);
          setStatus("WRONG");
        }
        setTimeout(() => {
          setStatus("");
          onClose();
        }, 2000);
      } else {
        setValidate(true);
      }
    }
    if (data.type === "column") {
      const check = items.every((v, index) => {
        return data?.correct[`option${index + 1}`] === v?.key;
      });
      if (check) {
        setStatus("CORRECT");
        setCount(count + 1);
        updateAnswered(true, data?.objectid);
      } else {
        updateAnswered(false, data?.objectid);
        setStatus("WRONG");
      }
      setTimeout(() => {
        setStatus("");
        onClose();
      }, 2000);
    }
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
            <QuestionColumn data={data} items={items} setItems={setItems} />
          </div>
        )}
        <Snackbar
          TransitionComponent="SlideTransitionS"
          open={validate}
          autoHideDuration={6000}
          onClose={() => setValidate(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setValidate(false)}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Bạn phải trả lời câu hỏi
          </Alert>
        </Snackbar>
      </DialogContent>
      <DialogActions>
        <Button
          className="bx "
          variant="contained"
          style={{ marginBottom: 20, marginLeft: 20 }}
          color="success"
          onClick={() => handleSubmit()}
        >
          Trả lời
        </Button>
      </DialogActions>
      {!!status && <Effect status={status === "CORRECT"} />}
    </Dialog>
  );
};

export default ResultQuestion;
