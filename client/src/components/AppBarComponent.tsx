"use client";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react"
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import styles from "./AppBar.module.css";

export default function AppBarComponent() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false)
  const [showSmallSearchBar, setShowSmallSearchBar] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };



  useEffect(() => {
    const navbar = document.querySelector(".navbar")
    const searchBar = document.querySelector(".search-section")

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
        navbar?.classList.add("sticky")
      } else {
        setIsSticky(false)
        navbar?.classList.remove("sticky")
      }

    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AppBar position="sticky" className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`} sx={{ boxShadow: "none", all: 'unset' }}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 1rem", width: "100%" }}>
        {/* Logo Section */}
        <Box className={styles.logoTitle} sx={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="logo" className={styles.logoPic} />
          <Typography component="a" href="#homepage" className={styles.headTitle}>
            AffordaEats
          </Typography>
        </Box>

        {/* Menu Section */}
        <Box className={styles.navbarRight} sx={{ display: "flex", alignItems: "center" }}>
          <label className={styles.popup}>
            <input type="checkbox" />
            <div
              tabIndex={0}
              className={styles.burger}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </div>
            <nav className={styles.popupWindow}>
              <legend>Profile Settings</legend>
              <ul>
                <li>
                  <button>
                    <span>Reviews</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <span>Log Out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </label>
        </Box>
      </Toolbar>
    </AppBar>
  );
}