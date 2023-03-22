import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import Separator from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

export function Status() {
   const [newAnswer, setNewAnswer] = useState("");
   const [answers, setAnswers] = useState([
      "Concordo..",
      "Olha, faz sentido!",
      "Parabéns pelo progresso",
   ]);

   function createNewAnswer(event: FormEvent) {
      event.preventDefault();

      if (newAnswer.trim()) {
         setAnswers([newAnswer, ...answers]);
         setNewAnswer("");
      }
   }

   function handleHotKeySubmit(event: KeyboardEvent) {
      let isNewAnswerBlank = Boolean(newAnswer.trim());
      if (
         isNewAnswerBlank &&
         event.key === "Enter" &&
         (event.ctrlKey || event.metaKey)
      ) {
         setAnswers([newAnswer, ...answers]);
         setNewAnswer("");
      }
   }

   return (
      <main className="status">
         <Header title="Tweet" />

         <Tweet
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam
            consequatur quibusdam expedita et voluptatem eos perferendis,
            voluptatibus dignissimos nisi omnis commodi cumque impedit autem libero
            magnam magni cupiditate repellat?"
         />

         <Separator />

         <form className="answer-tweet-form" onSubmit={createNewAnswer}>
            <label htmlFor="tweet">
               <img
                  src="https://github.com/raiane-oliveira.png"
                  alt="Raiane Oliveira"
               />
               <textarea
                  id="tweet"
                  placeholder="Tweet your answer"
                  value={newAnswer}
                  onKeyDown={handleHotKeySubmit}
                  onChange={(event) => setNewAnswer(event.target.value)}
               ></textarea>
            </label>

            <button type="submit">Answer</button>
         </form>
         {answers.map((answer) => (
            <Tweet key={answer} content={answer} />
         ))}
      </main>
   );
}
