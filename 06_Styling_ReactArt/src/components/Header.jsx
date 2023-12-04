import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
   return (
      <header>
         <img src={logo} alt="A canvas" />
         <h1>ReactArt</h1>
         <p
            style={{
               color: "red",
               border: "3px solid black",
            }}
         >
            A community of artists and art-lovers.
         </p>
      </header>
   );
}
