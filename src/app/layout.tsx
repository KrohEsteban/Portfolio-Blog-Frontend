import '@/style/globals.css'
import { Dancing_Script, Open_Sans, Kaushan_Script } from 'next/font/google'
import Navigation from '../components/navigation'
import FooterEsteban from '../components/footeresteban'


const DancingScript = Dancing_Script({subsets: ['latin'],  weight: '700', variable: '--font-DancingScript'})
const OpenSans = Open_Sans({subsets: ['latin'],  weight: '400', variable: '--font-OpenSans'})
const KaushanScript = Kaushan_Script({subsets: ['latin'], weight: '400', variable: '--font-KaushanScript'})

export async function getContactos(){
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/contactos', { next: { revalidate: 10 } }).then((res) => res.json());
}


export const metadata = {
  title: {
    default: 'Esteban Kroh, programador web.',
    template: '%s | Esteban Kroh, programador web.'
  },
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: '/favicon.svg',
      url: '/favicon.svg',
    },
  },
  alternates: {
    canonical: './',
    languages: {
      'es-AR': '/es-AR',
    },
  },
  openGraph: {
    images: '/favicon.svg',
  },

  siteName: 'Esteban Kroh, programador web.',
  themeColor: '#b85b22',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const contactos = await getContactos()
  
  return (
    <html lang="es" className={`${OpenSans.variable} ${DancingScript.variable} ${KaushanScript.variable}`}>
        
          <body className='font-opensans bg-gris-oscuro text-gris-claro'>
          
               <Navigation contactos={contactos} /> 
      
              <main className="w-11/12 sm:w-5/6 max-w-4xl m-auto flex-row">
                {children}
              </main>
              
        
            
            <FooterEsteban />
          
          </body>
       
      
    </html>
  )
}

