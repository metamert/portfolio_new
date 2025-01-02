import React from "react";
import RevealText from "../components/revealText"
import IconPad from "../components/ıconsPad"
import Lottie from "react-lottie";
import animationData from "../assets/lottie/wave2.json";
import Slick from "../components/slick"
import {Link} from "react-router-dom"
import BluedotImage from "../assets/BluedotImage.avif"
import Nooli1 from "../assets/Nooli1.jpg"
import Nooli2 from "../assets/Nooli2.jpg"
import Upwork1 from "../assets/upwork-top-rated.png"
import Upwork2 from "../assets/upwork-review.png"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
export default function Intro() {
    const [state, setState] = React.useState(0);
    const [timer, setTimer] = React.useState(false)
    React.useEffect(() => {
        setTimeout(() => {
            setState(state + 1);
        }, 2000);
    }, [state]);

    React.useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 2400);
    }, [])

    return (
        <div id="intro" className="wrapper ">

            <div className="relative">

                <div class="spine">

                    {timer && <Lottie
                        options={defaultOptions}

                        style={{
                            position: "absolute",
                            transition: "opacity 2s",
                            width: 600,
                            height: 600,
                            top: -302,
                            left: -300,
                            zIndex: -55,
                        }}
                    />}

                </div>
                <div class="spine-target">
                    <div class="circle relative">

                    </div>
                    <div class="pulse"></div>
                </div>
            </div>
            <section class="scene-intro " id="intro">
                <div className="static-container">
                    <h1 class="title">
                        <span class="iu">I</span>
                        <span class="func">.am</span>{"<"} a <span
                        className="inline-block"><RevealText/>  dev.{"/>"} </span>
                    </h1>

                    <div className="std">
                        <p className="-purple">Orkun Mert Yiğit</p>
                        <p className="-gray">
                            Fullstack web/mobile developer.
                        </p>
                    </div>

                    <IconPad currentState={state}></IconPad>
                    <div className="row  leftAnimate zin hoverMe">
                        <Link to="/about" className="zin">
                            <div role="button" className="buttonApp hoverMe">About.me()</div>
                        </Link>
                    </div>


                    <h1 className="flex mt-24 text-white text-3xl footer-content title-footer m-1" id="project">
                        Bluedot
                    </h1>

                    <div className={"mt-4"}>
                        <img width={500} src={BluedotImage} alt={"Bluedot"}/>
                    </div>

                    <p className="mt-6">
                        The <span className="purple  mr-2">
                            <a
                                href="https://www.bluedot.co/"
                                className="text-bold ml-2 underline" target="_blank" rel="noopener noreferrer">
                               Bluedot
                            </a>
                        </span> platform, an advanced electric fleet management solution, is a project to which I have
                        dedicated the last 2.5 years as a full-stack developer, taking full responsibility for the
                        front-end development. This platform enables the management of Tesla and all other electric
                        vehicle fleets and includes robust features such as reimbursement handling, geofence region
                        management, invoicing, and an integrated inbox system. Through this experience, I gained
                        invaluable knowledge and became deeply immersed in the electric vehicle sector.
                    </p>


                    <h1 className="flex mt-24 text-white text-3xl footer-content title-footer m-1" id="project">
                        Nooli
                    </h1>

                    <div className={"flex row mt-4"}>
                        <img width={200} src={Nooli1} alt={"Nooli"} className={"mr-2"}/>
                        <img width={200} src={Nooli2} alt={"Nooli"}/>
                    </div>

                    <p className="mt-6">
                        The Nooli was a project I will never forget—a unique experience that allowed me to gain valuable
                        hands-on learning as a junior developer alongside a small team of seasoned professionals with
                        over 20 years of experience in Australia, including former Deloitte partners. The application,
                        available on both iOS and Android, was designed to simplify household tasks by integrating and
                        summarizing emails and agendas for users.
                    </p>


                    <div className="leftAnimate mt-12">
                        <p className="purple mt-3"> A reference from
                            <a
                                href="https://www.linkedin.com/in/orkun-mert-ygt/details/recommendations/"
                                className="text-bold ml-2 underline" target="_blank" rel="noopener noreferrer">
                                Dean Robertson.
                            </a>
                        </p>
                        <p className="text-white mt-1 -gray">
                            Retired Partner from Deloitte and founder of the Nooli.</p>
                        <p className="mtb1">
                            "Hi friends, if you need a hard-working, coachable and friendly freelance React/web/app
                            developer then please get in touch with Orkun. He's been instrumental in the progress
                            we've
                            made on Nooli in recent months, willing to put in the effort and long hours required for
                            startups and always with a smile. "
                        </p>
                    </div>


                    <h1 className="flex mt-24 text-white text-3xl footer-content title-footer m-1" id="project">
                        Metaliga
                    </h1>

                    <div className={"mt-4"}>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/Gdx6FRw1Um8?si=ito3rLzFe3YoMDWK"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <p className="mt-4">
                        The
                        <span className="purple  mr-2">
                            <a
                                href="https://metaliga-beta.vercel.app/"
                                className="text-bold ml-2 underline" target="_blank" rel="noopener noreferrer">
                                Metaliga
                            </a>
                        </span>
                        page was an experience show that a friend and I developed in the early years of my software
                        development career. I recommend giving it a try.
                    </p>


                    <h1 className="flex mt-24 text-white text-3xl footer-content title-footer m-1" id="project">
                        Upwork
                    </h1>


                    <div className={"flex row mt-4"}>
                        <img width={400} src={Upwork1} alt={"Upwork"} className={"mr-2"}/>
                        <img width={300} src={Upwork2} alt={"Upwork"}/>
                    </div>


                    <p className="mt-4">
                        Upwork was one of the starting points of my professional journey, where I worked as a freelancer to bring numerous clients’ applications to life. I consistently received positive feedback from my clients regarding my team adaptability, communication skills, ability to quickly learn, and overall compatibility. This often led to long-term collaborations and job opportunities.
                    </p>


                </div>

            </section>

            <Slick/>
        </div>
    );
}
