import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contacts.jsx";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const animationReady = () => {
    setLoading(false);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", animationReady());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home animationReady={animationReady} />
          <About />
          <Services />
          <Skills />
          <Contacts />
        </>
      )}
    </>
  );
}

export default App;
