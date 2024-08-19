const vel = 10000; //velocity in km/h
const acc = 3; //Acceleration in m/s^2
const time = 3600; //Time in seconds
const d = 0; //distance in km
const fuel = 5000; //fuel in kg
const fbr = 0.5; //Fuel burn rate in kg/s

const kmhToMs = (velocity) => velocity * (1000 / 3600);
const msToKmh = (velocity) => velocity * (3600 / 1000);

const calcNewVel = (vel, acc, time) => {
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input types. Expected numbers for velocity, acceleration, and time.');
  }
  const velMs = kmhToMs(vel);
  const newVelMs = velMs + (acc * time);
  return msToKmh(newVelMs);
};
const calcNewDist = (vel, time) => {
  if (typeof vel !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input types. Expected numbers for velocity and time.');
  }
  const velMs = kmhToMs(vel);
  return (velMs * time) / 1000;
};
const calcRemainingFuel = (fuel, fbr, time) => {
  if (typeof fuel !== 'number' || typeof fbr !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input types. Expected numbers for fuel, fuel burn rate, and time.');
  }
  const remainingFuel = fuel - (fbr * time);
  return remainingFuel < 0 ? 0 : remainingFuel;
};
const newVel = calcNewVel(vel, acc, time);
const newDist = calcNewDist(vel, time);
const remainingFuel = calcRemainingFuel(fuel, fbr, time);

console.log(`Corrected New Velocity: ${newVel.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDist.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
