import { Header } from "../components/Header";
import Separator from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

const tweets = ["Meu primeiro Tweet", "Tweet teste", "Deu certo!"];

export function Timeline() {
   return (
      <main className="timeline">
         <Header title="Home" />

         <form className="new-tweet-form" action="">
            <label htmlFor="tweet">
               <img
                  src="https://github.com/raiane-oliveira.png"
                  alt="Raiane Oliveira"
               />
               <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
         </form>

         <Separator />

         {tweets.map((tweet) => (
            <Tweet key={tweet} content={tweet} />
         ))}
      </main>
   );
}
