import About from "../../sections/about/About";
import Header from "../../sections/header/Header";
import Highlights from "../../sections/highlights/Highlights";
import Testimonials from "../../sections/testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Header />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default HomePage;
