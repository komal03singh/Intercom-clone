import { useState } from 'react'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <main className='flex h-screen w-full'>

        <section className='w-1/5 border-r border-black/10'>
          <SectionOne/>
        </section>

        <section className='w-1/2 border-r border-black/10'>
          <SectionTwo/>
        </section>
          
        <section className='w-1/3 border-black/10'>
          <SectionThree/>
        </section>

      </main>

    </div>
  )
}

export default App
