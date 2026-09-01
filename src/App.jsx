import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";


function App() {
  return (
    <div className="App">
      
      {/* Hero section */}
      <Hero />
      {/* Programs section */}
      <Programs/>
      {/* reasons section  */}
      <Reasons />

     </div>
  );
}

export default App;
