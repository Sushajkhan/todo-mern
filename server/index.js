const express=require("express");;
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors")


const routes=require("./routes/todoRoutes");
dotenv.config();

const app=express();
const port=process.env.PORT||8000;

const corsOptions={
    origin:true
}
app.use(express.json());
app.use(cors(corsOptions));

mongoose.set("strictQuery",false);
const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected")
    }
    catch(err){

console.log(err)
    }
}


app.use(routes);
app.listen(port,()=>{
    connectDB();
    console.log(`Listening on ${port}`)
})
