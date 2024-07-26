import React from "react"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript (New)" },
  { skill: "Python" },
  { skill: "Vue" },
  { skill: "React" },
  { skill: "Next.js (New)" },
  { skill: "Tailwind CSS (New)" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "Collab" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-zinc-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Ritwik and I am an{" "}
              <span className="font-bold">{"ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Dehradun, India.
            </p>
            <br />
            <p>
              I have multiple degrees. Currently, I am undergoing a BS in Data Science and Applications from IIT Madras.
              My past degrees are: an MBA from IRMA or Institute of Rural Management Anand which I got in 2020 and 
              a BBA from Amity university Noida which I got in 2017.
              
            </p>
            <br />
            <p>
              I have been playing with code since 2005 but entered the field in 2018 via use of 
              no code tools like Wix and Wordpress which I used to solve client problems.
            </p>
            <br />
            <p>
            I have a variety of hobbies and passions that keep me engaged, 
            including reading, hiking, practicing French, and playing the piano.
             I&#39;m always on the lookout for new experiences and enjoy constantly learning new things.
            </p>
            <br />
            <p>
            I believe in{" "}
            <span className="font-bold text-zinc-500">
             continuous growth
            </span>{" "} and strive to embody that principle. 
            My passion for technology drives me to explore and push the boundaries of what&#39;s possible.
             I&#39;m eager to see where my career leads and always open to new opportunities. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
