import Link from 'next/link'
import './HeaderComponent.scss'
import Image from 'next/image'
import bgImg from '@/public/imgs/nextflix.png'

export default function Header() {
  return (
    <nav>
        <Link href="/">
           <Image src={bgImg} alt='bg' width={150} height={undefined}/>
        </Link>
        <div className="item-list">
            <Link className="item" href="/movies">Movies</Link>
            <Link className="item" href="/shows">Series</Link>
        </div>
    </nav>
  )
}
