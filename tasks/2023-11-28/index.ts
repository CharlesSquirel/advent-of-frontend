export type BirdObservation = {
  name: string;
  date: string; // YYYY-MM-DD
  coordinates: { latitude: number; longitude: number };
};

export type ProcessedBirdData = {
  [birdName: string]: {
    dates: string[];
    averageCoordinates: { latitude: number; longitude: number };
  };
};

export function processBirdObservations(observations: BirdObservation[]): ProcessedBirdData {
  const result: ProcessedBirdData = {};
  for (let i = 0; i < observations.length; i++) {
    const currentObservations = observations[i];
    if (!(observations[i].name in result)) {
      result[currentObservations.name] = {
        dates: [String(currentObservations.date)],
        averageCoordinates: currentObservations.coordinates,
      };
    }
    else {
        const currentName = currentObservations.name
        const currentLatitude = result.averageCoordinates.latitude
        result.currentName.dates.push(currentObservations.date)
        result.currentName.averageCoordinates.latitude = 
    }
  }
  return result;
}

//   { name: 'Kania', date: '2023-04-01', coordinates: { latitude: 50, longitude: 19 } },
//   { name: 'Kania', date: '2023-04-02', coordinates: { latitude: 52, longitude: 21 } },
//   { name: 'Sokół', date: '2023-04-01', coordinates: { latitude: 48, longitude: 17 } },
