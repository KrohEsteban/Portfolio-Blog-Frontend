'use client'
import React from 'react';
import escapeHTML from 'escape-html'


  
export default function Serializar (props:{children:any}):any {
  
  
    let style=''

    //le suma los estilos en Tailwind dependiendo de lo que traiga
    if (props.children.blod) {
        style = style + ' ' + 'font-bold'
      }

      if (props.children.italic) {
        style = style + ' ' + 'italic'
      }

      if (props.children.underline) {
        style = style + ' ' + 'underline'
      }
      if (props.children.strikethrough) {
        style = style + ' ' + 'line-through'
      }



    //mira es un pedaso de codigo que tiene que tener la etiqueta <code> para evitar la traduccion y demas
       if (props.children.code) {
        return (
          <span className={style}>
            <code className="px-2"> <span dangerouslySetInnerHTML={{ __html: escapeHTML(props.children.text) }} /> </code>
          </span>)

  
    }else{

      return (
        <span className={style}>
          {<span dangerouslySetInnerHTML={{ __html: escapeHTML(props.children.text) }} />}
        </span>)
    }
  
  }

