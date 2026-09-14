
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Caleries from "../../assets/calories.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Hero = () => {
  

  const Counter = ({ start, end, duration, prefix }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [start, end, duration]);

    return (
      <span>
        {prefix}
        {count}
      </span>
    );
  };

  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* import Header in Hero section */}
        <Header />
        {/*The best ad  */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}

        <div className="figures">
          <div>
            <span>
              <Counter start={100} end={140} duration={4} prefix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <Counter start={800} end={978} duration={4} prefix="+" />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              <Counter start={0} end={50} duration={4} prefix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero Images */}
        <img src={hero_image} alt="hero-image" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero-image-back"
          className="hero-image-back"
        />
        {/* Calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Caleries} alt="calories" />
          <div>
            <span> Calories Burned </span>
            <span> 220 kcal </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
