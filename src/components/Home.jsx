import Products from "../subcomponents/Products";
import About from "../subcomponents/AboutUs";
import Slideshow from "../subcomponents/Slideshow.jsx";
function Home() {
  return (
    <>
      <Slideshow />
      <Products />
      <About />
    </>
  );
}

export default Home;
