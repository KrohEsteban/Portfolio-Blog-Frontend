'use client'
import React, { useState } from 'react';
import Link from "next/link";



export default function Navigation(props: { contactos: any}) {

    const menuescondido: boolean = false
    const menuvisible: boolean = true
    


    const [menu, setMenu] = useState(menuescondido);
    const [entro, setEntro] = useState(false); // previene la primera ves el menu abierto

    if (typeof window !== "undefined") {
        window.addEventListener("scroll",()=>{
        
        if( (menu === menuvisible)){
            setMenu(menuescondido)
        }
            
        })
      }

    

    return (
        <>
            <div className='py-2 bg-gris-intermedio' >
                <nav className='md:flex md:justify-around relative' >
                    <div className='flex items-center justify-around'>
                        <Link className="text-4xl text-inherit" href='/'><span className='font-dancingscript'>Esteban Kroh</span></Link>
                        <button className="flex justify-center h-10 w-10 md:hidden aria-expanded:toggle-btn" aria-label="Menu"
                            type="button" data-collapse-toggle="menu" aria-controls="menu" aria-expanded={menu}
                            onClick={() => {
                                setEntro(true),
                                (menu === menuescondido) ? (

                                    setMenu(menuvisible))
                                    : setMenu(menuescondido)
                            }}
                            
                        >
                            <div className=" absolute top-6 -mt-0.5 h-0.5 w-6 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
                            </div>
                        </button>
                    </div>


                    <div className={entro ?
                        (menu ?
                            "z-50 justify-center w-full md:h-auto bg-gris-intermedio bg-opacity-60 absolute top-14 md:w-auto md:static flex animate-open-menu origin-top"
                            :
                            "z-50 justify-center w-full md:h-auto bg-gris-intermedio bg-opacity-60 absolute top-14 md:w-auto md:static flex animate-close-menu origin-top md:animate-open-menu "
                        ) :
                        "hidden md:flex"} id="menu" > 
                       
                        <ul className='w-3/4 md:w-auto bg-gris-intermedio bg-opacity-80 md:bg-inherit md:flex text-base md:text-gray-400 space-y-2 space-x-0 md:space-y-0 md:space-x-2 '>
                            <li ><Link href='/' className="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit" onClick={() => { (menu === menuescondido) ? setMenu(menuvisible) : setMenu(menuescondido) }}>Inicio</Link></li>

                            <li ><Link href='/blog' className="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit" onClick={() => { (menu === menuescondido) ? setMenu(menuvisible) : setMenu(menuescondido) }}>Blog</Link></li>

                            <li ><Link href='/aptitudes' className="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit" onClick={() => { (menu === menuescondido) ? setMenu(menuvisible) : setMenu(menuescondido) }}>Aptitudes</Link></li>

                            <li ><Link href='/proyectos' className="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit" onClick={() => { (menu === menuescondido) ? setMenu(menuvisible) : setMenu(menuescondido) }}>Proyectos</Link></li>

                            <li ><Link href='/hobby' className="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:p-4 text-inherit" onClick={() => { (menu === menuescondido) ? setMenu(menuvisible) : setMenu(menuescondido) }}>Hobby</Link></li>
                            <ul className='flex justify-center space-x-6 md:hidden py-10'>
                                {
                                    props.contactos.docs.map((item: { Nombre: string, Url: string, Svg: string }) => {
                                        return <li className='w-10 sm:w-11 md:w-12' key={item.Nombre}>
                                            <a className='stroke-none text-amarillo p-4 m-auto' href={item.Url} target="_blank" rel="noopener noreferrer" aria-label={item.Nombre}>{<div dangerouslySetInnerHTML={{ __html: item.Svg }} />}</a>
                                        </li>
                                    })
                                }
                            </ul></ul>






                    </div>
                </nav>
            </div>

        </>
    )

}