const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get('/customers', (req, res) => {
  console.log('Customers');
  res.send(customers = [
    {
      firstName: "Ronald",
      lastName: "Recto",
      userName: "rvrecto",
      email: "rvr@recto.com",
      status: "active"
    },
    {
      firstName: "Frank",
      lastName: "Recto",
      userName: "fpr2",
      email: "frecto@recto.com",
      status: "away"
    },
    {
      firstName: "Phil",
      lastName: "Recto",
      userName: "prexwebs",
      email: "prexswebs@gmail.com",
      status: "disabled"
    },
    {
      firstName: "Marty",
      lastName: "Recto",
      userName: "MDM4life",
      email: "mdrecto@recto.com",
      status: "active"
    }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Connected to Port# ${PORT}`))