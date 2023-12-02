import React from "react";
import { calculateInvestmentResults } from "../util/investment.js";

const Results = ({ userInput }) => {
   const resultsData = calculateInvestmentResults(userInput);

   console.log(resultsData);

   return <p>Results.</p>;
};

export default Results;
