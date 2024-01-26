import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"about"}>about</Link>
        </li>
        <li>
          <Link href={"/tienda"}>Tienda</Link>
        </li>
        <li>
          <Link href={"/post"}>post</Link>
        </li>
      </ul>
    </nav>
  );
}
