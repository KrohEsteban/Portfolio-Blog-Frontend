import Bloques from '@/components/Bloques';
import Post from '@/components/posts';
import { Metadata , ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

async function getData( slug: string ) {

    const data= await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/blog?where[Slug][equals]=' + slug, { next: { revalidate: 10 } }).then((res) => res.json());
    return data.docs[0]

}

async function getContactos(){
    return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/contactos?limit=0', { next: { revalidate: 10 } }).then((res) => res.json());
  }


export async function generateMetadata(
    { params}: Props ): Promise<Metadata> {

  // fetch data
  const data = await getData(params.slug)

  let keywords: Array<string> = []

  data?.PalabrasClaves.map((item: { titulo: string }) => {
    keywords.push(item.titulo)
  })

  return {
    title: data?.Title,
    description: data?.Description,
    keywords: keywords,
    openGraph: {
      title: data?.Title,
    description: data?.Description,
    url: 'https://estebankroh.com',
    siteName: 'Esteban Kroh, programador web.',
      images: data?.ImageOpenGraph.sizes.thumbnail.url,
    },
  };
}


export default async function Page({params}: Props) {

  const data = await getData(params.slug)

  const contactos = await getContactos()


  return (
  <>
  
  <div>
      {Bloques(data?.Contenido)}
  </div>

<div className='text-center pt-40 pb-5'>
    <p ><span className='text-amarillo'>---</span> Post actualizado el {data?.updatedAt.slice(8, 10)}/{data?.updatedAt.slice(5, 7)}/{data?.updatedAt.slice(2, 4)} <span className='text-amarillo'>---</span></p>
  </div>

  <div>
  <ul className='flex justify-center space-x-6 md:flex-col-reverse md:space-x-0 md:fixed md:top-20 md:right-5'>
              {
              contactos.docs.map((item:{Nombre:string, Url:string, Svg:string})=>{
               return<li className='w-8 sm:w-9 md:w-10 ' key={item.Nombre}>
                    <a className='stroke-none text-amarillo p-4 m-auto ' href={item.Url} target="_blank" rel="noopener noreferrer">{<div dangerouslySetInnerHTML={{ __html: item.Svg }}/>}<p className="hidden">{item.Nombre}</p></a>
                </li> 
                })
              }
            </ul>
  </div>
   
  </>
    
  )
}
