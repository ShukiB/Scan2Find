import { SpotDto } from "../entities/spot-dto";

export function findSpotById(spotId: number) {
  return MockSpots.find(s => s.id === spotId);
}

const MockSpots: SpotDto[] = [{
  id: 123,
  floor: -1,
  area: "Green",
  areaColor: "#50a13b",
  row: 2,
  parkNumber: 12,
  description: "From the elevator turn left, go through the door and turn left and immediately left, go 10 meters see color green and turn right go to 12 spot",
  gps: [32.0635751,34.7612596],
  facilityName: "Bikini Bottom",
},
{
  id: 124,
  floor: -1,
  area: "Red",
  areaColor: "#a13b4f",
  row: 3,
  parkNumber: 22,
  description: "From the elevator turn left, go through the door and turn left- see color red, go to 22 spot",
  gps: [32.063554, 34.798569],
  facilityName: "Bikini Bottom",

},
{
  id: 125,
  floor: -1,
  area: "Blue",
  areaColor: "#433ba1",
  row: 5,
  parkNumber: 53,
  description: "From the elevator turn left, go through the door and turn left, turn right for 20 meters, turn left go to the blue area and see spot 53",
  gps: [32.063549, 34.761409],
  facilityName: "Bikini Bottom",

},
{
  id: 126,
  floor: -2,
  area: "Yellow",
  areaColor: "#c0c24a",
  row: 7,
  parkNumber: 70,
  description: "From the elevator turn left, go through the door and turn left, turn right see yellow find spot 70",
  gps: [32.063502, 34.761393],
  facilityName: "Bikini Bottom",

},
{
  id: 130,
  floor: -2,
  area: "Pink",
  areaColor: "#c24a8c",
  row: 9,
  parkNumber: 90,
  description: "From the elevator turn left, \ngo through the door and turn left, see pink find spot 90",
  gps: [32.063502, 34.765693],
  facilityName: "Bikini Bottom",
}]
