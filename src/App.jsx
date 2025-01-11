import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-4xl ml-3">Keisuke</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#about-me" className="mr-5 hover:text-blue-400 duration-300">
            About
          </a>
          <a href="#skills-me" className="mr-5 hover:text-blue-400 duration-300">
            Skills
          </a>
          <a href="#home" className="hover:text-blue-400 duration-300">
            Blog
          </a>
        </nav>
      </div>
    </header>

    <section className="text-gray-700" id="home" >
      <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
            Hi!
            <br />
            I'm Keisuke
            <br />
            Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
          I have been focusing on developing skills in HTML, CSS, JavaScript, TypeScript, React, and Next.js, as well as learning backend technologies such as Node.js and MongoDB. Currently, I am working on building a travel web application that showcases the 47 prefectures of Japan. This project combines my interests in travel and technology, allowing users to explore Japan while integrating features like interactive maps, detailed regional information, and a booking system.
          </p>
          <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
            Contact
          </button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/myFavPicture.jpg" alt="" />
        </div>
      </div>
    </section>

    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div id="about-me" className="text-center mb-20 ">
          <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
            About Me
          </h1>
          <p className="pb-10">
          I hold certifications such as the IT Passport and Domestic Travel Services Manager, which demonstrate my commitment to combining technology and the travel industry. My goal is to work as a front-end engineer at a leading IT company, contribute to innovative projects, and eventually achieve a flexible remote work lifestyle with an annual income exceeding 10 million yen by the age of 30.
          </p>
          <p>I am eager to bring creativity, problem-solving skills, and a user-centered approach to every project I undertake. Thank you for taking the time to learn more about me.
          </p>
        </div>
         
        <div className="flex flex-wrap">
          {/*カード1のdivタグ*/}
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full">
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                  > 
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                 </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Front-End Skills
                </h2>
              </div>
              <div>
                <p>
                  Proficient in HTML, CSS, JavaScript, TypeScript, React, and Next.js. Skilled in building responsive and visually appealing web applications.
                </p>
                <a href="https://todo-33cega5m3-kei0710keis-projects.vercel.app/" className="flex mt-3 text-green-500 items-center">
                  もっと見る
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                  </a>
              </div>
           </div>
          </div>
          {/*カード2のdivタグ*/}
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full">
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                  > 
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                 </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Travel Web App
                </h2>
              </div>
              <div>
                <p>
                  Developed a dynamic travel web application featuring an interactive map of Japan, detailed prefecture information, and booking options for flights and hotels.
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっと見る
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                  </a>
              </div>
           </div>
          </div>
          {/*カード3のdivタグ*/}
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full">
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                  > 
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                 </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Career Goals
                </h2>
              </div>
              <div>
                <p>
                  Aspiring to become a front-end engineer at a global IT company. Passionate about combining technology with creative solutions to deliver user-centered experiences.
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっと見る
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                  </a>
              </div>
           </div>
          </div>

        </div>
      </div>
    </section>

    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/*left side*/}
        <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img src="./img/pc.jpg" alt="" className="rounded" />        
        </div>
        {/* right side*/}
        <div id="skills-me" className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
            My Skills
          </h1>
          <div className="w-full">
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "90%"}}
              >90%
              </div>
            </div>
            <h2>CSS</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "75%"}}
              >75%
              </div>
            </div>
            <h2>JavaScript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "90%"}}
              >90%
              </div>
            </div>
            <h2>Node.js</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "80%"}}
              >80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;