//import RichText  from '@/components/RichText';
import Progresbar from '@/components/progresbar';
import RichText from '@/components/Bloques/richtextnormal';
import { Metadata } from 'next';
import Bloques from '@/components/Bloques';

export async function getData(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/64679656aa702068d83315cf', {next: { revalidate: 10 }}).then((res) => res.json());
}

export async function getTecnologias(){
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
  };
}

export default async function Page() {
  const data = await getData()
  const tecnologias = await getTecnologias()
  

  return (
    <>
        
        {Bloques(data.Contenido)}

          <div className='py-20 space-y-6'>
            { tecnologias.docs.map((item:{TituloDeSatck:string, Progreso:number})=>{
        return (
        <div className='space-y-1'>
          <Progresbar stack={item.TituloDeSatck} progress={item.Progreso} />
        </div> 
        )
         
        })
      
      }    
      </div>    
      
         
      
      </>
    
  )
}
