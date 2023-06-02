//import { RichText } from '@/components/RichText';
import Bloques from '@/components/Bloques';
import RichText from '@/components/Bloques/richtextnormal';
import { Metadata, ResolvingMetadata } from 'next';


async function getData(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL+'/api/pages/64679c1b65efdb4becb2ba21', {next: { revalidate: 10 }}).then((res) => res.json());

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
  return (
    <div>
    {Bloques(data.Contenido)}
  </div>
  )
}
