import "./Tweet.css";

import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";

export function Tweet() {
   return (
      <a href="#" className="tweet">
         <img
            src="https://github.com/raiane-oliveira.png"
            alt="Raiane Oliveira"
         />

         <div className="tweet-content">
            <div className="tweet-content-header">
               <strong>Raiane Oliveira</strong>
               <span>@raianeeo</span>
            </div>

            <p>
               Acabei de migrar um projeto React GIGANTE de create-react-app
               para Vite e os resultados foram:
               <br />
               <br />
               ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
               ✅ npm build: De 120s para 22s
               <br />
               <br />
               Além disso, troquei do Yarn para o PNPM e o install das deps
               mudou de 24s para 8s 🔥
            </p>

            <div className="tweet-content-footer">
               <button type="button" data-tweet="comment">
                  <ChatCircle />
                  20
               </button>

               <button type="button" data-tweet="share">
                  <ArrowsClockwise />
                  10
               </button>

               <button type="button" data-tweet="like">
                  <Heart />
                  32
               </button>
            </div>
         </div>
      </a>
   );
}
