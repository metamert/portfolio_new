import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import img1 from "../assets/project_images/1.png";
import img2 from "../assets/project_images/2.jpeg";
import img3 from "../assets/project_images/3.png";
import img4 from "../assets/project_images/4.png";
import img5 from "../assets/project_images/5.png";
import img6 from "../assets/project_images/6.jpeg";
import img7 from "../assets/project_images/7.png";
import img8 from "../assets/project_images/8.png";
import img9 from "../assets/project_images/9.png";

import metaliga from "../assets/metaliga.png";

import {BsFillPauseFill} from "react-icons/bs"
import {FaPlay} from "react-icons/fa"

let project_array = [
    {
        img: metaliga, project: {
            title: "Metaliga.io",
            url: "https://metaliga.io",
            short_desc: "Metaliga is a blockchain GamiFi project. Still in development",

            tech: "React.js , Solana-api , Near Tools"

        }
    },
    {
        img: img1, project: {
            title: "Ubuntu World",
            url: "",
            short_desc: "Ubuntu world is a video based question-answer survey application",
            long_desc: "Users can prepare surveys in the application, specify conditions , and send more than one form to more than one person via email or phone number.",
            tech: "React.js , Redux , Material-ui , Aws , Node.js , DynomoDB , Firebase cloud , Twillio , Rest api  "

        }
    },
    {
        img: img2, project: {
            title: "Apple Clone",
            url: "",
            short_desc: "I tried to clone the Apple animations on this website",
            long_desc: "I have always loved the Apple ui design and i always inspired by the animations and design Apple uses and I try to use them.",
            tech: "React , Html , css "

        }
    },
    {
        img: img3, project: {
            title: "Resume builder",
            url: "",
            short_desc: "A web application that dynamically converts user inputs into templates",
            long_desc: "After user is logged in , they should They can determine the information is public or private , after this information will then appear in their chosen resume template. ",
            tech: "React , Redux , Html-css , Node.js , PostgreSql , Jwt , Rest api  "

        }
    },
    {
        img: img4, project: {
            title: "debatewar",
            url: "",
            short_desc: "Social media App",
            long_desc: "Social media, which I founded a startup in the past months and have been working on for 3 months. It will be a mixture of Facebook, WhatsApp, Clubhouse, It will be at the forefront with its design and innovation, still in development ",
            tech: "React , Redux, Socket.io , Redis , JWT , Node.js , MongoDb , Graphql  "

        }
    },
    {
        img: img5, project: {
            title: "Imagine Signage",
            url: "https://imaginesignage.com",
            short_desc: "Imagine signage company's e-commerce application ",
            long_desc: "An app where I combine functionality with a professional design. ",
            tech: "React , Redux , Html-css , Firebase  "

        }
    },
    {
        img: img6, project: {
            title: "Magnetic Sand",
            url: "https://magneticsand.net",
            short_desc: "A landing page ",
            long_desc: "I prepared an animated landing page for the necklace promotion of Magnetic Sand brand, all design and coding belongs to me. ",
            tech: "React , Html ,Css "

        }
    },
    {
        img: img7, project: {
            title: "Debatewar",
            url: "",
            short_desc: "Social media App",
            long_desc: "Social media, which I founded a startup in the past months and have been working on for 3 months. It will be a mixture of Facebook, WhatsApp, Clubhouse, It will be at the forefront with its design and innovation, still in development ",
            tech: "React , Redux, Socket.io , Redis , JWT , Node.js , MongoDb , Graphql  "

        }
    },
    {
        img: img8, project: {
            title: "Choose to be fit",
            url: "https://choose-to-be-fit.web.app",
            short_desc: "Online Fitness trainer booking app ",
            long_desc: "Users can create an appointment with the trainer they want to work online or as an inperson according to the criteria and location they are looking for. ",
            tech: "React , Redux, Socket.io , Redis , JWT , Firebase  "

        }
    },
    {
        img: img9, project: {
            title: "Bot systems ",
            url: "",
            short_desc: "Bot software that can be used in trading, crypto, social media areas  ",
            long_desc: "Automatic likes, comments and data collection processes on social media, price monitoring on cryptocurrencies, which can trade according to certain algorithms according to signals given simultaneously with indicators. ",
            tech: "Node.js , puppeteer , Pyhton , Api "

        }
    }


];


const Slide = ({slide_array, info}) => {

    const [state, setState] = React.useState(0);
    const [slider, setSlider] = React.useState({});
    const sortTıme = (a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    };

    function Pouse(props) {
        setState(false)
        slider.slickPause();
    }

    function Play(props) {
        slider.slickNext();
        slider.slickPlay();
        setState(true)

    }

    function f2() {
        'use strict'; // see strict mode
        return this;
    }

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    const swiped = (data) => {
        setState(data);
        console.log("data", data);
    };
    return (
        <div className="static-container " id="project">
            <h1 className="flex text-white text-6xl footer-content title-footer m-1" id="project">
                Other
                <span className="flex flex-row justify-center items-center purple footerworks hoverMe">.experiences()
            </span>
            </h1>

            <Slider
                {...settings}
                ref={slider => (setSlider(slider))}
                autoplaySpeed={2000}
                autoplay
                pauseOnFocus={true}
                pauseOnHover={false}
                slickNext={Play}
                slickPause={Pouse}
                arrows={false}
                afterChange={(d) => swiped(d)}
            >
                {project_array.map((data) => (
                    <Card data={data}/>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;
