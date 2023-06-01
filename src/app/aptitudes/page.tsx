import Progresbar from '@/components/progresbar';
import { Metadata } from 'next';
import Bloques from '@/components/Bloques';


 async function getData(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/64679656aa702068d83315cf', {next: { revalidate: 10 }}).then((res) => res.json());
  
}

async function getTecnologias(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL+'/api/tecnologias', {next: { revalidate: 10 }}).then((res) => res.json());
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
      images: data.ImageOpenGraph.url,
    },
  };
}

export default async function Page() {
  const data = await getData()
  const tecnologias = await getTecnologias()
  

  return (
    <>
        
        {Bloques(data.Contenido)}

          <div className='py-20 space-y-6'>
            { tecnologias.docs.map((item:{TituloDeSatck:string, Progreso:number}, i:number)=>{
        return (
        <div key={i} className='space-y-1'>
          <Progresbar stack={item.TituloDeSatck} progress={item.Progreso} />
        </div> 
        )
         
        })
      
      }    
      </div>    
      
         
      
      </>
    
  )
}
