/**
 * Service Areas Data Structure
 * Easily add, remove, or modify Scottish operational regions and dispatch hubs.
 */
export const scottishCoverageHubs = [
  {
    region: "Greater Glasgow & Clyde",
    description: "Primary metropolitan dispatch hub with dedicated mobile units on continuous patrol.",
    hubs: [
      { name: "Glasgow", postcodes: "G1 - G84", responseTime: "30 - 45 Mins", status: "Active Hub" },
      { name: "Paisley", postcodes: "PA1 - PA3", responseTime: "30 - 45 Mins", status: "Active Hub" },
      { name: "Motherwell", postcodes: "ML1 - ML2", responseTime: "30 - 50 Mins", status: "Active Hub" },
      { name: "East Kilbride", postcodes: "G74 - G75", responseTime: "35 - 50 Mins", status: "Active Hub" },
      { name: "Hamilton", postcodes: "ML3", responseTime: "35 - 50 Mins", status: "Active Hub" },
      { name: "Cumbernauld", postcodes: "G67 - G68", responseTime: "30 - 45 Mins", status: "Active Hub" },
    ]
  },
  {
    region: "Edinburgh & The Lothians",
    description: "Fast mobile coverage covering the Scottish capital, bypass, and connecting commuter routes.",
    hubs: [
      { name: "Edinburgh", postcodes: "EH1 - EH17", responseTime: "30 - 45 Mins", status: "Active Hub" },
      { name: "Livingston", postcodes: "EH53 - EH54", responseTime: "35 - 50 Mins", status: "Active Hub" },
      { name: "Dunfermline & South Fife", postcodes: "KY11 - KY12", responseTime: "40 - 55 Mins", status: "Active Hub" },
    ]
  },
  {
    region: "Central Scotland & Forth Valley",
    description: "Key junction coverage for M8, M9, M80 and central industrial and residential corridors.",
    hubs: [
      { name: "Stirling", postcodes: "FK7 - FK9", responseTime: "35 - 50 Mins", status: "Active Hub" },
      { name: "Falkirk", postcodes: "FK1 - FK2", responseTime: "30 - 45 Mins", status: "Active Hub" },
    ]
  },
  {
    region: "Tayside, Angus & The North East",
    description: "Scheduled and emergency mobile tyre support across Eastern Scotland.",
    hubs: [
      { name: "Dundee", postcodes: "DD1 - DD5", responseTime: "45 - 60 Mins", status: "Active Hub" },
      { name: "Perth", postcodes: "PH1 - PH2", responseTime: "40 - 55 Mins", status: "Active Hub" },
      { name: "Aberdeen", postcodes: "AB10 - AB25", responseTime: "45 - 60 Mins", status: "Active Hub" },
    ]
  },
  {
    region: "Ayrshire & South West",
    description: "Coastal and A77 corridor coverage for passenger vehicles and commercial fleets.",
    hubs: [
      { name: "Ayr", postcodes: "KA7 - KA8", responseTime: "40 - 55 Mins", status: "Active Hub" },
      { name: "Kilmarnock", postcodes: "KA1 - KA3", responseTime: "35 - 50 Mins", status: "Active Hub" },
    ]
  }
];

export const majorCorridors = [
  { name: "M8 Motorway", segment: "Edinburgh - Livingston - Glasgow - Greenock" },
  { name: "M74 / A74(M)", segment: "Glasgow - Hamilton - Motherwell - South Corridor" },
  { name: "M9 & M80", segment: "Stirling - Falkirk - Cumbernauld links" },
  { name: "M90 & A9", segment: "Queensferry Crossing - Dunfermline - Perth corridor" },
  { name: "A77 Corridor", segment: "Glasgow south to Kilmarnock & Ayr" }
];

