//const express = require("express");
import express from "express";
//const express =require("cors")
import cors from "cors";
import bdconectar from "../database/config.js";


class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port=process.env.PORT;
    this.connectarBd()
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  } 

  async connectarBd(){
    await bdconectar()
  }

  escuchar() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

export default Server
