import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";

function App() {
   const [selectedTopic, setSelectedTopic] = useState(null);

   function handleSelect(selection) {
      console.log("Hello World.", selection);
      setSelectedTopic(selection);
   }

   return (
      <div>
         <Header />
         <main>
            <section id="core-concepts">
               <h2>Time to get started!</h2>
               <ul>
                  {/* <CoreConcept {...CORE_CONCEPTS[0]} />
                  <CoreConcept {...CORE_CONCEPTS[1]} />
                  <CoreConcept {...CORE_CONCEPTS[2]} />
                  <CoreConcept
                     title={CORE_CONCEPTS[3].title}
                     description={CORE_CONCEPTS[3].description}
                     image={CORE_CONCEPTS[3].image}
                  /> */}

                  {CORE_CONCEPTS.map((concept, index) => (
                     //  <CoreConcept {...concept} key={index} />
                     <CoreConcept {...concept} key={concept.title} />
                  ))}
               </ul>
            </section>
            <section id="examples">
               <h2>Examples</h2>
               <menu>
                  <TabButton
                     onSelect={() => handleSelect("components")}
                     isSelected={selectedTopic === "components"}
                  >
                     Components
                  </TabButton>
                  <TabButton
                     onSelect={() => handleSelect("jsx")}
                     isSelected={selectedTopic === "jsx"}
                  >
                     JSX
                  </TabButton>
                  <TabButton
                     onSelect={() => handleSelect("props")}
                     isSelected={selectedTopic === "props"}
                  >
                     Props
                  </TabButton>
                  <TabButton
                     onSelect={() => handleSelect("state")}
                     isSelected={selectedTopic === "state"}
                  >
                     State
                  </TabButton>
               </menu>

               <div id="tab-content">
                  {selectedTopic ? (
                     <>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                           <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                     </>
                  ) : (
                     <p>Please select a topic.</p>
                  )}
               </div>
            </section>
         </main>
      </div>
   );
}

export default App;
