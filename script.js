const Spaces = {
    livingRoom: "Living Room",
    bedroom: "Bedroom",
    kitchen: "Kitchen",
    diningRoom: "Dining Room",
    bathroom: "Bathroom",
    homeOffice: "Home Office",
    gym: "Gym",
    yogaStudio: "Yoga Studio",
    artStudio: "Art Studio",
    library: "Library",
    playroom: "Playroom",
    wineCellar: "Wine Cellar",
    homeTheater: "Home Theater",
    gameRoom: "Game Room",
    sunroom: "Sunroom",
    patio: "Patio",
    balcony: "Balcony",
    rooftopTerrace: "Rooftop Terrace",
    pool: "Pool",
    hotTub: "Hot Tub",
    sauna: "Sauna",
    steamRoom: "Steam Room",
    mudroom: "Mudroom",
    foyer: "Foyer",
    hallway: "Hallway",
    staircase: "Staircase",
    loft: "Loft",
    attic: "Attic",
    basement: "Basement",
    garage: "Garage",
    workshop: "Workshop",
    gardenShed: "Garden Shed",
    greenhouse: "Greenhouse",
    barn: "Barn",
    stable: "Stable",
    warehouse: "Warehouse",
    factory: "Factory",
    laboratory: "Laboratory",
    classroom: "Classroom",
    lectureHall: "Lecture Hall",
    conferenceRoom: "Conference Room",
    receptionArea: "Reception Area",
    waitingRoom: "Waiting Room",
    church: "Church",
    mosque: "Mosque",
    synagogue: "Synagogue",
    temple: "Temple",
    theater: "Theater",
    concertVenue: "Concert Venue",
    nightclub: "Nightclub"
  };

  const ArchitecturalStyles = {
    colonial: "Colonial",
    victorian: "Victorian",
    artDeco: "Art Deco",
    gothic: "Gothic",
    baroque: "Baroque",
    rococo: "Rococo",
    neoclassical: "Neoclassical",
    modernist: "Modernist",
    postmodern: "Postmodern",
    brutalist: "Brutalist",
    deconstructivist: "Deconstructivist",
    international: "International",
    bauhaus: "Bauhaus",
    romanesque: "Romanesque",
    renaissance: "Renaissance",
    medieval: "Medieval",
    contemporary: "Contemporary",
    minimalist: "Minimalist",
    industrial: "Industrial",
    organic: "Organic"
  };

  const LivingSpaceDescriptors = {
    minimalist: "Minimalist",
    cozy: "Cozy",
    spacious: "Spacious",
    rustic: "Rustic",
    modern: "Modern",
    traditional: "Traditional",
    urban: "Urban",
    suburban: "Suburban",
    industrial: "Industrial",
    beachy: "Beachy",
    coastal: "Coastal",
    bohemian: "Bohemian",
    eclectic: "Eclectic",
    retro: "Retro",
    vintage: "Vintage",
    chic: "Chic",
    elegant: "Elegant",
    edgy: "Edgy",
    luxurious: "Luxurious",
    organic: "Organic"
  };
  
  // Get the button element and the prompt element
const generateButton = document.getElementById("generate-button");
const promptElement = document.getElementById("prompt");

// Add an event listener to the button
generateButton.addEventListener("click", generatePrompt);

// Generates a random text prompt using a random selection from the Spaces, ArchitecturalStyles, and LivingSpaceDescriptors arrays
function generatePrompt() {
  const spaceKeys = Object.keys(Spaces);
  const randomSpaceKey = spaceKeys[Math.floor(Math.random() * spaceKeys.length)];
  const randomSpace = Spaces[randomSpaceKey];

  const styleKeys = Object.keys(ArchitecturalStyles);
  const randomStyleKey = styleKeys[Math.floor(Math.random() * styleKeys.length)];
  const randomStyle = ArchitecturalStyles[randomStyleKey];

  const descriptorKeys = Object.keys(LivingSpaceDescriptors);
  const randomDescriptorKey = descriptorKeys[Math.floor(Math.random() * descriptorKeys.length)];
  const randomDescriptor = LivingSpaceDescriptors[randomDescriptorKey];

  const orientationSelect = document.getElementById("orientation-select");
  const orientation = orientationSelect.value;

  let orientationText = "";
  if (orientation === "portrait") {
    orientationText = " --ar 2:3";
  } else if (orientation === "landscape") {
    orientationText = " --ar 3:2";
  }

  const randomTextPrompt = `/imagine prompt: a mockup of an empty, blank poster, frame, in a ${randomDescriptor} ${randomSpace} with a ${randomStyle} architectural style empty, blank 24"x36" ray tracing, 12mm, 15mm, 18mm, f2.8 bokeh sony a9 High Quality --no text font letters ${orientationText} --v 4 `;

  console.log(randomTextPrompt);

  promptElement.textContent = randomTextPrompt;
}
