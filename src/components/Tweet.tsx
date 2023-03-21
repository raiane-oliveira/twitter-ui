import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
   content: string;
}

export function Tweet(props: TweetProps) {
   return (
      <Link to="/status" className="tweet">
         <img
            src="https://github.com/raiane-oliveira.png"
            alt="Raiane Oliveira"
         />

         <div className="tweet-content">
            <div className="tweet-content-header">
               <strong>Raiane Oliveira</strong>
               <span>@raianeeo</span>
            </div>

            <p>{props.content}</p>

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
      </Link>
   );
}
