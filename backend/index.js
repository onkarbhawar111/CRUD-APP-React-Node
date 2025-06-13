import app from "./app.js"; 
import connectDB from "./config/db.js";

const PORT = 8000;
connectDB();

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})