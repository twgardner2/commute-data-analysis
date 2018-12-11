const express = require('express');
const sqlite = require('sqlite3').verbose();
const app = express();

const port = 3000;

const db = new sqlite.Database('sqlite.database');

db.serialize(function() {
  db.run(`
  CREATE TABLE IF NOT EXISTS Commute 
  (date TEXT,
   alarm TEXT,
   depart_home TEXT,
   arrive_platform_morning TEXT,
   route_morning TEXT,
   mpg_morning REAL,
   driving_score_morning INTEGER,
   temp_morning INTEGER,
   precip_rain_6hr_morning REAL,
   precip_snow_6hr_morning REAL,
   train_num_morning TEXT,
   train_depart_morning TEXT,
   train_arrive_morning TEXT,
   arrive_work TEXT,
   depart_work TEXT,
   train_num_evening TEXT,
   arrive_platform_evening TEXT,
   train_depart_evening TEXT,
   car_depart_evening TEXT,
   arrive_home TEXT,
   route_evening TEXT,
   mpg_evening REAL,
   driving_score_evening INTEGER,
   temp_evening INTEGER,
   precip_rain_6hr_evening REAL,
   precip_snow_6hr_evening REAL,
   am_notes TEXT,
   pm_notes TEXT)`);
});

app.get('/', (req, res) => {
  res.send('this is home');
});

app.get('/home', (req, res) => {
  res.send('this is home, too');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
