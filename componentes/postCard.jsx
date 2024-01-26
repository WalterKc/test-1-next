"use client";
import Link from "next/link";
//recorda que este post se usa en la pagina post, y se pasa los datos de hay
export default function PostCard({ post }) {
  return (
    <div>
      <h3>TEST DE POSTCARD</h3>
      <Link href={`/post/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert("click funcionando")}>click</button>
    </div>
  );
}
