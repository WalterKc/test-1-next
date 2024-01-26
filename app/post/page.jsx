import Link from "next/link";
//import CargarPostsCliente from "../../componentes/cargasPostsC";
import Datos from "../../componentes/cargasPostsC";
import PostCard from "../../componentes/postCard";
async function cargarPosts() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datos = await respuesta.json();
  //console.log(datos);
  return datos;
}

export default async function PostPages() {
  const post = await cargarPosts();
  console.log("DATOS DEL SERVER CARGADOS!");

  //console.log("IDS", Object.keys(post));
  //console.log("Todo", Object.keys(post[0]));

  //este de aca abajo, basicamente, rota o hace un buble for para cada uno, y se puede usar para obtener datos
  //es una manera simplificada de hacer otras cosas
  post.map((posts) => {
    console.log("mapa de post", posts.id);
  });

  return (
    <div>
      <Datos></Datos>
      <h1>Postpages</h1>
      <h2>hijo 7</h2>
      <Link href={"/"}>Volver</Link>
      {post.map((posts) => (
        <PostCard post={posts} key={posts.id}></PostCard>
      ))}
    </div>
  );
}
