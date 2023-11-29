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
    const currentObservation = observations[i];
    if (!(observations[i].name in result)) {
      result[currentObservation.name] = {
        dates: [String(currentObservation.date)],
        averageCoordinates: currentObservation.coordinates,
      };
    }
    else {
      const currentName = currentObservation.name;
      const currentDate = currentObservation.date
      let currentLatitude = currentObservation.coordinates.latitude;
      let currentLongitude = currentObservation.coordinates.longitude;
      let latitudeToChange = result[currentName].averageCoordinates.latitude;
      let longitudeToChange = result[currentName].averageCoordinates.longitude;
      
      result[currentName].dates.push(currentDate)
      result[currentName].averageCoordinates.latitude = (latitudeToChange + currentLatitude) / 2
      result[currentName].averageCoordinates.longitude = (longitudeToChange + currentLongitude) / 2

  }
  }
  return result;
}

//   { name: 'Kania', date: '2023-04-01', coordinates: { latitude: 50, longitude: 19 } },
//   { name: 'Kania', date: '2023-04-02', coordinates: { latitude: 52, longitude: 21 } },
//   { name: 'Sokół', date: '2023-04-01', coordinates: { latitude: 48, longitude: 17 } },
