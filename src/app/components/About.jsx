"use client"
import Image from 'next/image'
import React, {useState, useTransition} from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="flex flex-wrap space-x-8 sm:flex-row flex-col">
                <div className="w-full sm:w-1/4">
                    <ul className="list-disc pl-8">
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/4">
                    <ul className="list-disc">
                        <li>NestJs</li>
                        <li>NextJs</li>
                        <li>ElasticSearch</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/4">
                    <ul className="list-disc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc'>
                <li>International Institute of Information Technology, Hyderabad (M-Tech CSE CGPA: 8.71)</li>
                <li>College of Engineering, Trivandrum (B-Tech Mechanical Engineering CGPA: 8.27)</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc'>
                <li>Nbyula - Software Engineering Intern (May 2023 - July 2023)</li>
                <li>Envestnet - Product Develpment Engineer (Sep 2020 - Sep 2021)</li>
            </ul>
        )
    },
    {
        title: "Projects",
        id: "projects",
        content: (
            <ul className='list-disc'>
                <li>
                    <a className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800' href='https://github.com/armgp/Bittorrent-Client' target="_blank">
                        Mini BitTorrent
                    </a>
                </li>
                <li>
                    <a className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800' href='https://github.com/armgp/Terminal-File-Explorer' target="_blank">
                        Terminal File Explorer
                    </a>
                </li>
                <li>
                    <a className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800' href='https://github.com/armgp/kaooa_game' target="_blank">
                        Kaooa Board Game
                    </a>
                </li>
                <li>
                    <a className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800' href='https://github.com/armgp/portfolio-gp' target="_blank">
                        My Portfolio Page
                    </a>
                </li>
            </ul>
        )
    }
    
]

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
              <Image src="/images/setup.png" alt="setup image" width={500} height={500} />
              <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                  <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                  <p className='text-gray-500 text-base lg:text-lg'>        
                     {` I'm a dynamic full-stack developer driven by an insatiable passion for crafting
                      remarkable digital experiences. With a continuosly improving skill set 
                      and a knack for rapid learning, I thrive on the ever-evolving challenges of the tech
                      world. My journey in web development has been a relentless pursuit of excellence,
                      fueled by an unquenchable curiosity to explore new horizons. I firmly believe that
                      the most extraordinary products are born through collective genius, and I'm eager to
                      join forces with like-minded individuals to bring visionary ideas to life.
                      Let's connect, innovate, and create something amazing together.`}
                  </p>
                  
                  <div className='flex flex-row flex-wrap mt-8'>
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        Skills
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        Education
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}
                    >
                        Experience
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("projects")}
                        active={tab === "projects"}
                    >
                        Projects
                    </TabButton>                      
                  </div>
                  <div className='mt-8 text-gray-500'>
                      {TAB_DATA.find((t) => t.id === tab).content}
                  </div>
              </div>
        </div>
    </section>
  )
}

export default About