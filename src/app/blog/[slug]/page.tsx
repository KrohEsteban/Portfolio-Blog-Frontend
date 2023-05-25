import Bloques from '@/components/Bloques';
import Post from '@/components/posts';
import { Metadata , ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function getData( slug: string ) {

    const data= await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/blog?where[Slug][equals]=' + slug, { next: { revalidate: 10 } }).then((res) => res.json());
    return data.docs[0]

}

export async function getContactos(){
    return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/contactos', { next: { revalidate: 10 } }).then((res) => res.json());
  }


export async function generateMetadata(
    { params}: Props ): Promise<Metadata> {

  // fetch data
  const data = await getData(params.slug)

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


export default async function Page({params}: Props) {

  const data = await getData(params.slug)

  const contactos = await getContactos()


  return (
  <>
  <div>
      {Bloques(data.Contenido)}
  </div>

  <div>
  <ul className='flex justify-center space-x-6 md:flex-col-reverse md:space-x-0 md:fixed md:top-20 md:right-5'>
              {
              contactos.docs.map((item:{Nombre:string, Url:string, Svg:string})=>{
               return<li className='w-8 sm:w-9 md:w-10 ' key={item.Nombre}>
                    <a className='stroke-none text-gris-claro p-4 m-auto ' href={item.Url} target="_blank" rel="noopener noreferrer">{<div dangerouslySetInnerHTML={{ __html: item.Svg }}/>}<p className="hidden">{item.Nombre}</p></a>
                </li> 
                })
              }
            </ul>
  </div>
   
  </>
    
  )
}
