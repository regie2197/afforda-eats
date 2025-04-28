"use client"
import { useState, useEffect } from "react"
import { AppBar, Toolbar, InputBase, Button, Select, MenuItem } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import "./homepage.css"
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isSticky, setIsSticky] = useState(false)
  const [showSmallSearchBar, setShowSmallSearchBar] = useState(false)

  const router = useRouter();

  const handleStoreClick = (storeId: number) => {
    // Navigate to the /store path with the store ID
    router.push(`/store?id=${storeId}`);
  };

  const handleLogout = () => {
    // Clear authentication data (e.g., tokens)
    localStorage.removeItem("authToken"); // Example: Remove token from localStorage

    // Redirect to the login page
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

      if (
        searchBar instanceof HTMLElement &&
        navbar instanceof HTMLElement &&
        navbar.getBoundingClientRect().bottom > searchBar.getBoundingClientRect().bottom
      ) {
        setShowSmallSearchBar(true) // Show the small search bar
      } else {
        setShowSmallSearchBar(false) // Hide the small search bar
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" className={`navbar ${isSticky ? "sticky" : ""}`} sx={{ all: 'unset', boxShadow: "none",   width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 1rem",   width: "100%" }}>
          <Box className="LogoTitle" sx={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="logo" className="logoPic" />            
          <Typography component="a" href="#homepage" className="headtitle">
              AffordaEats
            </Typography>
          </Box>

          {/* Center navbar contents - only visible when not sticky */}
          <Box className="navbar-contents" sx={{ display: isSticky ? "none" : "flex" }}>
          </Box>

          <Box className="navbar-right" sx={{ display: "flex", alignItems: "center" }}>
            {showSmallSearchBar && (
              <Box
                className="small-search-bar"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  opacity: 1,
                  visibility: "visible",
                  maxWidth: "200px",
                }}
              >
                <SearchIcon
                  className="search-icon"
                  sx={{
                    position: "absolute",
                    left: "10px",
                    color: "#bdbecb",
                    zIndex: 1,
                  }}
                />
                <InputBase
                  id="query"
                  className="input"
                  placeholder="Search..."
                  sx={{
                    width: "100%",
                    height: "40px",
                    paddingLeft: "2.5rem",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#16171d",
                    color: "#bdbecb",
                  }}
                />
              </Box>
            )}

            <label className="popup">
              <input type="checkbox" />
              <div
                tabIndex={0}
                className="burger"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <MenuIcon sx={{ color: "white" }} />
              </div>
              <nav className="popup-window">
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

      {/* Search Section */}
      <Box className="search-section" sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h2" component="h2" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Eat. Rate. Repeat.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", marginBottom: "6px" }}>
        The smart way to find what's worth tasting.
        </Typography>
        <Box
          className="search-bar"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          
          <InputBase
            placeholder="Search for a Jolli-Bus!"
            sx={{
              width: "60%",
              padding: "10px",
              fontSize: "1rem",

            }}
          />
          <Button
            variant="contained"
            className="search-button"
            sx={{
              backgroundColor: "#000000",
              color: "white",
              "&:hover": {
                backgroundColor: "#019874",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Box
  className="search-options"
  sx={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "20px" }}
>
  <Grid
    container
    className="filterSort"
  >
    {/* Filter By Dropdown */}
    <Grid item>
      <Select
        defaultValue=""
        displayEmpty
        className="selectBtn"
        MenuProps={{
          style: { zIndex: 900 }, // Ensure the dropdown is below the navbar
          disablePortal: true, // Render the dropdown inside the DOM hierarchy
          disableScrollLock: true, // Allow scrolling while the dropdown is open
        }}
      >
        <MenuItem value="" disabled>Filter By</MenuItem>
        <MenuItem value="restaurants">Restaurants</MenuItem>
        <MenuItem value="cafes">Cafes</MenuItem>
        <MenuItem value="streetfood">Street Food</MenuItem>
      </Select>
    </Grid>

    {/* Sort By Dropdown */}
    <Grid item>
      <Select
        defaultValue=""
        displayEmpty
        className="selectBtn"
        MenuProps={{
          style: { zIndex: 900 }, // Ensure the dropdown is below the navbar
          disablePortal: true, // Render the dropdown inside the DOM hierarchy
          disableScrollLock: true, // Allow scrolling while the dropdown is open
        }}
      >
        <MenuItem value="" disabled>Sort By</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="price">Price</MenuItem>
      </Select>
    </Grid>
  </Grid>
</Box>
      </Box>

      {/* Main Content */}
      <Container>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((store) => (
            <Grid item xs={12} sm={6} md={4} key={store}>
              <div className="container" onClick={() => handleStoreClick(store)}>
                <Paper className="box">
                  <Box
                  component="img"
                  src="/Jollijeep1.jpg"
                  alt="jollijeep"
                  className="jeepPic"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover", // Ensures the image fills the container without stretching
                  }}
                  />
                  <Typography
                  variant="h6"
                  className="title"
                  sx={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "0.1em" }}
                  >
                  Store {store}
                  </Typography>
                  <Box>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ display: "block", marginBottom: "0.5rem" }}>
                    Jolli-Jeep {store}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ margin: 0, fontSize: "0.9em", fontWeight: 300, letterSpacing: "0.1em" }}
                  >
                    Location address
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ fontSize: "0.7rem", fontWeight: 300 }}>Open</span>{" "}
                    <span style={{ fontSize: "0.7rem", fontWeight: 500, marginRight: "0.2rem" }}>
                    7:00 AM - 8:00 PM
                    </span>
                  </Typography>
                  </Box>
                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
