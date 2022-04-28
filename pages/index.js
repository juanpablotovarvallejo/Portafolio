import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNavegacion from './BarraNavegacion'
import Hero from './Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan Pablo Tovar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Hero />
        <div className="container">
        </div>
      </main>
    </div>

    
  )
}


