import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Product } from "../models/Product";
import NavBar from "./Navbar";

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#f10000" : "#121212",
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    fetch("http://localhost:5148/api/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle, #4700b9, #000000)"
            : "radial-gradient(circle, #d5c9fd, #f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="xl" className="mt-12">
          <Catalog product={product} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
