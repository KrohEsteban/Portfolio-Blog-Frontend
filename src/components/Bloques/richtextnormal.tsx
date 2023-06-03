'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Serializar from './serializar';


  
export default function RichTextNormal (props:{children:any}):any {
  
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
        <Serializar>
        {node}
        </Serializar>
      </Fragment>
      
    )
  
  }


  // revisa los typos que hay para ver que renderisar

switch (node.type) {
    
    case 'h1': {
      return (
        <h1 key={i} className='py-20'>
          <RichTextNormal>
             {node.children}
          </RichTextNormal>
        </h1>
      )
    }

    case 'h2': {
      return (
        <h2 key={i} className='py-20'>
         <RichTextNormal>
           {node.children}
         </RichTextNormal>
        </h2>
      )
    }

    case 'h3': {
      return (
        <h3 key={i} className='py-20'>
        <RichTextNormal>
           {node.children}
        </RichTextNormal>
        </h3>
      )
    }

    case 'h4': {
      return (
        <h4  key={i} className='py-20'>
         <RichTextNormal>
           {node.children}
         </RichTextNormal>
        </h4>
      )
    }

    case 'h5': {
      return (
        <h5 key={i} className='py-20'>
         <RichTextNormal>
           {node.children}
         </RichTextNormal>
        </h5>
      )
    }

    case 'h6': {
      return (
        <h6 key={i} className='py-20'>
         <RichTextNormal>
           {node.children}
         </RichTextNormal>
        </h6>
      )
    }

    case 'blockquote': {
      return (
        <h4 key={i} className=' py-20 px-10 m-auto text-center font-kaushanscript '>
        <RichTextNormal>
           {node.children}
        </RichTextNormal>
        </h4>
      )
    }

    case 'link': {
      if(node.linkType==='internal'){
        return (
          <Link key={i} href={(typeof node.doc?.value?.Slug !== 'undefined')?node.doc?.value?.Slug:((typeof node.doc?.value?.Url !== 'undefined')?node.doc?.value?.Url:'#')}>
            <RichTextNormal>
               {node.children}
            </RichTextNormal>
          </Link>
        )
      }else{
      
        return (
          <Link key={i} href={(typeof node.url !== 'undefined')?node.url:'#'}>
          <RichTextNormal>
             {node.children}
          </RichTextNormal>
          </Link>
        )
      }
      
    }

    case 'indent': {
      return (
        <div key={i} className='py-10 px-3 ms:p-10'>
        <RichTextNormal>
           {node.children}
        </RichTextNormal>
        </div>
      )
    }

    case 'ol': {
      return (
        <ol key={i} className='list-decimal pl-8 py-5'>
         <RichTextNormal>
           {node.children}
         </RichTextNormal>
        </ol>
      )
    }

    case 'ul': {
      return (
        <ul key={i} className='list-disc pl-8 py-5'>
       <RichTextNormal>
         {node.children}
       </RichTextNormal>
        </ul>
      )
    }

    case 'li': {
      return (
        <li key={i} >
          <RichTextNormal>
             {node.children}
          </RichTextNormal>
        </li>
      )
    }

    case 'upload': {
     
      return (
        <div key={i} className='p-5 '>

        <Image src={node.value?.webp?.url}  alt={ node.value?.Alt }
            width={600}
            height={600}
         
            className='object-cover m-auto'
          />
          <RichTextNormal>
             {node.children}
          </RichTextNormal>
        </div>
      )
    }

    default:
      return (
        <p key={i} className='p-2 text-justify'>
       <RichTextNormal>
         {node.children}
       </RichTextNormal>
        </p> 
      )


  }

});
}