import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material';
import React from 'react';

const ResultQuestion = (props) => {
  const { open, onClose, data } = props;
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle>{data?.question}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={6}>
            <Grid item xs={10}>
              <Card>{data?.option1}</Card>
            </Grid>
            <Grid item xs={10}>
              <Card>{data?.option2}</Card>
            </Grid>
            <Grid item xs={10}>
              <Card>{data?.option3}</Card>
            </Grid>
            <Grid item xs={10}>
              <Card>{data?.option4}</Card>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Trả lời </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultQuestion;
