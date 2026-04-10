async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: 'force-cache',
  })
  return res.json()
}

export default async function PokemonPage({ params }) {
  const pokemon = await getPokemon(params.name)

  const sprite =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default

  return (
    <div className="detail-container">
      <img src={sprite} alt={pokemon.name} width={220} height={220} />
      <div className="detail-info">
        <h1>{pokemon.name}</h1>

        <div className="detail-row">
          <span className="detail-label">Tipos</span>
          <div className="types">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className={`type type-${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-row">
          <span className="detail-label">Peso</span>
          <span>{pokemon.weight / 10} kg</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Altura</span>
          <span>{pokemon.height / 10} m</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Habilidades</span>
          <ul className="abilities-list">
            {pokemon.abilities.slice(0, 3).map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
