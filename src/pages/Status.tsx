import { Header } from "../components/Header";
import Separator from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

const answers = ["Concordo..", "Olha, faz sentido!", "Parabéns pelo progresso"];

export function Status() {
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

         <form className="answer-tweet-form" action="">
            <label htmlFor="tweet">
               <img
                  src="https://github.com/raiane-oliveira.png"
                  alt="Raiane Oliveira"
               />
               <textarea id="tweet" placeholder="Tweet your answer"></textarea>
            </label>

            <button type="submit">Answer</button>
         </form>
         {answers.map((answer) => (
            <Tweet key={answer} content={answer} />
         ))}
      </main>
   );
}
