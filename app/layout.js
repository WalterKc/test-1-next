import Navbar from "../componentes/navbar";
export const metadata = {
  title: "Test de Next.js",
  description: "Test 1 de Next.js",
};
//import { HomePage } from "./page";
//este children es un props , pero tiene que llamarse asi por como funciona next, no puede llamarse pepito

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
