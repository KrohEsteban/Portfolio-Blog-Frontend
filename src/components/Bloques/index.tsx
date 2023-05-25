import { Fragment } from "react";
import RichTextNormal from "./richtextnormal";
import Modal from "./modal";
import Carousel from "./carousel";

  
export default function Bloques (children:Array<Object>):any {

    
    if (!children) {
  
        return null;
    
      }
     
    return children.map((node:any, i:number) => {

        if (node.blockType === "RichTextNormal"){

            return(
                <Fragment key={i}>
                     <RichTextNormal children={node.RichTextNormal} />
                </Fragment> 
            )

        }else if (node.blockType === "Modal"){

            return (
            <Fragment key={i}>
                <Modal children={node.Modal} />
            </Fragment> 
        )

        }else if (node.blockType === "Carousel"){

            return(
                <Fragment key={i}>
                    <Carousel children={node.Carousel} />
                </Fragment> 
            )

        }else if (node.blockType === "Codigo"){

            return(
                <Fragment key={i}>
                    <div dangerouslySetInnerHTML={{ __html: node.Codigo }} />
                </Fragment> 
            )

        }else {
            return null;
        }

    })

    
}