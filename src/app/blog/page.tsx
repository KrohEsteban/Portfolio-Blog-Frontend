import Bloques from '@/components/Bloques';
import Post from '@/components/posts';
import { Metadata } from 'next';

async function getData() {

  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/64679c9e65efdb4becb2ba48').then((res) => res.json());
}

async function getEtiquetas() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/etiquetas?limit=0').then((res) => res.json());
}

async function getBlogs() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/blog?limit=0').then((res) => res.json());
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
  const etiquetas = await getEtiquetas()
  const blogs = await getBlogs()

  return (
  <>
  <div>
      {Bloques(data.Contenido)}
  </div>
    <Post etiquetas={etiquetas} blogs={blogs} />
    
  </>
    
  )
}
