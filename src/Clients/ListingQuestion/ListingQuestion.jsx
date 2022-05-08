import { Card, Grid, IconButton } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import React from "react";

const ListingQuestion = (props) => {
  const { data, questionIds } = props;
  const handleClick = () => {};
  return (
    <div>
      <Grid container spacing={2}>
        {!!data &&
          data.trealet.destinations.map((v, index) => {
            const checkScanner = questionIds.includes(v.objectid);
            if (checkScanner) {
              return (
                <Grid key={index} item xs={3}>
                  <Card
                    style={{
                      display: "flex",
                      justifyItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      height: 100,
                      background: "#FF0000",
                    }}
                    onClick={handleClick}
                  >
                    <IconButton>
                      <LockIcon
                        style={{ width: 50, height: 50, fill: "white" }}
                      />
                    </IconButton>
                  </Card>
                </Grid>
              );
            } else
              return (
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
                    onClick={handleClick}
                  >
                    <IconButton>
                      <LockIcon
                        style={{ width: 50, height: 50, fill: "white" }}
                      />
                    </IconButton>
                  </Card>
                </Grid>
              );
          })}
        <Grid item xs={3}>
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
