import express from "express";
import cors from "cors";
import morgan from "morgan";
import database from "./src/database/database.js"
console.log("hola pa")
 //1 configurar un puerto
 const app = express()

 app.set("port", process.env.PORT || 4002); // Cambia a 4002 o cualquier otro puerto disponible
 app.listen(app.get("port"),()=>{
    console.log("hola padenuevo")
 })
 //2 configurar middlewares

 app.use(cors()) //permite conexion remota

 app.use(morgan("dev"))// datos extras en la terminal

 // sirve para que interprete json y que se pueda acceder a los datos del body 
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 //3- crear rutas
 //http://localhost/4003/test
 app.get("/test",(req,res)=>{// cuando se haga una solicitud get pasa lo que se indica
    console.log("holapa")
    //enviar respuesta
    res.send("godpabackend")
 })
