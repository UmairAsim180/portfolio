import "./index.css";
import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "react-typewriter-effect";
import Navbar from "./components/Navbar";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="bg-black h-[100vh] text-white">
      
      <Navbar />
      <main>
        <div className="m-4 flex h-[40vh]">
          <div className="h-full flex justify-center items-center p-4">
           <div className="text-4xl font-bold">
             <Particles
               id="tsparticles"
               init={particlesInit}
               options={{
                 background: {
                   color: {
                     value: "transparent",
                   },
                 },
                 particles: {
                   number: { value: 50 },
                   move: {
                     enable: true,
                     speed: 2,
                   },
                   color: { value: "#ffffff" },
                   size: {
                     value: 3,
                   },
                   opacity: {
                     value: 0.7,
                   },
                 },
               }}
             />
             <Typewriter
               multiText={[
                 "Hi, I'm Umair! 👋",
                 "A Passionate Web Developer 🚀",
                 "Building Scalable Web Apps 💻",
                 "Creating Interactive User Experiences 🎨",
                 "Let's Build Something Amazing Together! ✨",
               ]}
               multiTextLoop={true} // Infinite loop
               cursorColor="#3498DB"
               typeSpeed={100}
               deleteSpeed={50}
               delay={2000}
             />
           </div> 
            
          </div>
          <div>other block image</div>
        </div>
      </main>
    </div>
  );
}
