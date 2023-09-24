import { Metadata} from 'next';
import Bloques from '@/components/Bloques';
import Perfil from '@/components/perfil';


async function getData(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/646795d7aa702068d833159e').then((res) => res.json());
}

async function getContactos(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/contactos?limit=0').then((res) => res.json());
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
  
  const contactos = await getContactos()
  

  return (
    <>
      <div className=''>
        <div className='min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-dancingscript '>
          

      <Perfil>
            {contactos}
           </Perfil>

           
        </div>
              <div>
                {Bloques(data.Contenido)}
              </div>
        

       </div>

    </>
  )
}
