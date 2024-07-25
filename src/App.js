import { useRef, useState } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { FaDownload } from "react-icons/fa";
import myimage from "../src/Assests/myimage.png";
import mypro from "../src/Assests/mypro.png";
import ProCard from "../src/components/ProCard";

function App() {
  const home = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const exp = useRef(null);
  const contacts = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        {/* navbar start  */}
        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="header max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={myimage} className="h-14" alt="Flowbite Logo" />
              <span className="self-center text-white  text-2xl font-semibold whitespace-nowrap dark:text-white">
                Portfolio
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white m-2 flex bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
              >
                Resume <FaDownload className="ml-3 mt-1" />
              </button>
              <button
                type="button"
                className="inline-flex m-2 bg-slate-400 text-black items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={menuOpen}
                onClick={handleMenuClick}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                menuOpen ? "" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 text-black md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-600 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                  onClick={() => scrollToSection(home)}
                  className="link m-1 bg-cyan-100 border rounded-full hover:bg-green-400 hover:border-black "
                >
                  Home
                </li>
                <li
                  onClick={() => scrollToSection(skills)}
                  className="link  m-1 bg-cyan-100 border  rounded-full hover:bg-green-400 hover:border-black "
                >
                  Skills
                </li>
                <li
                  onClick={() => scrollToSection(project)}
                  className="link m-1 bg-cyan-100 border-2 rounded-full hover:bg-green-400 hover:border-black "
                >
                  Projects
                </li>
                <li
                  onClick={() => scrollToSection(exp)}
                  className="link  m-1 bg-cyan-100 border  rounded-full hover:bg-green-400 hover:border-black "
                >
                  Experenices
                </li>
                <li
                  onClick={() => scrollToSection(contacts)}
                  className="link  m-1 bg-cyan-100 border  rounded-full hover:bg-green-400 hover:border-black "
                >
                  Contact Me
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* navbar start  */}

      <div ref={home} className="home">
        <h3>home</h3>
        {/* <!-- home start  --> */}
        <h2
          class="text-4xl font-extrabold text-green-600 m-4 absolute left-2"
          id="Home"
        >
          Welcome
        </h2>
        <main class=" block md:flex md:justify md:ml-10">
          <div class="ml-2">
            <h1 class="mt-16 text-white text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              I'm <span className="text-yellow-300">Shaik Nizamuddin</span>
            </h1>
            <p class="text-lg m-2 justify-self-stretch font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Web Developer in Java & React, I build some industry ready
              projects Self-independent, reliable and friendly individual who
              works hard to achieve my goals. Adaptable quickly and organized
              well. Interested in learning the latest web & software
              technologies quickly.Able to work well in teams as well as
              individually.My future goal is to build the application help to
              end billion users.
            </p>

            <a href="">
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
              >
                View Resume
              </button>
            </a>

            <figure class="max-w-screen-md mx-auto text-center m-2">
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p class="text-2xl m-2 text-white italic font-medium text-gray-900 dark:text-white">
                  "Measuring
                  <span class="text-red-600"> programming progress </span>
                  by lines like Measuring
                  <span class="text-cyan-500"> aircraft building </span>
                  progress by weight."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://m.economictimes.com/thumb/msid-104763154,width-1200,height-1200,resizemode-4,imgsize-267720/bill-gates-5-frugal-habits-of-the-billionaire-you-may-know.jpg"
                  alt="bill gates image"
                />
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite class="pe-3 text-white font-medium text-gray-900 dark:text-white">
                    Bill Gates
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="">
            <img
              class="rounded-full w-96 h-96 items-center content-center m-auto md:mr-28"
              src={mypro}
              alt="image description"
            />
          </div>
        </main>
        {/* <!-- home end  --> */}
      </div>
      <div ref={skills} className="skills">
        <h3>skills</h3>
        {/* <!-- skills start --> */}
        {/* <h2 class="text-4xl font-extrabold text-green-600 m-6" id="Skills"></h2> */}
        <section class="mt-20">
          <h2 className="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1">
            Skills
          </h2>
          <main>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to blue
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Cyan to blue
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Green to blue
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to pink
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Pink to orange
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Teal to Lime
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Red to Yellow
              </span>
            </button>
          </main>
          <main>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to blue
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Cyan to blue
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Green to blue
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to pink
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Pink to orange
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Teal to Lime
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Red to Yellow
              </span>
            </button>
          </main>
        </section>
        {/* <!-- skills end --> */}
      </div>

      <div ref={project} className="project">
        <h3>Projects</h3>
        {/* <!-- project start  --> */}

        <h2
          class="text-4xl font-extrabold text-green-600 ml-7"
          id="Project"
        ></h2>
        <main class="mt-20">
          <h2 class="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1">
            Projects
          </h2>
          {/* <!-- other diev  --> */}
          <section className=" md:flex md:mr-20">
          <ProCard/>
          <ProCard/>
          <ProCard/>
          </section>
          

        </main>

        {/* <!-- project end  --> */}
      </div>
      <div ref={exp} className="exp">
        <h3>Exprience</h3>
      </div>
      <div ref={contacts} className="contacts">
        <h3>Contact me</h3>
      </div>
    </div>
  );
}

export default App;
