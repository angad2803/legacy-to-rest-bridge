const express = require("express");
const { exec } = require("child_process");
const app = express();
app.use(express.json());

function callCppWeather(cmd, callback) {
  exec(
    exec(
  `D:\\OutdatedAPI\\legacy_api\\weather_station.exe`,,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        callback(null);
        return;
      }
      const lines = stdout.trim().split("\n");
      callback(lines);
    }
  );
}

app.get("/api/v1/temperature", (req, res) => {
  callCppWeather("", (lines) => {
    if (!lines) return res.status(500).json({ error: "Legacy API error" });
    const temp = parseFloat(lines[0].split(":")[1]);
    res.json({ temperature: temp });
  });
});

app.get("/api/v1/humidity", (req, res) => {
  callCppWeather("", (lines) => {
    if (!lines) return res.status(500).json({ error: "Legacy API error" });
    const hum = parseFloat(lines[1].split(":")[1]);
    res.json({ humidity: hum });
  });
});

app.get("/api/v1/wind", (req, res) => {
  callCppWeather("", (lines) => {
    if (!lines) return res.status(500).json({ error: "Legacy API error" });
    const wind = parseFloat(lines[2].split(":")[1]);
    res.json({ wind_speed: wind });
  });
});

app.listen(3000, () => console.log("REST API running on port 3000"));
