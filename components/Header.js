import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        <div className="pokeball">
          <div className="pokeball-top"></div>
          <div className="pokeball-middle"></div>
          <div className="pokeball-bottom"></div>
          <div className="pokeball-button"></div>
        </div>
        PokeExplorer
      </Link>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  )
}
