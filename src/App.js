import React from "react";
import "./App.css";
import * as ScrollMagic from "scrollmagic";
import About from "../src/pages/About";
import Intro from "../src/pages/Intro";
import { gsap,  CSSPlugin } from "gsap";
 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../src/components/header";
import Slick from "../src/components/slick";
import { TimelineMax, Power3, Power0, Power2, Elastic } from "gsap";

import "./styles/nprogress.scss";
import "./styles/app.scss";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroller: new ScrollMagic.Controller(),
      intro: new TimelineMax(),
      viewport: {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      },

      introTimeline: new TimelineMax(),
      leaveTimeline: new TimelineMax(),
    };
  }
  componentDidMount() {
    gsap.registerPlugin(CSSPlugin)
    /**
     * @desc
     * Intro scene
     */
    this.state.intro
      .addLabel("enter", 1)
      .from(
        ".topAnimate",
        2,
        {
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: "50% 50% -100px",
          ease: Power3.easeOut,
        },
        "enter"
      )
      .from(
        ".title",
        2,
        {
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: "50% 50% -100px",
          ease: Power3.easeOut,
        },
        "enter"
      )
      .from(
        ".leftAnimate",
        2,
        {
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: "50% 50% -100px",
          ease: Power3.easeOut,
        },
        "enter"
      )

      .from(
        ".std",
        1,
        {
          autoAlpha: 0,
          x: -32,
          ease: Power3.easeOut,
        },
        "enter+=1"
      );

    /**
     * @desc
     * Setup Time lines and Scenes
     */
    let duration = this.props.innerHeight;

    /**
     * @desc
     * header background scene
     */
    let tlHeader = new TimelineMax();

    tlHeader.to(".header-bg", 4, {
      autoAlpha: 1,
      ease: Power0.easeNone,
    });

    new ScrollMagic.Scene({
      triggerElement: "#about",
      offset: duration / 4,
      duration: duration,
    })
      .setTween(tlHeader)
      .addTo(this.state.scroller)
      .reverse(true);
  }
  componentWillUnmount() {
    this.state.scroller.destroy();
  }

  updateViewport() {
    this.setState({
      viewport: {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      },
    });
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Header/>
          
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

