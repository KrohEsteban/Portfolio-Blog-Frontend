import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
      
  ];
}