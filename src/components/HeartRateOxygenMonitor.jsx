import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles"; // For Material-UI v5
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Heart from "../images/heart-attack.png";
import Oxygen from "../images/o2.png";
import DataContext from "../context/DataContext";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: "40px 0",
  },
}));

const HeartRateOxygenMonitor = () => {
  const classes = useStyles();
  const [heartRate, setHeartRate] = useState(0);
  const [oxygenLevel, setOxygenLevel] = useState(0);
  const { userData } = useContext(DataContext);
  // useEffect(() => {
  const interval = () => {
    setInterval(() => {
      const newHeartRate = Math.floor(Math.random() * 25) + 90;
      const newOxygenLevel = Math.floor(Math.random() * 6) + 95;

      setHeartRate(newHeartRate);
      setOxygenLevel(newOxygenLevel);
    }, 3000);
  };
  if (userData.name === "sih1368") {
    interval();
  }
  // return () => clearInterval(interval);
  // }, []);

  return (
    <Paper className={classes.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <img src={Heart} style={{ height: "70px", width: "70px" }} alt="" />
        <Typography variant="h5">Heart Rate</Typography>
        <Typography variant="h3">{heartRate}</Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <img src={Oxygen} style={{ height: "70px", width: "70px" }} alt="" />

        <Typography variant="h5">Oxygen Level</Typography>
        <Typography variant="h3">{oxygenLevel}%</Typography>
      </div>
    </Paper>
  );
};

export default HeartRateOxygenMonitor;
