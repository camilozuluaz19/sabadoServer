//IMPORTO EL FRAMEWORK EXPRESS
//const express = require('express') //version vieja de umportar
import express from "express";

//importo las rutas de la API
import { rutas } from "../routes/rutas.js";

export class Servidor {
  constructor() {
    this.app = express(); //ATRIBUTO APP guarda a express
    this.atenderPeticiones();
  }

  despertarServidor() {
    this.app.listen(process.env.PORT, function () {
      console.log(`SERVIDOR ENCENDIDO EN ${process.env.PORT}`);
    });
  }

  atenderPeticiones() {
    //LLAMANDO EL ARHIVO DE RUTAS
    //('/') cualquier ruta que llegue
    this.app.use("/", rutas);
  }
}