import { useState } from "react";

export default function Player() {
   const [userName, setuserName] = useState("");
   const [submitted, setSubmitted] = useState(false);

   const handleChange = (e) => {
      setSubmitted(false);
      setuserName(e.target.value);
   };

   const handleClick = () => {
      setSubmitted(true);
   };

   return (
      <section id="player">
         <h2>Welcome {submitted ? userName : "unknown entity"}</h2>
         <p>
            <input
               type="text"
               value={userName}
               onChange={handleChange}
               placeholder="Enter your name."
            />
            <button onClick={handleClick}>Set Name</button>
         </p>
      </section>
   );
}
