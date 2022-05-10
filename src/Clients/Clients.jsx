import CloseIcon from "@mui/icons-material/Close";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { IconButton } from "@mui/material";
import { Box, display } from "@mui/system";
import React, { useState } from "react";
import ListingQuestion from "./ListingQuestion/ListingQuestion";
import QrScaner from "./QrCode/QrScanner";
import { data } from "../Constants/Demo";
import CountProvider from "../components/CountProvider";
import Count from "./Count";

const Clients = () => {
  const [openQRCode, setOpenQrCode] = useState(false);
  const [questionIds, setQuestionIds] = useState([]);
  return (
    <CountProvider>
      <>
        <Count data={data} />
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
        <Box
          style={{
            display: "block",
            position: "fixed",
            bottom: 0,
            marginLeft: 150,
          }}
        >
          <IconButton onClick={() => setOpenQrCode(true)}>
            <QrCodeScannerIcon style={{ width: 100, height: 100 }} />
          </IconButton>
        </Box>
      </>
    </CountProvider>
  );
};

export default Clients;
