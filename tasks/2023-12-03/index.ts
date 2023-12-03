export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (
  x: number,
  y: number,
  z: number,
  czas: number
) => number;

export const znajdzWorek = (
  lokalizacje: Lokalizacja[],
  mapa: MapaCzasoprzestrzenna
): Lokalizacja | null | undefined => {
  if (lokalizacje.length === 0) {
    return null;
  }
  const arr = [];
  lokalizacje.map((lok) => mapa(lok.x, lok.y, lok.z, lok.czas));
};
