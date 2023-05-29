'use client'
import { useInView } from "react-intersection-observer";
import RichText from "./richtextnormal";
import RichTextModal from "./richtextmodal";

  
export default function Modal (props:{children:any}):any {

    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        threshold: 0,
      });

      return (
        <div className="py-6">
        {inView ? (
            <div ref={ref} className="w-11/12 border p-4 border-gris-claro bg-gris-intermedio text-center brillo">
                <RichTextModal>
                {props.children}
                </RichTextModal>
            </div> 
          ) : (
            <div ref={ref} className="w-11/12 border p-4  border-gris-claro bg-gris-intermedio text-center sinbrillos">
                <RichTextModal>
                {props.children}
                </RichTextModal>
            </div> 
          )}
        </div>
    )
}