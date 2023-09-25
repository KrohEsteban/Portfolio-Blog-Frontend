'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
                                                                                                                                                                                                                                        
export default function Progresbar(props:{stack:string, progress:number}):any {

    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (
        <div key={props.stack} className='space-y-4'>
        <p className='font-bold text-center text-xl sm:text-2xl lg:text-3xl'>{props.stack}</p>
        {inView ? (
                <div ref={ref} className="w-full bg-gris-intermedio border-2 border-gris-intermedio rounded-full h-4">
                    <div className='bg-amarillo h-3 rounded-full transition-all delay-500 duration-1000' style={{'width': props.progress+"%"}}></div>
                </div>
          ) : ( 
                <div ref={ref} className="w-full bg-gris-intermedio border-2 border-gris-intermedio rounded-full h-4">
                    <div className="bg-amarillo h-3 rounded-full w-[0%]" /*style="width: $(progress)%"*/></div>
                </div>           
          )}
    </div>
    )
}

