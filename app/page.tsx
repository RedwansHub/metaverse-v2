import Image from 'next/image'
import { Footer, Navbar } from './components'
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from './pages'

export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
        <Navbar />
        <Hero />
          <div className='relative'>
            <About />
              <div className='gradient-03 z-0' />
            <Explore />
          </div>
          <div className='relative'>
            <GetStarted />
              <div className='gradient-03 z-0' />
            <WhatsNew />
          </div>
      <World />  
          <div className='relative'>
            <Insights />
              <div className='gradient-03 z-0' />
            <Feedback />
          </div>
      <Footer />
    </div>
  )
}
