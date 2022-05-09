import { Card, Dialog, Grid, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

import React, { useState } from 'react';
import ResultQuestion from '../ResultQuestion/ResultQuestion';

const ListingQuestion = (props) => {
  const { data, questionIds } = props;
  console.log(data);
  const [open, setOpen] = useState(false);
  const [questionActive, setQuestionActive] = useState();
  const handleClick = (item) => {
    setQuestionActive(item);
    setOpen(true);
  };
  console.log(questionActive);
  const onClose = () => {
    setOpen(false);
    setQuestionActive(null);
  };
  return (
    <div>
      <Grid container spacing={2}>
        {!!data &&
          data.trealet.destinations.map((v, index) => {
            const checkScanner = questionIds.includes(v.objectid);
            console.log(checkScanner);
            if (checkScanner) {
              return (
                <Grid key={index} item xs={3}>
                  <Card
                    style={{
                      display: 'flex',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: 100,
                      background: '#FF0000',
                    }}
                    onClick={() => handleClick(v)}
                  >
                    <IconButton>
                      <LockIcon
                        style={{ width: 50, height: 50, fill: 'white' }}
                      />
                    </IconButton>
                  </Card>
                </Grid>
              );
            } else {
              return (
                <Grid key={index} item xs={3}>
                  <Card
                    style={{
                      display: 'flex',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: 100,
                      background: '#6c4298',
                    }}
                  >
                    <IconButton>
                      <LockIcon
                        style={{ width: 50, height: 50, fill: 'white' }}
                      />
                    </IconButton>
                  </Card>
                </Grid>
              );
            }
          })}
        <Grid item xs={3}>
          <Card
            style={{
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: 100,
              background: '#6c4298',
            }}
          >
            <IconButton>
              <LockIcon style={{ width: 50, height: 50, fill: 'white' }} />
            </IconButton>
          </Card>
        </Grid>
      </Grid>
      {open && (
        <ResultQuestion open={open} onClose={onClose} data={questionActive} />
      )}
    </div>
  );
};

export default ListingQuestion;
