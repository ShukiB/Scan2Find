export function findSportById(spotId: number) {
  return MockSpots.find(s => s.id === spotId);
}


const MockSpots = [{
  "id": 123,
  "floor": -1,
  "area": "green",
  "areaColor": "#00FF00",
  "row": 2,
  "parkNumber": 12,
  "description": "From the elevator turn left, go through the door and turn left and immediately left, go 10 meters see color green and turn right go to 12 spot",
  "gps": "[32.063554, 34.761499]",

},
{
  "id": 124,
  "floor": -1,
  "area": "red",
  "areaColor": "#FF0000",
  "row": 3,
  "parkNumber": 22,
  "description": "From the elevator turn left, go through the door and turn left- see color red, go to 22 spot",
  "gps": "[32.063554, 34.798569]",

},
{
  "id": 125,
  "floor": -1,
  "area": "blue",
  "areaColor": "#0000FF",
  "row": 5,
  "parkNumber": 53,
  "description": "From the elevator turn left, go through the door and turn left, turn right for 20 meters, turn left go to the blue area and see spot 53",
  "gps": "[32.063549, 34.761409]",

},
{
  "id": 126,
  "floor": -2,
  "area": "yellow",
  "areaColor": "#FFFF00",
  "row": 7,
  "parkNumber": 70,
  "description": "From the elevator turn left, go through the door and turn left, turn right see yellow find spot 70",
  "gps": "[32.063502, 34.761393]",

},
{
  "id": 127,
  "floor": -2,
  "area": "pink",
  "areaColor": "#FFC0CB",
  "row": 9,
  "parkNumber": 90,
  "description": "From the elevator turn left, go through the door and turn left, see pink find spot 90",
  "gps": "[32.063502, 34.765693]",

}]
