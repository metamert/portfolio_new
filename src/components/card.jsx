import React from "react";
import Mockup from "../assets/mockup.png";
import MockupInside from "../assets/imagine1.png";
import MockupBrowser from "../assets/browser.png";
import ImagineWBrowser from "../assets/imagine_browser.png";
import RevealText from "./revealText";

export default function card({ data }) {
  const project = data.project;

  return [
    <div className="projectCard">
      <img src={data.img} className="browser" />
    </div>,

    <div className="pl1">
      <h1 class="mtb1">
        <span class="iu ">
          {"<"}
          <span>
            {project.title}
            {"/>"}
          </span>
        </span>
      </h1>
      <p className="purple mtb1">{project.short_desc}</p>
      <p className="-gray" >
        / * {project.long_desc} * /
        <br />
      </p>
      <p className="purple mtb1">Used technologies</p>
      <p className="-gray " style={{marginBottom:20}}>
        / * {project.tech}
        * /
        <br />
      </p>

      {project.url && (
        <a className="link" style={{ paddingTop: 20 }} href={project.url}>
          {project.url}
        </a>
      )}
    </div>,
  ];
}

/**
 *     <img src={Mockup} className="mockup" /> 
           
            <img src={MockupInside} className="mockupInside" />
 */
