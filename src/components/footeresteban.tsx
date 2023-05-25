import React from 'react'

export default function FooterEsteban() {
  return (
    <>
         
        <footer>
            <nav className='flex-row sm:flex space-x-2 justify-center tracking-widest font-serif text-center p-4'>
                <p className='pt-2' > © {new Date().getFullYear()} &middot; Construido por{` `}</p>
                <a className=' font-dancingscript text-2xl text-inherit' href="https://www.estebankroh.com">Esteban Kroh</a>
            </nav>
        </footer>
           
    </>
  )
}

