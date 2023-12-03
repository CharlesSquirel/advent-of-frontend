export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export const znajdzWorek = (lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null | undefined => {
  if (lokalizacje.length === 0 || lokalizacje.some((lok) => Object.values(lok).some((val) => typeof val !== "number"))) {
    return null;
  }

  const mappedLok: number[] = lokalizacje.map((lok) => mapa(lok.x, lok.y, lok.z, lok.czas));
  if (mappedLok.some((val) => Number.isNaN(val))) {
    return null;
  }
  const indexOfMax: number = mappedLok.indexOf(Math.max(...mappedLok));
  return lokalizacje[indexOfMax];
};
