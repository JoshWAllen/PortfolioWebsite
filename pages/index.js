import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import skills from "../data/skills";
import projects from "../data/projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const projectCards = projects.map((project) => {
    return (
      <div
        key={project.title}
        className="basis-1/3 flex-1 text-center shadow-md p-10 rounded-xl transition ease-in-out hover:-translate-y-1 duration-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-slate-800"
      >
        <h3 className="text-2xl font-medium p-3 dark:text-slate-100">
          {project.title}
        </h3>
        <p className="text-md py-2">{project.description}</p>
        <h4 className="pt-4 text-lg text-teal-600 dark:text-teal-400">
          Skills Used
        </h4>
        {project.skills.map((skill) => (
          <p key={skill} className="text-gray-800 py-1 dark:text-slate-300">
            {skill}
          </p>
        ))}
        <a
          href={project.links.website}
          target="blank"
          className="flex justify-end"
        >
          <FiExternalLink />
        </a>
      </div>
    );
  });

  const skillTags = skills.map((skill) => {
    return (
      <div
        key={skill}
        className="p-3 w-min shadow-md text-center transition ease-in-out hover:-translate-y-1 duration-300 dark:bg-slate-600 dark:text-slate-200 dark:shadow-slate-800"
      >
        {skill}
      </div>
    );
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Josh Allen Portfolio</title>
        <meta
          name="description"
          content="Porfolio webpage for Joshua Wen Dong Allen, computer engineering student at Queen's University."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-8 pb-4 font-poppins md:px-16 lg:px-32 dark:bg-slate-700 ">
        <section id="Hero" className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">JA</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Josh_Allen_Resume_10.13.2022.pdf"
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-8 dark:text-slate-300">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Josh Allen
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-200">
              Queen&#39;s Computer Engineering Student
            </h3>
            <p className="text-md py-5 mx-auto leading-8 text-gray-800 max-w-xl md:text-xl dark:text-slate-200">
              Hey I&#39;m Josh Allen, not the{" "}
              <a
                className="text-teal-600 underline dark:text-teal-400"
                href="https://en.wikipedia.org/wiki/Josh_Allen_(quarterback)"
                target="blank"
              >
                Buffalo Bills quarterback
              </a>
              , just your friendly neighborhood coder.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/joshua-wendong-allen/"
              target="blank"
            >
              <AiFillLinkedin className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-400" />
            </a>
            <a href="https://github.com/JoshWAllen" target="blank">
              <AiFillGithub className="cursor-pointer hover:text-teal-600 dark:hover:text-teal-400" />
            </a>
          </div>
          <div className="relative w-72 h-72 mx-auto mt-20 mb-10 rounded-full overflow-hidden md:w-96 md:h-96">
            <Image
              alt="profile headshot picture of Josh Allen"
              src="/Portrait.jpg"
            />
          </div>
        </section>
        {/* Content sections - skills projects etc */}
        <section id="Projects">
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-slate-100">
              Work | Projects | Clubs
            </h3>
            <p className="text-md py-2 max-w-3xl mx-auto leading-8 text-gray-800 dark:text-slate-200">
              Throughout my time at Queen&#39;s I&#39;ve had some incredible
              opportunities through summer co-ops, school clubs, hackathons, and
              side projects. I&#39;ve been able to hone my skills as a developer
              and branch out into new disruptive fields in tech. Here&#39;s some
              of my favourites:
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {projectCards}
          </div>
        </section>
        <section id="Skills">
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-slate-100">Skills</h3>
            <div className="max-w-lg m-auto flex gap-4 flex-wrap justify-center">
              {skillTags}
            </div>
          </div>
        </section>
        <section className="text-center" id="contact">
          <div className="mt-10 flex flex-col items-center gap-3 dark:text-slate-300">
            <h2 className="text-3xl dark:text-slate-100">Contact</h2>
            <p>
              I&#39;m currently looking for opportunities in software
              engineering, embedded systems, or fullstack development.
            </p>
            <p>
              Feel free to reach out to me if you have a question or just want
              to say hi!
            </p>
            <a
              className="py-4 px-5 mt-4 bg-teal-600 text-white hover:text-black dark:text-black dark:bg-teal-400 dark:hover:text-white"
              href="mailto:19jwda@queensu.ca"
            >
              Email Me
            </a>
          </div>
        </section>
        <div id="footer" className="text-center mt-20 mb-4 dark:text-slate-100">
          Template Created By
          <span className="text-teal-600 dark:text-teal-400"> Josh Allen</span>
        </div>
      </main>
    </div>
  );
}
