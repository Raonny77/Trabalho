import Link from 'next/link'

export default function PokemonCard({ name, index }) {
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

  return (
    <Link href={`/pokemon/${name}`} className="pokemon-card">
      <img src={sprite} alt={name} width={96} height={96} />
      <p className="number">#{String(index).padStart(3, '0')}</p>
      <p className="name">{name}</p>
    </Link>
  )
}
