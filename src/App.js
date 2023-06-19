import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./container/PageContainer";
import Detail from "./pages/Detail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import ProductList from "./components/ProductList/ProductList";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  // Tema nesnesini burada tanımlayın
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <PageContainer>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<><Search /> <ProductList /> </> } />
              <Route path="/favorites" element={<Favorites /> } />
            </Routes>
            <Footer/>
          </Router>
        </PageContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;