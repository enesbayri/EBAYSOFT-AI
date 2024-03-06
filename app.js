const express =require("express");
const app=express();

const dotenv=require("dotenv").config();

const main_router=require("./src/routers/main_router");

const ejs=require("ejs");
const express_layouts=require("express-ejs-layouts");
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(express_layouts);
app.use("/",main_router);



app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT+" PORT server aktif");
});