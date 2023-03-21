import twitterLogo from "../assets/logo-twitter.svg";
import "./Sidebar.css";

import {
   House,
   Hash,
   Bell,
   EnvelopeSimple,
   BookmarkSimple,
   FileText,
   DotsThreeCircle,
   User,
} from "phosphor-react";

export function Sidebar() {
   return (
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
   );
}
