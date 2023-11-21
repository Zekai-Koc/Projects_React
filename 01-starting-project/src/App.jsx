import reactImg from "./assets/react-core-concepts.png";

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
         <Header />
         <main>
            <section id="core-concepts">
               <h2>Time to get started!</h2>
               <ul>
                  <CoreConcept
                     title="Components"
                     description="The core UI building block."
                     image={reactImg}
                  />
               </ul>
            </section>
         </main>
      </div>
   );
}

export default App;
