const express = require("express");
const cors = require("cors");
const prizeRoutes = require("./routes/prizes");
const faqRoutes = require("./routes/faq");
const enrollRoutes = require("./routes/enroll");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/faq", faqRoutes);
app.use("/api", prizeRoutes);
app.use("/api/enroll", enrollRoutes);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// app.get("/", (req, res)=>{
//     res.send("Welcome to the app")
    
// })
