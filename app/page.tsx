import '@/styles/modules/homepage.modules.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='home'>
      <h1 className='title'>Welcome to <span>Nextflix</span></h1>
      <h3 className='subtitle'>This is a simple project built on Next.js 13. It's a movie search engine and nothing alike the real Netflix</h3>
      <div className="cta">
        <Link className='cta__movie' href="/movies">Movies</Link>
        <Link className='cta__show' href="/shows">Series</Link>
      </div>
    </main>
  )
}
