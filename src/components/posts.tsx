'use client';

import React, { useState } from 'react';
import Link from "next/link";


export default function Post(props: { etiquetas: any, blogs: any }) {

    const [select, setSelect] = useState('')
    let nopost:number=0

    return (
        <>
            <div className='my-20'>
                <p className='text-start text-lg sm:text-xl lg:text-2xl p-3'>Explora las categorías:</p>
                <div className='flex flex-wrap'>
                    <button onClick={(() => { setSelect('') })} className='p-5 m-3 rounded-lg shadow-sm border border-gris-claro bg-gris-intermedio hover:bg-gris-oscuro text-gris-claro' >Todos</button>
                    {
                        props.etiquetas.docs.map((item: any, i: number) => {
                            const url = item.Titulo.replaceAll(" ", "-")
                            return (
                                <button key={i} onClick={(() => { setSelect(item.Titulo) })} className='p-5 m-3 rounded-lg shadow-sm border border-gris-claro bg-gris-intermedio hover:bg-gris-oscuro text-gris-claro'>{item.Titulo}</button>
                            )
                        })
                    }
                </div>
            </div>

            <div className='my-20'>
                <p className='text-start text-lg sm:text-xl lg:text-2xl p-3'>Posts:</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 py-5'>
                    {
                        props.blogs.docs.map((item: any, i: number) => {

                            if (select === '') {
                                return (
                                    <Link key={i} href={`/blog/${item.Slug}`} className='space-y-3 p-5 m-3 shadow-[-10px_-10px_10px_-10px] shadow-amarillo text-gris-claro' >
                                        <p className='text-start text-lg sm:text-xl lg:text-2xl p-2'>{item.Title}</p>
                                        <p className='text-start p-2'>{item.Description}</p>
                                    </Link>
                                )
                            } else {
                                let corroborar: boolean = false
                                item.etiquetas?.map((item: any) => {
                                    if (select === item.Titulo) {
                                        corroborar = true
                                    }
                                })

                                if (corroborar) {
                                    return (
                                        <Link key={i} href={`/blog/${item.Slug}`} className='space-y-3 p-5 m-3 shadow-[-10px_-10px_10px_-10px] shadow-amarillo text-gris-claro' >
                                            <p className='text-start text-lg sm:text-xl lg:text-2xl p-2'>{item.Title}</p>
                                            <p className='text-start p-2'>{item.Description}</p>
                                        </Link>
                                    )
                                } else {
                                    nopost =nopost + 1
                                    return null
                                }
                            }



                        })
                       } 
                   
                       { (nopost === props.blogs.docs.length) ?

                        <button className='space-y-3 p-5 m-3 shadow-[-10px_-10px_10px_-10px] shadow-amarillo text-gris-claro' >
                            <p className='text-start text-lg sm:text-xl lg:text-2xl p-2'>No se encontraron post con esta etiqueta</p>
                        </button>
                        :
                        <></>
                    }
                    
                </div>
            </div>
        </>
    )
}