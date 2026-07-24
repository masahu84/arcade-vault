import type { GameRow } from '@/lib/supabase/types';
import { GAMES } from '@/app/data/games';
import GamesGrid from './GamesGrid';

export default function Biblioteca() {
  return (
    <div className="fade-in">
      <section className="av-hero">
        <h1 className="flicker">ARCADE VAULT</h1>
        <div className="sub">
          INSERTA UNA MONEDA PARA JUGAR <span className="blink">_</span>
        </div>
      </section>
      <GamesGrid games={GAMES as unknown as GameRow[]} />
    </div>
  );
}
