import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <div className="layout">
         <Sidebar />

         <div className="content">
            <Header title="Home" />

            <main className="timeline">
               <form className="new-tweet-form" action="">
                  <label htmlFor="tweet">
                     <img
                        src="https://github.com/raiane-oliveira.png"
                        alt="Raiane Oliveira"
                     />
                     <textarea
                        id="tweet"
                        placeholder="What's happening?"
                     ></textarea>
                  </label>

                  <button type="submit">Tweet</button>
               </form>

               <div className="separator" />

               <Tweet />
            </main>
         </div>
      </div>
   </React.StrictMode>
);
