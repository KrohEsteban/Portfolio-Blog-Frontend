'use client'
import React from 'react'
import Image from 'next/image';
import Svgestebankroh from './svgestebankroh';
import profile from '/public/perfil.webp'
   

export default function Perfil(contactos:any) {

    return (
        <>
         <Image src={profile} alt='Esteban Kroh, programador web, foto de perfil.'
              priority={true}
              width={200}
              height={200}
              className='object-cover w-auto h-auto rounded-[50%] animacionopacidad m-auto'
            />
            
         
          <h1 className='text-amarillo' aria-label='Esteban Kroh'>
          
            
            <Svgestebankroh/>


          </h1>

          <div className='m-auto w-full space-y-8'>

            <h2 >Programador web</h2>
            <h3>Contacto: </h3>
            <ul className='flex justify-center space-x-6'>
              {
              contactos.children.docs?.map((item:{Nombre:string, Url:string, Svg:string})=>{
              return<li className='w-10 sm:w-11 md:w-12' key={item.Nombre}>
                    <a className='stroke-none text-gris-claro p-4 m-auto' href={item.Url} target="_blank" rel="noopener noreferrer" aria-label={item.Nombre}>{<div dangerouslySetInnerHTML={{ __html: item.Svg }}/>}</a>
                </li> 
                })
              }
            </ul>
          </div>
    </>
    )

    
}

