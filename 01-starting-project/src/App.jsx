import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
   function handleSelect(selection) {
      console.log("Hello World.", selection);
   }

   return (
      <div>
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
            <section id="examples">
               <h2>Examples</h2>
               <menu>
                  <TabButton onSelect={() => handleSelect("components")}>
                     Components
                  </TabButton>
                  <TabButton onSelect={() => handleSelect("jsx")}>
                     JSX
                  </TabButton>
                  <TabButton onSelect={() => handleSelect("props")}>
                     Props
                  </TabButton>
                  <TabButton onSelect={() => handleSelect("state")}>
                     State
                  </TabButton>
               </menu>
            </section>
            Dynamic Content.
         </main>
      </div>
   );
}

export default App;
