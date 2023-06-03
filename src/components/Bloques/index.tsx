import { Fragment } from "react";
import RichTextNormal from "./richtextnormal";
import Modal from "./modal";
import Carousel from "./carousel";
import FotoBaner from "./fotobaner";
import Proyectos from "../proyectos";
import DosColumnas from "./doscolumnas";

  
export default function Bloques (children:any):any {

    
    if (!children) {
  
        return null;
    
      }
     
    return children.map((node:any, i:number) => {

        if (node.blockType === "RichTextNormal"){

            return(
                <Fragment key={i}>
                     <RichTextNormal>
                        {node.RichTextNormal}
                     </RichTextNormal>
                </Fragment> 
            )

        }else if (node.blockType === "Modal"){

            return (
            <Fragment key={i}>
                <Modal>
                {node.Modal}
                </Modal>
            </Fragment> 
        )

        }else if (node.blockType === "Carousel"){

            return(
                <Fragment key={i}>
                    <Carousel>
                    {node.Carousel}
                    </Carousel>
                </Fragment> 
            )

        }else if (node.blockType === "Codigo"){

            return(
                <Fragment key={i}>
                    <div dangerouslySetInnerHTML={{ __html: node.Codigo }} />
                </Fragment> 
            )

        }else if (node.blockType === "FotoBaner"){

            return(
                <Fragment key={i}>
                    <FotoBaner>
                        {node.Image}
                    </FotoBaner>
                </Fragment> 
            )

        }else if (node.blockType === "RelacionProyectos"){

            return(
                <Fragment key={i}>
                    <Proyectos>
                        {node.ProyectoRelacionado}
                    </Proyectos>
                </Fragment> 
            )

        }else if (node.blockType === "DosColumnas"){

            return(
                <Fragment key={i}>
                    <DosColumnas>
                        {node}
                    </DosColumnas>
                </Fragment> 
            )

        }else {
            return null;
        }

    })

    
}