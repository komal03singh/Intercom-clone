import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'

function App() {

  return (
    <div>
      <main className='flex h-screen w-full'>

        <section className='hidden md:block lg:block lg:w-1/5 md:w-2/5 border-r border-black/10'>
          <SectionOne/>
        </section>

        <section className='hidden lg:block md:hidden w-1/2 border-r border-black/10'>
          <SectionTwo/>
        </section>
          
        <section className='w-full lg:w-1/3 border-black/10'>
          <SectionThree/>
        </section>

      </main>

    </div>
  )
}

export default App
