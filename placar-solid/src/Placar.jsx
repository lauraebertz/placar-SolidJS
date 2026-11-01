import { createSignal } from "solid-js";

export default function Placar() {
  // Cada instância do componente possui seus próprios signals (estado local).
  const [pontos, setPontos] = createSignal(0);
  const [nome, setNome] = createSignal("IFRS");

  // As ações modificam o estado; o JSX dependente acompanha a mudança.
  const marcarPonto = () => setPontos((anterior) => anterior + 1);
  const corrigirPonto = () => setPontos((anterior) => Math.max(0, anterior - 1));
  const zerarPlacar = () => setPontos(0);

  return (
    <main class="container">
      <header>
        <p class="eyebrow">SEMINÁRIO DE DESENVOLVIMENTO WEB</p>
      </header>

      <section class="placar" aria-labelledby="titulo-placar">
        <div class="topo">
          <h2 id="titulo-placar">Placar do time</h2>
          <span class="badge">SOLIDJS</span>
        </div>

        <label for="nome-time">Nome do time</label>
        <input
          id="nome-time"
          type="text"
          maxLength={40}
          value={nome()}
          onInput={(evento) => setNome(evento.currentTarget.value)}
        />

        <p class="nome-time">{nome().trim() || "Seu time"}</p>
        <p class="numero" role="status" aria-live="polite" aria-atomic="true">
          <span class="sr-only">Pontuação: </span>{pontos()}
        </p>
        <p class="legenda">PONTOS</p>

        <button class="principal" type="button" onClick={marcarPonto}>
          + Marcar ponto
        </button>
        <div class="acoes">
          <button type="button" onClick={corrigirPonto} disabled={pontos() === 0}>
            − Corrigir ponto
          </button>
          <button type="button" onClick={zerarPlacar} disabled={pontos() === 0}>
            Zerar placar
          </button>
        </div>
      </section>
    </main>
  );
}
