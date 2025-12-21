import React, { use } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef , useState } from 'react';

gsap.registerPlugin(useGSAP); 
// register the hook to avoid React version discrepancies 

const App = () => {

  // const gsapRef = useRef()
  // useGSAP with useRef
  // useGSAP(()=>{
  //   gsap.to(gsapRef.current,{
  //     x:500,
  //     duration:2,
  //     delay:1,
  //     rotate:720,
  //   })
  // })
  // simple use gsap
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:500,
  //     duration:2,
  //     delay:1,
  //   })
  // })

  //eg#1
  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     y:300,
  //     opacity:0,
  //     rotate:360,
  //     duration:2,
  //     delay:1,
  //   })
  // })
  // is trha ap dekhyn to dono box animate ho ry hyn but agr ap kisi ak ko animate krwana chahty hyn to ap kya kryn gy ap id dein gy kisi ak ko r us id py animation lagyn but thats lengthy to tb is scenario me hm useRef use krty hyn 

  // const boxRef = useRef();

  // useGSAP(()=>{
  //   gsap.from(boxRef.current,{
  //     y:300,
  //     opacity:0,
  //     rotate:360,
  //     duration:2,
  //     delay:1,
  //   })
  // })
  // ab is example me dekhyn srf wohi box animate ho rhi ha jis ka ref lia hai ya dia hai whatever using useRef.


  //now we'll see another concept same as above called scope********************************* eg#2
  // const containerRef = useRef();
  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     rotate:360,
  //     scale:0,
  //     duration:1,
  //     opacity:0,
  //     delay:1,
  //   })
  // },{scope: containerRef}) // to .container k andr wala jo .box hai srf us py animation chaly gi.. aur agr hm yahan .kuch likhty to usk andr walay .box py animation lagta ..
  // one more thing upr scope me hm : .container dia tha agr hm chahyn to useRef b de skty lets see how it works  note: containerRef.current nai likhna jesy hm upr krty ay srf containerRef likhna hai


  // hm isi concept se related aur b kam kr skty hyn jesy k hm useeffect()mein krty thy na k kisi ak particular chz k change hony pr effect prhna chaiye wo b kr skty .. lets seee how it works commenting out everything ..

  // const [circle, setcircle] = useState(0)
  
  let random = gsap.utils.random(-500,500,10);
  
  // useGSAP(()=>{
  //   gsap.to(".circle",{
  //     x:circle,
  //     duration:0.5,
  //   })
  // },[circle]) // ye dependency array me hm ny circle likh dia same as useEffect.. k ye jo circle nam ki jo value hai jb jb wo change ho gi tb tb ye animation firse chanly ga
  

  // lets see another example
  // const [xValue, setXValue] = useState(0)
  // const [yValue, setYValue] = useState(0)
  // const [roti, setroti] = useState(0)

  // let random2 = gsap.utils.random(-500,500,10);
  // let random3 = gsap.utils.random(-360,360,30);

  // const boxRef = useRef();

  // useGSAP(()=>{
  //   gsap.to(boxRef.current,{
  //     x:xValue,
  //     y:yValue,
  //     rotate:roti,
  //     duration:1,
  //   })
  // },{scope:"main", dependencies:[xValue,yValue,roti]}) // yahan ap ny dependencies array b bta di aur scope b bta dia agr dependencies array na bataya to animation nai chaly ga pyary



  // now comes another concept contextsafe************************************ eg#3
  //to abhi tk hm sara kaam useGSAP ki madad se kr ry thy aur ab hm usk bagair kryn gy aur problem b ak dekhyn gy jo hm face krty if we dont use useGSAP()

  const boxRef = useRef();

 const {contextSafe} = useGSAP();
  
  const rotateBox = contextSafe(()=>{
    gsap.fromTo(boxRef.current,{ rotate: 0 },{
      rotate:360,
      duration:1,
    })
  })

// all the explanation in the notes about contextSafe


  return (
    // <main>
    //   <div ref={gsapRef} className="box">
    //   </div>
    // </main>
    // 
    
    
    // <main>
    //   <div ref={containerRef} className="container">
    //     <div className="circle"></div>
    //     <div ref={boxRef} className="box"></div>
    //   </div>
    //   <div className="kuch">
    //     <div className="circle"></div>
    //     <div className="box"></div>
    //   </div>
    // </main>
    
    // <main>
      /* <button  > Animate</button> */
      // {/* <div ref={boxRef} className="box"></div> */}
      // {/* // just replace .box with a image of fly that looks pretty real ... and place onclick function on img and remoc=ve the button completely */}
      // {/* <img onClick={()=>{
    //     setXValue(random2);
    //     setYValue(random);
    //     setroti(random3);
    //     console.log(xValue,yValue,roti);
    //   }} ref={boxRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Y8ah3vtz9DDfHC6TozRLE7Ps5Khylgdsvw&s" alt="" />
    //   <div className="circle"></div> */}
    // {/* </main> */}


    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">Box</div>
    </main>
  )
}

export default App
