const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Povolit JSON odpovědi
app.use(express.json());

// API endpoint
app.get("/api/get_dps_data", (req, res) => {
  const data = [
    {
      "isin": "UNIQADPS001",
      "fond": "Akciový ú.f. UNIQA p.s. a.s.",
      "date": "2026-03-13",
      "value": 1.9152,
      "currency": "CZK"
    },
    {
      "isin": "UNIQADPS001",
      "fond": "Akciový ú.f. UNIQA p.s. a.s.",
      "date": "2026-03-20",
      "value": 1.8678,
      "currency": "CZK"
    }
  ];

  res.json(data);
});

// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});