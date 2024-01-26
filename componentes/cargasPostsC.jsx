"use client";
import { useEffect, useState } from "react";
async function CargarPostsCliente() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datos = await respuesta.json();
  console.log(datos);
  return datos;
}

export default function Datos() {
  const [datos, setDatos] = useState(false);
  useEffect(() => {
    async function CargarDatos() {
      const datosAEnviar = await CargarPostsCliente();
      return datosAEnviar;
    }
    CargarDatos();
    setDatos(1);

    console.log("LISTO LOS DATOS");
  }, []);
  return datos;
}
