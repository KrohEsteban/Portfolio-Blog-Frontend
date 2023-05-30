'use client';

import React, { useState } from 'react';
import Link from "next/link";
import escapeHTML from 'escape-html';

export default function Post(props: { etiquetas: any, blogs: any }) {

    const [select, setSelect] = useState('')
    let nopost:number=0

    return (
        <>
            <div className='my-20'>
                <h5 className='text-start p-3'>Explora las categorías:</h5>
                <div className='flex flex-wrap'>
                    <button onClick={(() => { setSelect('') })} className='p-5 m-3 rounded-lg shadow-sm border border-gris-claro bg-gris-intermedio hover:bg-gris-oscuro text-gris-claro' >Todos</button>
                    {
                        props.etiquetas.docs.map((item: any, i: number) => {
                            const url = item.Titulo.replaceAll(" ", "-")
                            return (
                                <button onClick={(() => { setSelect(item.Titulo) })} key={i} className='p-5 m-3 rounded-lg shadow-sm border border-gris-claro bg-gris-intermedio hover:bg-gris-oscuro text-gris-claro' >{item.Titulo}</button>
                            )
                        })
                    }
                </div>
            </div>


            <div className='my-20'>
                <h5 className='text-start p-3'>Posts:</h5>
                <div className='grid grid-cols-1 sm:grid-cols-2 py-5'>
                    {
                        props.blogs.docs.map((item: any, i: number) => {

                            if (select === '') {
                                return (
                                    <Link key={i} href={`/blog/${item.Slug}`} className='space-ym-3 p-5 m-3 border-l-2 border-naranja text-gris-claro' >
                                        <h4 className='text-start'>{item.Title}</h4>
                                        <p className='text-start'>{item.Description}</p>
                                    </Link>
                                )
                            } else {
                                let corroborar: boolean = false
                                item.etiquetas.map((item: any) => {
                                    if (select === item.Titulo) {
                                        corroborar = true
                                    }
                                })

                                if (corroborar) {
                                    return (
                                        <Link key={i} href={`/blog/${item.Slug}`} className='space-y-3 p-5 m-3 border-l-2 border-naranja text-gris-claro' >
                                            <h4 className='text-start'>{item.Title}</h4>
                                            <p className='text-start'>{item.Description}</p>
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

                        <button className='space-y-3 p-5 m-3 border-l-2 border-naranja text-gris-claro' >
                            <p className='text-start'>No se encontraron post con esta etiqueta</p>
                        </button>
                        :
                        <></>
                    }
                    
                </div>
            </div>
        </>
    )
}