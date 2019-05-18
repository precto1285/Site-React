const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/customers', (req, res) => {
  console.log('Customers');
  res.send(
    customers = [
      {
        key: 1,
        firstName: "Ronald",
        lastName: "Recto",
        userName: "rvrecto",
        email: "rvr@recto.com",
        status: "active"
      },
      {
        key: 2,
        firstName: "Frank",
        lastName: "Recto",
        userName: "fpr2",
        email: "frecto@recto.com",
        status: "away"
      },
      {
        key: 3,
        firstName: "Phil",
        lastName: "Recto",
        userName: "prexwebs",
        email: "prexswebs@gmail.com",
        status: "disabled"
      },
      {
        key: 4,
        firstName: "Marty",
        lastName: "Recto",
        userName: "MDM4life",
        email: "mdrecto@recto.com",
        status: "active"
      }
    ]
  );
});

app.listen(PORT, () => console.log(`Connected to Port# ${PORT}`))