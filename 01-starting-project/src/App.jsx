import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function Header() {
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

const CoreConcept = ({ title, description, image }) => {
   return (
      <li>
         <img src={image} alt={title} />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   );
};

function App() {
   return (
      <div>
         {/* {
  for (let index = 0; index < CORE_CONCEPTS.length; index++) {
    
    console.log(i)
  }
}  */}
         <Header />
         <main>
            <section id="core-concepts">
               <h2>Time to get started!</h2>
               <ul>
                  <CoreConcept {...CORE_CONCEPTS[0]} />
                  <CoreConcept {...CORE_CONCEPTS[1]} />
                  <CoreConcept {...CORE_CONCEPTS[2]} />
                  <CoreConcept
                     title={CORE_CONCEPTS[3].title}
                     description={CORE_CONCEPTS[3].description}
                     image={CORE_CONCEPTS[3].image}
                  />
               </ul>
            </section>
         </main>
      </div>
   );
}

export default App;
