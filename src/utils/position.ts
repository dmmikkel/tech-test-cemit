export type Position = {
  lat: number;
  lon: number;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

export const distanceBetweenLocations = (pos1: Position, pos2: Position) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(pos2.lat - pos1.lat);
  const dLon = deg2rad(pos2.lon - pos1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(pos1.lat)) *
      Math.cos(deg2rad(pos2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

export const getTotalDistance = (positions: Position[]) => {
  let total = 0;
  for (let i = 0; i < positions.length - 1; i++) {
    total += distanceBetweenLocations(positions[i], positions[i + 1]);
  }
  return total;
};
