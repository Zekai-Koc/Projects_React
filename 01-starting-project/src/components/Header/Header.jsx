import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export default function Header() {
   return (
      <header>
         <img src={reactImg} alt="Stylized atom" />
         <h1>React Essentials</h1>
         <p>
            {
               reactDescriptions[
                  Math.floor(Math.random() * reactDescriptions.length)
               ]
            }{" "}
            React concepts you will need for almost any app you are going to
            build!
         </p>
      </header>
   );
}
