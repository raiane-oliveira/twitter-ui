import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import Separator from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

export function Timeline() {
   const [newTweet, setNewTweet] = useState("");
   const [tweets, setTweets] = useState([
      "Meu primeiro Tweet",
      "Tweet teste",
      "Deu certo!",
   ]);

   function createNewTweet(event: FormEvent) {
      event.preventDefault();

      if (newTweet.trim()) {
         setTweets([newTweet, ...tweets]);
         setNewTweet("");
      }
   }

   function handleHotKeySubmit(event: KeyboardEvent) {
      let isNewTweetNotBlank = Boolean(newTweet.trim());
      if (
         isNewTweetNotBlank &&
         event.key === "Enter" &&
         (event.ctrlKey || event.metaKey)
      ) {
         setTweets([newTweet, ...tweets]);
         setNewTweet("");
      }
   }

   return (
      <main className="timeline">
         <Header title="Home" />

         <form className="new-tweet-form" onSubmit={createNewTweet}>
            <label htmlFor="tweet">
               <img
                  src="https://github.com/raiane-oliveira.png"
                  alt="Raiane Oliveira"
               />
               <textarea
                  id="tweet"
                  placeholder="What's happening?"
                  value={newTweet}
                  onKeyDown={handleHotKeySubmit}
                  onChange={(event) => {
                     setNewTweet(event.target.value);
                  }}
               ></textarea>
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
