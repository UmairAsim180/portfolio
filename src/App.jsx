
import "./index.css";
import "./App.css";
import Typewriter from "react-typewriter-effect";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black h-[100vh] text-white ">
      <Navbar />
      <main>
        <div className="m-4 flex h-[40vh]">
          <div className="h-full flex justify-center items-center p-4">
            <div className="text-4xl font-bold">
              <Typewriter
                multiText={[
                  "Hi, I'm Umair! 👋",
                  "A Passionate Web Developer 🚀",
                  "Building Scalable Web Apps 💻",
                  "Creating Interactive User Experiences 🎨",
                  "Let's Build Something Amazing Together! ✨",
                ]}
                multiTextLoop={true}
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
