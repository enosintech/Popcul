import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { boldArrowIcon, heroImg1, heroImg2, heroImg3, heroImg4, heroImg5 } from "../lib/index";

const Hero = () => {

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

    }, [])

  return (
    <section className="w-full h-[calc(100vh-150px)] flex">
        <div className="w-[45%] h-full flex flex-col justify-end text-6xl tracking-tight pb-10 relative">
            <p className="font-[900]">POPCUL<span className="font-[200]">™</span><span className="font-[200]"> —</span><span className="font-[200]"> Power of Passion</span></p>
            <p className="font-[200]">Creates Unstoppable Legends</p>
            <div className='w-full h-fit mt-20 flex justify-between text-[14px] font-[100] tracking-tight text-justify'>
                <div className='w-[45%] h-full'>
                    <p>
                        Steeped in intentionality, the office employs a dialectical approach to design, navigating the space between communities and individuals, form and function, virtual and physical.
                    </p>
                </div>
                <div className='w-[47%] h-full px-3'>
                    <p>
                        Steeped in intentionality, the office employs a dialectical approach to design, navigating the space between communities and individuals, form and function, virtual and physical.
                    </p>
                </div>
            </div>
            <div className="w-fit flex items-center gap-x-2 mt-20 cursor-pointer hover:opacity-75 active:opacity-40 transition-all">
                <p className="text-3xl font-[400]">SHOP ALL PRODUCTS</p>
                <img src={boldArrowIcon} className="size-7 -rotate-45"/>
            </div>
        </div>
        <div className="w-[55%] h-full flex items-center justify-center gap-y-6 relative">
            <div className="w-[700px] h-[700px] rounded-full shadow bg-white overflow-hidden relative cursor-pointer flex items-center justify-center">
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[5] motiv" src={heroImg1} alt="Product 1" />
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[4] motiv" src={heroImg2} alt="Product 2"/>
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[3] motiv" src={heroImg1} alt="Product 3"/>
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[2] motiv" src={heroImg4} alt="Product 4"/>
                <img className="w-[70%] [70%] object-contain flex items-center justify-center bg-white absolute z-[1] motiv" src={heroImg5} alt="Product 5"/>
            </div>
        </div>
    </section>
  )
}

export default Hero;
