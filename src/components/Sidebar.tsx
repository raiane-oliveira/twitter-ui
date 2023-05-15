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
  Pencil,
} from "phosphor-react";

import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/">
          <Hash weight="fill" />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/">
          <Bell />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/">
          <EnvelopeSimple />
          <span>Messages</span>
        </NavLink>
        <NavLink to="/">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/">
          <FileText />
          <span>Lists</span>
        </NavLink>
        <NavLink to="/">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/">
          <DotsThreeCircle />
          <span>More</span>
        </NavLink>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
