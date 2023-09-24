import Bloques from "@/components/Bloques";
import Proyectos from "@/components/proyectos";
import { Metadata } from "next";


async function getData() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/64679bb365efdb4becb2b9fe').then((res) => res.json());

}
async function getProyectos() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/proyectos?limit=0').then((res) => res.json());

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
    openGraph: {
      title: data.Title,
    description: data.Description,
    url: 'https://estebankroh.com',
    siteName: 'Esteban Kroh, programador web.',
      images: data.ImageOpenGraph.sizes.thumbnail.url,
    },
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
 
       { proyectos.docs.map((item: any) => {
      return (<Proyectos key={item.TituloProyect}>
            {item}
            </Proyectos>)
        })}
        

      </div>
    </>
  )
}
