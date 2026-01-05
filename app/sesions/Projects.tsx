'use client'
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import { Project, projects } from "../data";
import CardProyect from "../components/ui/CardProyect";
import ProjectNavigation from "../components/ui/ProjectNavigation";
import { motion } from 'framer-motion';
import { fadeIn } from "../../lib/variants";

const Projects = () => {
  const [listActiveProjects, setListActivePorjects] =
    useState<Array<Project>>(projects);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600);
  }, [listActiveProjects]);
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
    return tabs;
  };
  const handleActiveProjects = (value: string) => {
    if (value === "All") {
      setListActivePorjects(projects);
    } else {
      const projectsAux = projects.filter((item) => item.category === value);
      setListActivePorjects(projectsAux);
    }
  };

  return (
    <div
      id="projects" className="w-full py-8 animate-fade-in-up">
      <h1 className="heading">
        What <span className="text-primaryColor">I Do</span>
      </h1>
      <div className="w-full py-20">
        <ProjectNavigation
          tabs={getTabs()}
          onChange={handleActiveProjects}
          styleContainer="flex items-center justify-center pb-10 gap-1 md:gap-3"
          styleTab="relative bg-background block cursor-pointer rounded px-6 py-3 text-base shadow-md outline-0 transition-all duration-500 hover:-rotate-3 hover:bg-primaryColor hover:text-white"
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {listActiveProjects.map((project) => {
            return (


              <CardProyect key={project.id} name={project.title} description={project.des} image={project.img} load={load} />

            );
          })}
        </div>
      </div>
    </div>
  )
};

export default Projects;
