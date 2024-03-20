import "./App.css";

//Types
type Vehicle = Boat | Motorbike | Car | Tank;

type Tank = {
  type: "Tank";
  canonLength: number;
  beltLength: number;
};

type Boat = {
  type: "Boat";
  color: string;
  motorInside: boolean;
  hasSails: boolean;
};

type Motorbike = {
  type: "Motorbike";
  model: string;
  wheels: number;
  color: string;
  isTerrain: boolean;
};

type Car = {
  type: "Car";
  doors: string;
  color: string;
  wheels: number;
  towbar: boolean;
  model: string;
  fuelType: "Electric" | "Petrol" | "Diesel" | "Hybrid";
};

//Fordon
const initialVehicle: Vehicle[] = [
  {
    type: "Tank",
    canonLength: 120,
    beltLength: 500,
  },
  {
    type: "Boat",
    color: "blue",
    motorInside: true,
    hasSails: false,
  },
  {
    type: "Motorbike",
    model: "Honda CB500X",
    wheels: 2,
    color: "black",
    isTerrain: true,
  },
  {
    type: "Car",
    doors: "4",
    color: "red",
    wheels: 4,
    towbar: false,
    model: "Toyota Corolla",
    fuelType: "Petrol",
  },
];

// Fordon komponent
const Vehicle = ({ vehicle }: { vehicle: Vehicle }) => {
  switch (vehicle.type) {
    case "Tank":
      return (
        <div>
          <h3>Tank</h3>
          <p>Canon Length: {vehicle.canonLength}</p>
          <p>Belt Length: {vehicle.beltLength}</p>
        </div>
      );
    case "Boat":
      return (
        <div>
          <h3>Boat</h3>
          <p>Color: {vehicle.color}</p>
          <p>Motor Inside: {vehicle.motorInside ? "Yes" : "No"}</p>
          <p>Sailing boat: {vehicle.hasSails ? "Yes" : "No"}</p>
        </div>
      );
    case "Motorbike":
      return (
        <div>
          <h3>Motorbike</h3>
          <p>Model: {vehicle.model}</p>
          <p>Wheels: {vehicle.wheels}</p>
          <p>Color: {vehicle.color}</p>
          <p>Can drive off road: {vehicle.isTerrain ? "Yes" : "No"}</p>
        </div>
      );
    case "Car":
      return (
        <div>
          <h3>Car</h3>
          <p>Doors: {vehicle.doors}</p>
          <p>Color: {vehicle.color}</p>
          <p>Wheels: {vehicle.wheels}</p>
          <p>Towbar: {vehicle.towbar ? "Yes" : "No"}</p>
          <p>Model: {vehicle.model}</p>
          <p>Fuel Type: {vehicle.fuelType}</p>
        </div>
      );
    default:
      return null; // Handle unexpected vehicle types
  }
};

//Fordons lista
const VehiclesList = ({ vehicles }: { vehicles: Vehicle[] }) => {
  return (
    <div>
      {vehicles.map((vehicle, index) => (
        <div key={index}>
          <Vehicle vehicle={vehicle} />
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Vehicles</h1>
        <VehiclesList vehicles={initialVehicle} />
      </header>
    </div>
  );
}

export default App;
