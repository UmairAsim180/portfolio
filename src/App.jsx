import "./index.css";
import "./App.css";
import Typewriter from "react-typewriter-effect";
import Navbar from "./components/Navbar";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export default function App() {
  return (
    <div className="bg-black text-white font-poppins ">
      <Navbar />
      <main className="p-4">
        {/* Upper div */}
        <div className="upper flex justify-between items-center bdr upper-height p-4">
          {/* Type writer  */}
          <div className="typewriter mt-6 w-[60vw]">
            <div className="custom-shadow text-5xl font-bold ">
            <Typewriter
              multiText={[
                "Hi, I'm Umair Asim!",
                "A Passionate Web Developer ",
                "Building Scalable Web Apps ",
                "Creating Interactive User Experiences ",
                "Let's Build Something Amazing Together! ",
              ]}
              multiTextLoop={true}
              cursorColor="#3498DB"
              typeSpeed={100}
              deleteSpeed={50}
              delay={2000}
            />
            </div>
            {/* Paragraph under typewriter  */}
            <div className="mt-10">
              <p>
                Hi, I'm Umair! A passionate web developer skilled in React,
                Next.js, Express, and Node.js. I love building modern,
                user-friendly, and efficient web applications. Always eager to
                learn new technologies and improve my skills.
              </p>
              {/* Social Icons */}
              <div className="socialIcons my-3 flex space-x-2">
                <div className="border-2 border-[#3498DB] rounded-full p-2 w-fit">
                <FaLinkedinIn />
                </div>
                <div className="border-2 border-[#3498DB] rounded-full p-2 w-fit">
                  <TbBrandFiverr />
                </div>
              </div>
            </div>
          </div>
          <div className="image bdr">IMAGE</div>
        </div>
        <div className="About">
          About
        </div>
      </main>
    </div>
  );
}
