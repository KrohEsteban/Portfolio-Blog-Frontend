import { MetadataRoute } from 'next';
 

async function getBlogs() {
    return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/blog').then((res) => res.json());
  }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const blogs = await getBlogs()
    
    let sitemap =[
        {
            url: 'https://estebankroh.com',
            lastModified: new Date(),
          },
          {
            url: 'https://estebankroh.com/blog',
            lastModified: new Date(),
          },
          {
            url: 'https://estebankroh.com/aptitudes',
            lastModified: new Date(),
          },
          {
              url: 'https://estebankroh.com/proyectos',
              lastModified: new Date(),
            },
            {
              url: 'https://estebankroh.com/hobby',
              lastModified: new Date(),
            },
            
    ]
    blogs.docs.map((item: any) => {
       sitemap.push(
        {
                url: 'https://estebankroh.com/blog/'+item.Slug,
                lastModified: new Date(), 
            }
       )
            
        
      })


  return sitemap;
}