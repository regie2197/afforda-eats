"use client";
import { useState, useEffect } from "react";
import "./homepage.css";

export default function HomePage() {
  const [isSticky, setIsSticky] = useState(false);
  const [showSmallSearchBar, setShowSmallSearchBar] = useState(false);


  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const searchBar = document.querySelector(".search-section");


    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
        navbar?.classList.add("sticky");
      } else {
        setIsSticky(false);
        navbar?.classList.remove("sticky");
      }

      if (
        searchBar instanceof HTMLElement &&
        window.scrollY >= searchBar.offsetTop + searchBar.offsetHeight
      ) {
        setShowSmallSearchBar(true);
      } else {
        setShowSmallSearchBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="navbar">
        <img src="/logo.png" alt="logo" />
        <h1>AffordaEats</h1>
        {showSmallSearchBar ? (
          <div className="small-search-bar">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
          
            <input
              id="query"
              className="input"
              type="search"
              placeholder="Search..."
              name="searchbar"
            />
          </div>
          
        ) : (
          !isSticky && (
            <nav className="navbar-contents">
            </nav>
          )
        )}
        <button className="sign-in">Log Out</button>
      </header>

      <div className="search-section">
    <h2>Where to?</h2>
    <div className="search-options">
      <a href="#search-all">🏠 Search All</a>
      <a href="#hotels">🏨 Hotels</a>
      <a href="#things-to-do">🎡 Things to Do</a>
      <a href="#restaurants">🍴 Restaurants</a>
      <a href="#flights">✈️ Flights</a>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search for a Jolli-Bus!" />
      <button>Search</button>
    </div>
  </div>

      <main>
        <div className="container">
          <div className="box">
            <span className="title">Store 1</span>
            <div>
              <strong>Jolli-Jeep1</strong>
              <p>Location address</p>
              <span>Open</span> <span>7:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Store 1</span>
            <div>
              <strong>Jolli-Jeep1</strong>
              <p>Location address</p>
              <span>Open</span> <span>7:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <span className="title">Store 1</span>
            <div>
              <strong>Jolli-Jeep1</strong>
              <p>Location address</p>
              <span>Open</span> <span>7:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}