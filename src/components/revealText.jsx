import React from "react";
import { TimelineMax, Power3, Power0, Power2, Elastic } from "gsap";
let arr=["react","web","node","sql","jwt","mobile"]

export default function RevealText({currentState,customize}) {
  const [state, setState] = React.useState(0);
 const [intro,setIntro]=React.useState()
  React.useEffect(() => {
    if(customize){
 
    }else{
        setTimeout(() => {
            setState(state + 1);
        }, 2500);
    }
    new TimelineMax().addLabel("enter", 1)
    .from(
      ".topAnimate",
      2,
      {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: "50% 50% -100px",
        ease: Power3.easeOut,
      },
      "enter-=1"
    )

 
  }, [state]);
  React.useEffect(() => {
    if(customize){
        setState(currentState);
    }
 
   

  }, [currentState]);



  return (
    <div className="inline-block">
     {arr.map((item,index)=>state%6===index&&
          <div className="topAnimate func transition " >{item}</div>
        )}
    </div>
  );
}
