import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Hero section */}
      <Hero />
      {/* Programs section */}
      <Programs />
      {/* reasons section  */}
      <Reasons />
      {/* plans section */}
      <Plans />
      {/* Testimonials section */}
      <Testimonials />
      {/* Join section*/}
      <Join />
      {/* footer  */}
      <Footer />
    </div>
  );
}

export default App;
