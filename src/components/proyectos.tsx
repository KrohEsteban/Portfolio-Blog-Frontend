
import Image from "next/image";
import Link from "next/link";


export default function Proyectos (props:{children:any}){
   
            return (
           
        <div className='grid grid-cols-7 gap-4 py-20' >


        <div className="text-center col-span-7 md:col-span-3 ">
          <p className="text-center text-xl sm:text-2xl lg:text-3xl"> <Link className='' href={'/blog/'+props.children.Post.Slug} >{props.children.TituloProyect}</Link> </p>
          <p className="text-center text-lg sm:text-xl lg:text-2xl">{props.children.Stack}</p>
          <p>{props.children.TextoCortoDelProyecto}</p>
        </div>

        
            <Image src={props.children.ImagenDescktop.webp.url} alt={props.children.ImagenDescktop.Alt}
            width={300}
            height={150}
            className='border-4 border-black shadow-lg m-auto col-span-7 md:col-span-3 '// h-[150] w-[300]'
          />
        
        <Image src={props.children.ImagenCelu.webp.url} alt={props.children.ImagenCelu.Alt}
            width={100}
            height={200}

            className='border-4 border-black shadow-lg m-auto col-span-7 md:col-span-1 '// w-[100] h-[200]'
          />
   
      </div>

      )
    

    
    
}