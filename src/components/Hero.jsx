import { useGSAP } from '@gsap/react';
import gsap, { Back } from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { heroImg1, heroImg2, heroImg3, heroImg4, heroImg5 } from "../lib/index";

const Hero = () => {

    const latestProductsButtonRef = useRef(null);
    const latestProductsRef = useRef(null);
    const closeLatestProductsRef = useRef(null);

    useGSAP(() => {

        const heroImgs = gsap.utils.toArray(".motiv")

        gsap.set(heroImgs[0], {autoAlpha: 1})

        const crossFade = () => {
            gsap.timeline()
            .to(heroImgs[0], {autoAlpha: 0, duration: 0.3})
            .to(heroImgs[1], {autoAlpha: 1, duration: 0.3}, 0)

            heroImgs.push(heroImgs.shift())

            gsap.delayedCall(1, crossFade);
        }

        gsap.delayedCall(0, crossFade)

        const tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})

        tl.paused(true);
        tl.to(latestProductsRef?.current, {clipPath: 'circle(100% at 50%)'})

        latestProductsButtonRef?.current.addEventListener("click", () => {
            tl.play()
        })

        closeLatestProductsRef?.current.addEventListener("click", () => {
            tl.reverse(.3)
        })

    }, [])

  return (
    <section className="w-full h-[calc(100vh-150px)] flex">
        <div className="w-[45%] h-full flex flex-col justify-end text-6xl tracking-tight pb-10 relative">
            <p className="font-[900]"><span className='stretch'>POPCUL</span><span className="font-[200]">™</span><span className="font-[200]"> —</span><span className="font-[200]"> Power Of</span></p>
            <p className="font-[200]">Passion Creates Unstoppable Legends</p>
            <div className='w-full h-fit mt-12 flex justify-start gap-x-10 text-[15px] font-[50] tracking-tight text-justify'>
                <div className='w-[41%] h-full'>
                    <p>
                        Steeped in intentionality, the office employs a dialectical approach to design, navigating the space between communities and individuals, form and function, virtual and physical.
                    </p>
                </div>
                <div className='w-[41%] h-full'>
                    <p>
                        Steeped in intentionality, the office employs a dialectical approach to design, navigating the space between communities and individuals, form and function, virtual and physical.
                    </p>
                </div>
            </div>
            <Link to='/products' className="w-fit flex items-center gap-x-3 mt-20 cursor-pointer hover:opacity-75 active:opacity-40 transition-all">
                <p className="text-3xl font-[400]">SHOP ALL PRODUCTS</p>
                <span className='w-2 h-2 bg-black rounded-full pulse' />
            </Link>
        </div>
        <div className="w-[55%] h-full flex items-center justify-center gap-y-6 relative">
            <div ref={latestProductsButtonRef} className="w-[650px] h-[650px] rounded-full bg-white overflow-hidden relative z-50 cursor-pointer flex items-center justify-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[5] motiv" src={heroImg1} alt="Product 1" />
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[4] motiv" src={heroImg4} alt="Product 2"/>
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[3] motiv" src={heroImg1} alt="Product 3"/>
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[2] motiv" src={heroImg4} alt="Product 4"/>
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[1] motiv" src={heroImg5} alt="Product 5"/>
            </div>
        </div>
        <div ref={latestProductsRef} className="overlay fixed bg-white top-0 left-0 w-[100vw] h-[100vh] z-[9999]">
            <div ref={closeLatestProductsRef} className='text-black font-5xl'>Soon this page will be filled with products. I am still a Work in Progress! Click me to go back ;)</div>
        </div>
    </section>
  )
}

export default Hero;
