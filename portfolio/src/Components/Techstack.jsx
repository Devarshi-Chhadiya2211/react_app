import React, { useState } from "react";
import "../assets/techstack.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaChrome } from "react-icons/fa";
import { SiSublimetext } from "react-icons/si";
import { SiWebstorm } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPrettier } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { BsRegex } from "react-icons/bs";
import { FaCloudflare } from "react-icons/fa6";
import { SiMongoose } from "react-icons/si";

const IconComponent = ({ icon: Icon, name, color, hoverColor }) => {
  return (
    <div className="icon-wrapper">
      <Icon className="icon" />
      <span className="icon-name">{name}</span>{" "}
    </div>
  );
};

const WorkExperience = [
  {
    id: 1,
    title: "Programming Languages , Frameworks & Libraries",
    company: "Front-End",
    yearsActive: "html",
    information: [
      <IconComponent
        icon={TiHtml5}
        name="HTML 5"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaCss3Alt}
        name="css 3"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaJs}
        name="Java-Script"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={DiJqueryLogo}
        name="Jquery"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaBootstrap}
        name="Bootstrap"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={RiTailwindCssFill}
        name="Tailwind css"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaReact}
        name="React"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiVite}
        name="vite"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiReactrouter}
        name="React-Router"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiNpm}
        name="NPM"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiMui}
        name="Material-UI"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={TbJson}
        name="JSON"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiRedux}
        name="Redux"
        color="white"
        hoverColor="#21a1f1"
      />,
    ],
  },
  {
    id: 2,
    title: "Back-End Tech.",
    company: "Back-End",
    yearsActive: "May 2017 - December 2021",
    information: [
      <IconComponent
        icon={SiFirebase}
        name="Fire-Base"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaNode}
        name="Node"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiMongodb}
        name="Mongo DB"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiExpress}
        name="Express"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiPassport}
        name="Passport Js"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiAuth0}
        name="Auth"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaCloudflare}
        name="Cloud Flare"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiMongoose}
        name="Mongoose"
        color="white"
        hoverColor="#21a1f1"
      />,
    ],
  },
  {
    id: 3,
    title: "Tool Stack",
    company: "Tools",
    yearsActive: "February 2016 - April 2017",
    information: [
      <IconComponent
        icon={VscVscode}
        name="Vs Code"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiPostman}
        name="Postman"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaChrome}
        name="Chrome"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiSublimetext}
        name="Sublime"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiWebstorm}
        name="Webstrom"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FiCodesandbox}
        name="Code Sandbox"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaGitAlt}
        name="Git"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaGithub}
        name="Github"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiNetlify}
        name="Netlify"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiVercel}
        name="Vercel"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiRender}
        name="Render"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={FaWindows}
        name="Windows"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={SiPrettier}
        name="Prettier"
        color="white"
        hoverColor="#21a1f1"
      />,
      <IconComponent
        icon={BsRegex}
        name="Regex"
        color="white"
        hoverColor="#21a1f1"
      />,
    ],
  },
];

const Techstack = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Tech Stack</h2>

      <div className="resume__container">
      <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <TabList className="tab__list">
            {WorkExperience.map((experience, index) => {
              const { id, company } = experience;
              return (
                <Tab className="tab" key={`company-${id}`}>
                  <Button>{company}</Button>
                </Tab>
              );
            })}
          </TabList>

          {WorkExperience.map((experience) => {
            const { id, company, yearsActive, title, information } = experience;
            return (
              <TabPanel className="tab__panel" key={`panel-${id}`}>
                <h2 className="tab__panel-title">{title}</h2>
                <ul className="tab__panel-list">
                  <div className="icon-container">
                    {information.map((info, index) => {
                      return <i key={`info-${index}`}>{info}</i>;
                    })}
                  </div>
                </ul>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Techstack;