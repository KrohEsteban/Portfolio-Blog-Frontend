import Bloques from "@/components/Bloques";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


async function getData() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/64679bb365efdb4becb2b9fe', { next: { revalidate: 10 } }).then((res) => res.json());

}
async function getProyectos() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/proyectos', { next: { revalidate: 10 } }).then((res) => res.json());

}


export async function generateMetadata(): Promise<Metadata> {

  // fetch data
  const data = await getData()

  let keywords: Array<string> = []

  data.PalabrasClaves.map((item: { titulo: string }) => {
    keywords.push(item.titulo)
  })

  return {
    title: data.Title,
    description: data.Description,
    keywords: keywords,
  };
}



export default async function Page() {

  const data = await getData()
  const proyectos = await getProyectos()
  return (
    <>

      <div>
        {Bloques(data.Contenido)}
      </div>

      <div>
        {proyectos.docs.map((item: any) => {



          return (

            <div className='grid grid-cols-7 gap-4 py-20' key={item.TituloProyect}>


              <div className="text-center col-span-7 md:col-span-3 ">
                <h4> <Link className='' href={'/blog/'+item.Post.Slug} >{item.TituloProyect}</Link> </h4>
                <h5>{item.Stack}</h5>
                <p>{item.TextoCortoDelProyecto}</p>
              </div>

              
                  <Image src={item.ImagenDescktop.webp.url} alt={item.ImagenDescktop.Alt}
                  width={300}
                  height={150}
                  className='border-4 border-black shadow-lg m-auto col-span-7 md:col-span-3'
                />
              
              <Image src={item.ImagenCelu.webp.url} alt={item.ImagenCelu.Alt}
                  width={100}
                  height={200}

                  className='border-4 border-black shadow-lg m-auto col-span-7 md:col-span-1'
                />
         
                
           

            </div>


          )
        })

        }

      </div>
    </>
  )
}
