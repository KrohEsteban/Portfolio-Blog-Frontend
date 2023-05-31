import { Metadata } from 'next';
import Bloques from '@/components/Bloques';
import Image from 'next/image';


async function getData() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/pages/646795d7aa702068d833159e', { next: { revalidate: 10 } }).then((res) => res.json());
}

async function getContactos() {
  return await fetch(process.env.PAYLOAD_PUBLIC_SERVER_URL + '/api/contactos', { next: { revalidate: 10 } }).then((res) => res.json());
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

  const contactos = await getContactos()


  return (
    <>
      <div className=''>
        <div className='min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-dancingscript '>

          <Image src='/perfil.webp' alt='Esteban Kroh, programador web, foto de perfil.'
            priority={true}
            height={200}
            width={200}
            className='object-cover rounded-[50%] animacionopacidad  m-auto'
          />


          <h1 className='handwriting font-dancingscript'>
            <svg id="untitled" viewBox="0 0 900 200" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><g id="untitled-u-mask-group" transform="translate(-116.846611-401.59555)" mask="url(#untitled-u-masks)"><text id="untitled-s-text1" dx="0" dy="0" fontSize="54" fontWeight="700" transform="matrix(3.34771 0 0 3.932492 122.952689 569.610864)" stroke="currentColor" fill="currentColor" strokeWidth="20"><tspan id="untitled-s-tspan1" y="0" fontWeight="700" strokeWidth="0">
              Esteban Kroh
            </tspan></text>
              <mask id="untitled-u-masks" className='texto' x="-150%" y="-150%" height="400%" width="400%"><path id="untitled-s-path1" d="M201.342228,465.830975l14.561292-20.892287-6.964096-20.259189-15.194391-5.064797-19.62609,6.964095-11.395794,25.323981q-.6331,20.892289,0,21.525388c.6331.633099,16.602554,24.057786,17.235654,24.690885q.6331.633099-19.768052,5.064798c-19.345444,12.784415-17.288739,12.582638-23.011295,24.057785q-5.722556,11.475147-4.808716,22.158486.682401,12.617329,4.808716,17.72679c4.126315,5.109461,14.112103,10.509617,14.017097,10.129594c0,0,14.692093,5.064796,18.490691,5.697896q3.798598.6331,20.259188-7.597195l20.892288-24.057786l32.28808-45.583173q2.532399-15.194391,2.532399-14.561291t4.431697,44.316974q1.266199,20.259188,1.266199,21.525387c0,1.266199-5.064796,18.992989-12.661992,20.259188q-7.597196,1.266199-20.892288-7.597196l-6.964095-34.187379l15.82749,10.129594q1.899299,8.230294,6.964096,10.762693t31.021882,1.2662q12.028892-9.496495,12.661992-10.762694t43.050774-108.893135q-32.921181,79.137452-33.55428,79.770552t-8.230295,47.482472l15.827491,8.863395l5.064797-34.091011-33.55428-38.715446l38.619077,6.330996l25.323985-2.532398-24.690886,34.916848q-8.230294,34.72411-6.964095,33.457911c1.266199-1.266199,21.525386-13.295093,22.158486-13.928192s8.230295-12.028892,10.129594-12.661992s23.424687-6.867727,24.690886-6.867727s13.295092-7.693564,13.295092-9.592863s12.028893-18.99299,12.028893-19.626089-5.064797-12.661992-5.697897-12.661992q-.6331,0-22.791586,6.964096-10.762693,15.827491-12.028893,17.09369t-6.964096,12.661992v27.856384l15.194391,13.928191q19.626089-8.230295,20.259188-8.230295t20.892287-18.992989l14.561292-40.518375l12.661992-5.697897l19.626088-29.755682l13.295093-35.453579-6.964096-13.295088-19.626089,31.654977-18.359889,43.050774-10.129594,68.37476l12.661993,12.661992q15.19439-4.431697,15.82749-4.431697c.6331,0,13.295092-17.72679,13.928192-19.626089q.6331-1.899299,5.697897-36.719778l-13.295092-8.230295q-10.129594,14.561292-10.129594,15.827491t7.597195,23.424686l21.525387,6.964096q18.992989-7.597197,18.992989-8.230296t20.259188-32.92118l23.424686-15.194391l13.928192,15.827491-24.690886-5.697897-32.92118,48.115571q.633099,10.129594,2.532398,12.028893c1.899299,1.899299,12.661993,3.165498,13.928192,0q1.266199-3.165498,34.18738-43.050774l-12.028893,29.755682q6.330996,15.194391,10.129594,15.194391c3.798598,0,18.35989-9.496493,18.992989-10.762693q.633099-1.2662,22.158486-43.050775-12.028892,50.64797-12.028892,47.482472t35.453579-48.748671l21.525387-6.330996l1.899299,20.892287-8.863395,26.590184q3.798597,8.230296,9.496494,8.230296t17.72679-5.064797l12.661992-22.695218l25.323985-5.794266l33.048983,46.216273l41.114333-153.843205-8.088066-6.964095q-9.436075,5.064797-10.110081,5.064797t-18.198148,20.259189l-.674005,20.892287l6.740054,32.288076l35.72229-12.729362l47.854387-58.810892-51.224415,46.849369-13.480109,29.755683l16.850137,42.417674l34.374278,34.820479l9.436076-40.422007l20.894169-54.610306-8.762071,6.398367l14.82812,20.259187l7.41406,10.129594q-9.436076,34.820479-9.436076,36.086678t7.41406,15.194391l26.960218-17.09369l24.264196-34.187379-14.154114,10.762693l1.348011,32.288081l8.762071,6.330996l18.198147-12.028893l19.546158-31.021881-3.370027-29.122583-16.850137,1.899299-2.696021,15.194391l3.370027,23.521055l15.502125,16.364221l20.894169-10.762693q14.828121-37.985978,15.502126-37.985978t21.568174-16.46059l18.198148-46.216267-4.044033-18.359891-33.700273,65.209259L923.8983,511.414143l-.674005,55.712767l12.806104-17.72679l14.154114-32.92118q19.546158-9.496493,19.546158-7.597195c0,1.899298,7.414061,25.323984,6.740055,25.957084q-.674006.6331-8.762071,21.525387l7.41406,13.295092l14.154115-4.431697q14.154115-15.827491,14.82812-15.827491t4.718038-13.928191" transform="translate(.000003 0.000005)" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" /></mask></g></svg>



          </h1>

          <div className='m-auto w-full space-y-8'>

            <h2 >Programador web</h2>
            <h3>Contacto: </h3>
            <ul className='flex justify-center space-x-6'>
              {
                contactos.docs.map((item: { Nombre: string, Url: string, Svg: string }) => {
                  return <li className='w-10 sm:w-11 md:w-12' key={item.Nombre}>
                    <a className='stroke-none text-gris-claro p-4 m-auto' href={item.Url} target="_blank" rel="noopener noreferrer" aria-label={item.Nombre}>{<div dangerouslySetInnerHTML={{ __html: item.Svg }} />}</a>
                  </li>
                })
              }
            </ul>
          </div>

        </div>
        <div>
          {Bloques(data.Contenido)}
        </div>


      </div>

    </>
  )
}
