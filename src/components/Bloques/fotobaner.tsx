'use client'

import Image from "next/image";
import RichTextModal from "./richtextmodal";

  
export default function FotoBaner (props:{children:any}):any {

    

      return (
        <div className="w-full">
      
          <Image src={props.children.webp.url}  alt={ props.children.Alt }
            width={1200}
            height={1200}
         
            
          />
      
        </div>
    )
}