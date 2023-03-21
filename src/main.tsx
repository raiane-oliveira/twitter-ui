import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import twitterLogo from "./assets/logo-twitter.svg";

import {
   House,
   Hash,
   Bell,
   EnvelopeSimple,
   BookmarkSimple,
   FileText,
   DotsThreeCircle,
   User,
   Sparkle,
} from "phosphor-react";
import { Tweet } from "./components/Tweet";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <div className="layout">
         <aside className="sidebar">
            <img className="logo" src={twitterLogo} alt="Logo" />

            <nav className="main-navigation">
               <a className="active" href="">
                  <House weight="fill" />
                  Home
               </a>
               <a href="">
                  <Hash weight="fill" />
                  Explore
               </a>
               <a href="">
                  <Bell />
                  Notifications
               </a>
               <a href="">
                  <EnvelopeSimple />
                  Messages
               </a>
               <a href="">
                  <BookmarkSimple />
                  Bookmarks
               </a>
               <a href="">
                  <FileText />
                  Lists
               </a>
               <a href="">
                  <User />
                  Profile
               </a>
               <a href="">
                  <DotsThreeCircle />
                  More
               </a>
            </nav>

            <button className="new-tweet" type="button">
               Tweet
            </button>
         </aside>

         <div className="content">
            <main className="timeline">
               <header className="timeline-header">
                  Home
                  <Sparkle />
               </header>

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
