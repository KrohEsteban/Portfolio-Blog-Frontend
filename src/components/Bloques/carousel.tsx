'use client'

import Image from "next/image";
import { useState } from "react";



export default function Carousel (props:{children:any}):any {

    const [foto, setFoto] = useState(0)
    let ultimo:number

    if (!props.children) {
  
        return null;
    
      }
     
    return (


<div id="default-carousel" className="my-20 relative w-full sm:w-[550px] lg:w-[800px] m-auto" data-carousel="slide">
     {/* <!-- Carousel wrapper --> */}
    <div className="relative overflow-hidden rounded-lg h-full">
    {/* <!-- Item  --> */}
        
                    <div className=" duration-700 ease-in-out" data-carousel-item> 
                        <Image src={props.children[foto].Image.webp.url}  alt={props.children[foto].Image.Alt }
                            width={800}
                            height={600}
                            className='object-cover m-auto'
                        />
                        {/* <img src={props.children[foto].Image.webp.url} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                    </div>
          
        
    </div>
     {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex-row  -translate-x-1/2 bottom-5 left-1/2 text-center space-y-2">
        <p className="p-1 text-white text-center text-lg sm:text-xl lg:text-2xl" style={{textShadow:'#000 1px 1px'}}>{props.children[foto].titulo} </p>
        <p className="p-1 text-white"  style={{textShadow:'#000 1px 1px'}}>{props.children[foto].subtitulo} </p>
        <div className="pt-6 space-x-3 flex justify-center">
            {
            props.children.map((node:any, i:number) => {
                ultimo=i

                return (
                    <button onClick={(()=>{setFoto(i) })} key={i} type="button" className="w-3 h-3 rounded-full bg-gris-claro border border-gris-oscuro" aria-current="false" aria-label={"Slide"+i} data-carousel-slide-to={i}></button>
                )
            })
        }
        </div>
    
    </div>
        {/* <!-- Slider controls --> */}
    <button type="button" onClick={(()=>{(foto===0)?setFoto(ultimo):setFoto(foto-1)})} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" onClick={(()=>{(foto===ultimo)?setFoto(0):setFoto(foto+1)})}  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

)}