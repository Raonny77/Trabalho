import PokemonCard from '../components/PokemonCard'

async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20', {
    cache: 'force-cache',
  })
  const data = await res.json()
  return data.results
}

export default async function Home() {
  const pokemons = await getPokemons()

  return (
    <div>
      <h2 className="page-title">Escolha seu Pokémon</h2>
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} index={index + 1} />
        ))}
      </div>
    </div>
  )
}
