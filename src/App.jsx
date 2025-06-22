import About from "./components/features/about/About";
import Categories from "./components/features/categories/Categories";
import Experts from "./components/features/experts/Experts";
import Footer from "./components/features/footer/Footer";
import Hero from "./components/features/hero/Hero";
import Navbar from "./components/features/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Experts />
      <About />
      <Footer />
    </>
  );
}

export default App;
