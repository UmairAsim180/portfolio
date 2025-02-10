import "./index.css";
import "./App.css";
import Typewriter from "react-typewriter-effect";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export default function App() {
  return (
    <div className="dark:bg-black bg-[#DBE2EF] text-[#112D4E] dark:text-white font-poppins">
      <Navbar />
      <main className="px-4 md:px-0">
        {/* Upper div */}
        <div className="upper flex justify-between relative items-center bg-cover px-2 border-x-2 md:mx-4 upper-height md:px-6 py-4">
          <img src="web.png" className="absolute opacity-20 md:hidden"/>
          {/* Type writer  */}
          <div className="typewriter mt-6 md:w-[60vw]">
            <div className="custom-shadow  text-3xl h-36 md:text-5xl font-bold ">
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
          <div>
          <img src="web.png" alt="Web" className="h-[60vh] md:block hidden"/>
          </div>
        </div>
        {/* Div container for Services */}
        <div id="services" className="Contact mt-10 py-6 min-h-[90vh] text-[#F9F7F7] flex flex-col justify-center bg-[#3F72AF] dark:bg-zinc-800">
          <h2 className="text-center text-3xl my-3 mb-10 font-bold transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]">Services</h2>
          <Services/>
        </div>
        {/* Div container for about */}
        <div id="about" className="About text-center min-h-[90vh] justify-center flex flex-col md:w-[70vw] mx-auto space-y-3 mt-10 py-6">
          <h2 className="text-center text-3xl my-3 font-bold transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]">About Me</h2>
          <p>
            Hi, I'm <span className="text-[#3498DB] font-bold text-xl">Umair</span>, a web
            developer passionate about building modern and responsive websites.
            I have experience with <span className="text-[#3498DB] font-bold text-xl">HTML, CSS, JavaScript, Express, and Tailwind
              CSS</span>, and I’m currently learning <span className="text-[#3498DB] font-bold text-xl">React and Next.js</span> to expand my
            skills in frontend development.
          </p>
          <p>
            I enjoy turning ideas into functional and visually appealing web
            experiences. My focus is on writing clean, efficient code and
            continuously improving my development skills. As I dive deeper into
            React and Next.js, I'm excited to work on projects that enhance user
            experience and performance.
          </p>
          <p>
            I'm always open to learning new technologies and collaborating on
            exciting web projects!
          </p>
        </div>
        
        {/* Div container for contact */}

        <div id="contact" className="Contact mt-10 py-6 dark:bg-zinc-900 bg-[#3F72AF]">
          <h2 className="text-center text-3xl my-3 font-bold transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]">Contact</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
}
