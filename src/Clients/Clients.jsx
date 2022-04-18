import CloseIcon from "@mui/icons-material/Close";
import FlipIcon from "@mui/icons-material/Flip";
import { IconButton } from "@mui/material";
import { Box, display } from "@mui/system";
import React, { useState } from "react";
import ListingQuestion from "./ListingQuestion/ListingQuestion";
import QrScaner from "./QrCode/QrScanner";

const Clients = () => {
  const [openQRCode, setOpenQrCode] = useState(false);
  const listItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [questionId, setQuestionId] = useState();
  return (
    <>
      <Box>Đây là phần header</Box>
      {openQRCode ? (
        <>
          <Box style={{ display: "flex", justifyContent: "end" }}>
            <IconButton onClick={() => setOpenQrCode(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <QrScaner setQuestionId={setQuestionId} />
        </>
      ) : (
        <ListingQuestion data={listItem} />
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
