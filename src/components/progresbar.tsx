'use client'
import React, { Fragment } from 'react'
import { useInView } from 'react-intersection-observer';
                                                                                                                                                                                                                                        
export default function Progresbar(props:{stack:string, progress:number}) {

    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (
        <div key={props.stack} className='space-y-4'>
        <h4 className='font-bold'>{props.stack}</h4>
        {inView ? (
                <div ref={ref} className="w-full bg-gris-oscuro border-2 border-gris-intermedio rounded-full h-4">
                    <div className='bg-gris-intermedio h-3 rounded-full transition-all delay-500 duration-1000' style={{'width': props.progress+"%"}}></div>
                </div>
          ) : ( 
                <div ref={ref} className="w-full bg-gris-intermedio border-2 border-gris-intermedio rounded-full h-4">
                    <div className="bg-gris-intermedio h-3 rounded-full w-[0%]" /*style="width: $(progress)%"*/></div>
                </div>           
          )}
    </div>
    )
}

