//  Objects
 /*Create 3 realistic objects with at least 10 key-value pairs
One of the 3 objects should contain a key with another object value which in turn has 5 key-value pairs */

const footballClub={
    name: 'Arsenal',
    nickName: 'The Gunners',
    foundingYear: 1886,
    location: 'London',
    clubOwner: 'Stan Kroenke',
    recordHighestGoalScorer: 'Thierry Henry',
    currentCoach: 'Mikel Arteta',
    kitSponsor: 'Adidas',
    clubHonors: ['premierLeague','faCup','communityShield'],
  
    majorrivals: 'Tottenham HotSpur',
       
      // Object Value in an object.
    stadium: {
      name: 'Emirates Stadium',
      location:'North London',
      yearBuilt:2004,
      capacityNumber:60260,
      constructionCost:'£125000' 
   }
  
  }
   console.log(footballClub.currentCoach)
   console.log(footballClub.stadium.capacityNumber)
  
  
  //  Object 2
  
  const movie={
    name:'The Avengers',
    producer:'Kevin Feige',
    productionCompany:'Marvel Studios',
    releasedate: 'May 4, 2012',
    movieGenre:'Action',
    movieSequels:['Age of Ultron','Ifinity War', 'Endgame'],
    movieLanguage:'English',
    movieBudget:'$220,000,000' ,
    movieRunningTime:'143 minutes',
    allMaleCast:false
    }
  
    console.log(movie.name)
    console.log(movie.releasedate)
  
  
    // Object three
  
  const whaleSpecie={
    nameSpecie: 'Blue whale',
    kingdom: 'Animalia',
    naturalHabitatinWater: true,
    averageLifeSpan: '85years',
    conservationStatus: 'Endangered',
    averageBodyMass: '75kg',
    averageBodyLength:'25m',
    swimSpeed:'74.1km/h',
    walksOnFourLegs:false,
    mammalAnimal:true
    }
  
    console.log(whaleSpecie.nameSpecie)
    console.log(whaleSpecie.mammalAnimal)
  
  
   /* Create 3 realistic arrays with at least 3 other realistic arrays as elements
  Create an array with two realistic objects as its elements */
  
  // An array of Car brands
  
   const carBrands = [
     ['Toyota Camry','Toyota Corolla','Toyota Yaris'],['Ford Everest', 'Ford Expediction', 'Ford Explorer'],['Hyundai Elantra', 'Hyundai Tuscon', 'Hyundai Santro']
  
    ]
  
    console.log(carBrands[0][2])
    console.log(carBrands[1][1])
    console.log(carBrands[2][2])
  
  // An array of colour types: Primary, Secondary and Tetiary
   const colourTypes = [
     ['red', 'yellow','blue'],['green','orange','purple'],['yellow-orange','red-purple','blue-green']
     ]
  
     console.log(colourTypes[2][0])
     console.log(colourTypes[0][2])
     console.log(colourTypes[1][2])
  
  // An array of types of fruit: Citrus fruit, stone fruit, Berries.
  
   const typesOfFruit = [
     ['oranges', 'grapefruits','limes'],['apricots', 'peaches', 'plums'],['strawberries', 'raspberries','blueberries']
   ] 
   console.log(typesOfFruit[0][0])
   console.log(typesOfFruit[1][1])
   console.log(typesOfFruit[2][2])
  
  // Create an array with two realistic objects as its elements
   const webDevelopment=[
    {
    track: 'Frontend',
    programmingLanguages: 'HTML CSS JavaScript',
    frameWorks: 'React Vue.js Redux'
  },
  
  {
    track:'Backend',
    programmingLanguages:'Python PHP  JavaScript',
    frameWorks:'Node.js Laravel Django'
  }
  ]
  
  console.log(webDevelopment[0].track)
  console.log(webDevelopment[1])