'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Serializar from './serializar';


  
export default function RichTextModal (props:{children:Array<Object>}):any {
  
  if (!props.children) {
  
    return null;

  }
 
return props.children.map((node:any, i:number) => {

  
  // null si node no trae nada
  if (!node) {
  
    return null;

  }

  // si tiene solo texto, es la ultima parte del objeto ya paso por los h1... muestra el texto con el estilo correspondiente
  if (typeof node.text !== 'undefined' ){
    //if (Text.isText(node)) {
  
    return(
      <Fragment key={i}>
        <Serializar children={node} />
      </Fragment>
      
    )
  
  }


  // revisa los typos que hay para ver que renderisar

switch (node.type) {
    
    case 'h1': {
      return (
        <h1 key={i} className='p-3'>
          <RichTextModal children={node.children} />
        </h1>
      )
    }

    case 'h2': {
      return (
        <h2 key={i} className='p-3'>
         <RichTextModal children={node.children} />
        </h2>
      )
    }

    case 'h3': {
      return (
        <h3 key={i} className='p-3'>
        <RichTextModal children={node.children} />
        </h3>
      )
    }

    case 'h4': {
      return (
        <h4  key={i} className='p-3'>
         <RichTextModal children={node.children} />
        </h4>
      )
    }

    case 'h5': {
      return (
        <h5 key={i} className='p-3'>
         <RichTextModal children={node.children} />
        </h5>
      )
    }

    case 'h6': {
      return (
        <h6 key={i} className='p-3'>
         <RichTextModal children={node.children} />
        </h6>
      )
    }

    case 'blockquote': {
      return (
        <h4 key={i} className=' p-5 m-auto text-center font-kaushanscript '>
        <RichTextModal children={node.children} />
        </h4>
      )
    }

    case 'link': {
      if(node.linkType==='internal'){
        return (
          <Link key={i} href={(typeof node.doc?.value?.Slug !== 'undefined')?node.doc?.value?.Slug:((typeof node.doc?.value?.Url !== 'undefined')?node.doc?.value?.Url:'#')}>
            <RichTextModal children={node.children} />
          </Link>
        )
      }else{
      
        return (
          <Link key={i} href={(typeof node.url !== 'undefined')?node.url:'#'}>
          <RichTextModal children={node.children} />
          </Link>
        )
      }
      
    }


    case 'ol': {
      return (
        <ol key={i} className='list-decimal pl-8 py-5'>
         <RichTextModal children={node.children} />
        </ol>
      )
    }

    case 'ul': {
      return (
        <ul key={i} className='list-disc pl-8 py-5'>
       <RichTextModal children={node.children} />
        </ul>
      )
    }

    case 'li': {
      return (
        <li key={i} >
       <RichTextModal children={node.children} />
        </li>
      )
    }

    default:
      return (
        <p key={i}>
       <RichTextModal children={node.children} />
        </p> 
      )


  }

});
}