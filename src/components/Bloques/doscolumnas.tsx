
import RichTextNormal from "./richtextnormal";


export default function DosColumnas(props: { children: any }): any {




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

      <div>
        <RichTextNormal>
          {props.children.Columna1}
        </RichTextNormal>
      </div>


      <div>
        <RichTextNormal>
          {props.children.Columna2}
        </RichTextNormal>
      </div>








    </div>
  )
}