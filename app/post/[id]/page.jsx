import Datos from "../../../componentes/cargasPostsC";
import { CargarPostsCliente } from "../../../componentes/cargasPostsC";

//nota, al usar params, estamos llamando a los parametros directamente, no sirve para otra cosa!
async function cargarPosts(id) {
  const respuesta = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const datos = await respuesta.json();
  console.log("ID DE DATOS", id, datos);
  return datos;
}
export default async function PaginaAleatoria({ params }) {
  console.log("PARAMETRO", params);
  const datos = await cargarPosts(params.id);
  //await CargarPostsCliente();

  return (
    <div>
      <h2>
        {datos.id}. {datos.title}
      </h2>
      <h2>{datos.body}</h2>
    </div>
  );
}
