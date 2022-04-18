import { Card, Grid, IconButton } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import React from "react";

const ListingQuestion = (props) => {
  const { data } = props;
  return (
    <div>
      <Grid container spacing={2}>
        {!!data &&
          data.map((v, index) => (
            <Grid key={index} item xs={3}>
              <Card
                style={{
                  display: "flex",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 100,
                  background: "#6c4298",
                }}
              >
                <IconButton>
                  <LockIcon style={{ width: 50, height: 50, fill: "white" }} />
                </IconButton>
              </Card>
            </Grid>
          ))}
          <Grid  item xs={3}>
              <Card
                style={{
                  display: "flex",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 100,
                  background: "#6c4298",
                }}
              >
                <IconButton>
                  <LockIcon style={{ width: 50, height: 50, fill: "white" }} />
                </IconButton>
              </Card>
            </Grid>
      </Grid>
    </div>
  );
};

export default ListingQuestion;
