export default function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-hero">
        <div className="sobre-pokeball-bg"></div>
        <h1 className="sobre-titulo">Sobre o Projeto</h1>
        <p className="sobre-subtitulo">Uma Pokédex feita com Next.js 14</p>
      </div>

      <div className="sobre-cards-grid">
        <div className="sobre-card sobre-card-aluno">
          <div className="sobre-card-icon">👤</div>
          <h2>Aluno</h2>
          <p><strong>Nome:</strong> Raonny</p>
          <p><strong>Curso:</strong> Programação e Design pra web II.</p>
          <p><strong>Período:</strong> 3º</p>
        </div>

        <div className="sobre-card sobre-card-projeto">
          <div className="sobre-card-icon">🚀</div>
          <h2>Projeto</h2>
          <p>
            O <strong>PokeExplorer</strong> é um catálogo interativo de Pokémon
            desenvolvido com <strong>Next.js 14</strong>, consumindo a PokéAPI —
            uma API pública e gratuita.
          </p>
          <p>
            Demonstra App Router, rotas dinâmicas, componentização e fetch no servidor.
          </p>
        </div>

        <div className="sobre-card sobre-card-tech">
          <div className="sobre-card-icon">⚙️</div>
          <h2>Tecnologias</h2>
          <ul>
            <li>Next.js 14 (App Router)</li>
            <li>React 18</li>
            <li>CSS Global</li>
            <li>PokéAPI</li>
          </ul>
        </div>

        <div className="sobre-card sobre-card-stats">
          <div className="sobre-card-icon">📊</div>
          <h2>Números</h2>
          <div className="sobre-stats">
            <div className="stat">
              <span className="stat-num">20</span>
              <span className="stat-label">Pokémon</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Rotas</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Componentes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
