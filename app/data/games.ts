export interface Game {
  id: string;
  title: string;
  short: string;
  long: string;
  cat: 'ARCADE' | 'PUZZLE' | 'SHOOTER';
  cover: string;
  color: 'cyan' | 'magenta' | 'yellow' | 'green';
  best: number;
  plays: string;
}

export const GAMES: Game[] = [
  {
    id: 'asteroids',
    title: 'ASTEROIDS',
    short: 'Pulveriza rocas en gravedad cero.',
    long: 'Tu nave triangular flota en vacío absoluto. Dispara y rota para dividir rocas en fragmentos cada vez más pequeños. Supera niveles y acumula puntos antes de que los asteroides te alcancen.',
    cat: 'SHOOTER',
    cover: 'cover-rocas',
    color: 'yellow',
    best: 0,
    plays: '0',
  },
];
