import CloseIcon from "@mui/icons-material/Close";
import FlipIcon from "@mui/icons-material/Flip";
import { IconButton } from "@mui/material";
import { Box, display } from "@mui/system";
import React, { useState } from "react";
import ListingQuestion from "./ListingQuestion/ListingQuestion";
import QrScaner from "./QrCode/QrScanner";
import { data } from "../Constants/Demo";

const Clients = () => {
  const [openQRCode, setOpenQrCode] = useState(false);
  const [questionIds, setQuestionIds] = useState(["8258"]);
  return (
    <>
      <Box>tiêu đề</Box>
      {openQRCode ? (
        <>
          <Box style={{ display: "flex", justifyContent: "end" }}>
            <IconButton onClick={() => setOpenQrCode(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <QrScaner
            questionIds={questionIds}
            setQuestionIds={setQuestionIds}
            setOpenQrCode={setOpenQrCode}
          />
        </>
      ) : (
        <ListingQuestion data={data} questionIds={questionIds} />
      )}
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={() => setOpenQrCode(true)}>
          <FlipIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Clients;
