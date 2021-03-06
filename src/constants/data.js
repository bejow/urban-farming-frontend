const WATER_CONSUMPTION_DATA = [
    {
      name: '01.04.2019', litre: 2.3, pv: 2400, amt: 2400,
    },
    {
      name: '02.04.2019', litre: 2.5, pv: 1398, amt: 2210,
    },
    {
      name: '03.04.2019', litre: 2.6, pv: 9800, amt: 2290,
    },
    {
      name: '04.04.2019', litre: 2.4, pv: 3908, amt: 2000,
    },
    {
      name: '05.04.2019', litre: 2.4, pv: 4800, amt: 2181,
    },
    {
      name: '06.04.2019', litre: 2.3, pv: 3800, amt: 2500,
    },
    {
      name: '07.04.2019', litre: 2.5, pv: 4300, amt: 2100,
    },
  ];

const LEADERBOARD_DATA = {
  0:{
    value: -42,
    name: "Lazy Jack",
    rank: 6,
    position: "Home Office"
  },
  1:{
    value: -17,
    name: "Dorian",
    rank: 5,
    position: "Meme Department"
  },
  2:{
    value: 74,
    name: "Vero",
    rank: 4,
    position: "Cultural Developement"
  },
  3:{
    value: 86,
    name: "Ivo",
    rank: 3,
    position: "PR and Communication"
  },
  4:{
    value: 89,
    name: "Ben",
    rank: 2,
    position: "Head of IT"
  },
  7:{
    value: -666,
    name: "D. Trump",
    rank: 1,
    position: "King of Twitter"
  },  8:{
    value: 98,
    name: "Tim",
    rank: 1,
    position: "Art Director"
  }
}

const PLAN_EXAMPLE_DATA_MARCH = [
  {
      day:"2nd March",
      names: ["Tim", "Marcel Davis"],
      tasks: ["Take care of salad", "Cut the salad"]
  },    {
      day:"5th March",
      names: ["Dude"],
      tasks: ["Send Nudes", "Dank", "Memes"]
  }, {
      day:"9th March",
      names: ["Karl", "Jennifer", "William"],
      tasks: ["Plant new Salad", "Clean Pump"]
  },    {
      day:"14th March",
      names: ["Team"],
      tasks: ["Salad Party!!!"]
  },    {
      day:"18th March",
      names: ["Team"],
      tasks: ["Chill", "Get Rest"]
  },   {
      day:"24th March",
      names: ["Jack", "Jim"],
      tasks: [ "Clean the System","Water refill", "Be Awesome"]
  },    {
      day:"29th March",
      names: ["Team"],
      tasks: ["Salad Event!!!"]
  },    
]

const PLAN_EXAMPLE_DATA_APRIL = [
  {
      day:"3rd April",
      names: ["Jim", "Yee"],
      tasks: ["Memes", "Water refill"]
  },    {
      day:"7th April",
      names: ["Kim", "Karla"],
      tasks: ["Cut the Salad"]
  },    {
      day:"11th April",
      names: ["Cindy"],
      tasks: ["Refill nutritions", "Clean the System"]
  },    {
      day:"15th April",
      names: ["Hans", "Gustav"],
      tasks: ["Day off"]
  },    {
      day:"20th April",
      names: ["Dr. Mad", "Prof. Sad"],
      tasks: ["Clean the System", "Refill water"]
  },    {
      day:"21th April",
      names: ["Chef"],
      tasks: ["Salad Party!!!"]
  },    {
      day:"24th April",
      names: ["Chef"],
      tasks: ["Chill", "Get Rest"]
  },
]

const PLAN_EXAMPLE_DATA_MAY = [
  {
      day:"Today",
      names: ["Tiffany", "John"],
      tasks: ["Oxygen refill", "Toilett refill"]
  },    {
      day:"Tomorrow",
      names: ["Ben", "George"],
      tasks: ["Cut the Salad"]
  },    {
      day:"3rd May",
      names: ["Lonely Pete"],
      tasks: ["Water refill", "Clean the System", "Be Sad"]
  },    {
      day:"4th May",
      names: ["Sophie", "Kevin"],
      tasks: ["Oxygen refill"]
  },    {
      day:"5th May",
      names: ["Karl", "Jennifer", "William"],
      tasks: ["Plant new Salad", "Clean Pump"]
  },    {
      day:"7th May",
      names: ["Team"],
      tasks: ["Salad Party!!!"]
  },    {
      day:"8th May",
      names: ["Team"],
      tasks: ["Chill", "Get Rest"]
  },
]

const PLAN_EXAMPLE_DATA_JUNE = [
     {
      day:"1st June",
      names: ["Lonely Pete"],
      tasks: ["Water refill", "Clean the System", "Be Sad"]
  },    {
      day:"7th June",
      names: ["Sophie", "Kevin"],
      tasks: ["Oxygen refill"]
  },{
      day:"10th June",
      names: ["Tiffany", "John"],
      tasks: ["Oxygen refill"]
  },    {
      day:"12th June",
      names: ["Ben", "George"],
      tasks: ["Cut the Salad"]
  } ,   {
      day:"13th June",
      names: ["Karl", "Jennifer", "William"],
      tasks: ["Plant new Salad", "Clean Pump"]
  }
]

const ARTICLE_TITLE = "Hydroponics explained!";
const ARTICLE_TEXT = "Hydroponics, by definition, is a method of growing plants in a water based, nutrient rich solution. Hydroponics does not use soil, instead the root system is supported using an inert medium such as perlite, rockwool, clay pellets, peat moss, or vermiculite. The basic premise behind hydroponics is to allow the plants roots to come in direct contact with the nutrient solution, while also having access to oxygen, which is essential for proper growth.\n\nI highly recommend reading through this guide and learning as much as you can about hydroponics before you start your garden. Even if you don’t plan on growing with hydroponics, you can still learn a lot about what plants need in their various stages of growth by reading about the basics of hydroponics.\n\nAdvantagesGrowing with hydroponics comes with many advantages, the biggest of which is a greatly increased rate of growth in your plants. With the proper setup, your plants will mature up to 25% faster and produce up to 30% more than the same plants grown in soil.\n\nYour plants will grow bigger and faster because they will not have to work as hard to obtain nutrients. Even a small root system will provide the plant exactly what it needs, so the plant will focus more on growing upstairs instead of expanding the root system downstairs.\n\nAll of this is possible through careful control of your nutrient solution and pH levels. A hydroponic system will also use less water than soil based plants because the system is enclosed, which results in less evaporation. Believe it or not, hydroponics is better for the environment because it reduces waste and pollution from soil runoff.\n\nDisadvantages Despite the fact that a hydroponics system has so many advantages, there are actually a few disadvantages as well. The biggest factor for most people is that a quality hydroponics system of any size will cost more than its soil counterpart. Then again, dirt isn’t exactly expensive and you get what you pay for.\n\nA large scale hydroponics system can take a lot of time to setup if you aren’t the most experienced grower. Plus, managing your hydroponics system will take a lot of time as well. You will have to monitor and balance your pH and nutrient levels on a daily basis.\n\nThe greatest risk with a hydroponics system is that something like a pump failure can kill off your plants within hours depending on the size of your system. They can die quickly because the growing medium can’t store water like soil can, so the plants are dependent on a fresh supply of water.\n\nTypes of Hydroponic SystemsThe cool thing about hydroponics is that there are many different types of hydroponics systems available. Some of the best hydroponic systems on the market combine different types of hydroponics into one hybrid hydroponic system. Hydroponics is unique in that there are multiple techniques you can use to get the nutrient solution to your plants."

const PLANT_LIST_DATA = [
  {
    id: "42",
    name: "Belgian Endive",
    description: "Variety of Chicory"
  },
  {
    id: "1337",
    name: "Summercrisp",
    description: "Batavian or French crisp"
  },
  {
    id: "666",
    name: "Butterhead",
    description: "Boston or Bibb lettuce"
  },
  {
    id: "404",
    name: "Lollo Rosso",
    description: "Hydroponics All of this is pos"
  },
  {
    id: "200",
    name: "Celtuce",
    description: "Stem lettuce / Chinese lettuce"
  },
]

const PLANT_TITLE = "Belgian Endive";
const PLANT_SUBTITLE = "Variety of Chicory";
const PLANT_WATER_INFO = "Can save up to 120 liters water";
const PLANT_SUN_INFO = "6–8 hours per day";
const PLANT_SEASON_INFO = "Season in supermarket:\nJune – September";
const PLANT_TIME_INFO = "6 days average to grow";
const PLANT_NAME_INFO = "Alternate names: Chioggia, red chicory, red leaf chicory, red Italian chicory";
const PLANT_CHARACTERISTIC_INFO = 'Characteristics: Pronounced "rah-dick-ee-yo," you can find this deep-red-purple §vegetable sold either as a compact round head, as pictured above, or shaped like its relative, endive. The bright coloring makes it stand out. When cooked, the red-purple hue turns brown and what was once bitter becomes sweet.';

const HERB_TIMESPAN = {
  start: {
      hour: 8,
      minute: 0
  },
  stop: {
      hour: 18,
      minute: 30
  }
}

const LEAFY_TIMESPAN = {
    start: {
      hour: 10,
      minute: 0
  },
  stop: {
      hour: 22,
      minute: 15
  }
}

const NIGHT_TIMESPAN = {
    start: {
      hour: 22,
      minute: 0
  },
  stop: {
      hour: 6,
      minute: 0
  }
}

const DEFAULT_TIMESPAN = {
  start: {
      hour: 8,
      minute: 0
  },
  stop: {
        hour: 12,
        minute: 0
  }
}

const LIGHT_TIP = "Pick a time of the day when you'd like your system to be light up.\nBe aware that it should be at least 8 hours per day."
const WATER_TIP = "Pick a time of the day when you'd like your system to pump water.\nBe aware that it should be at least 8 hours per day."

export {
    LIGHT_TIP,
    WATER_TIP,
    DEFAULT_TIMESPAN,
    HERB_TIMESPAN,
    LEAFY_TIMESPAN,
    NIGHT_TIMESPAN,
    WATER_CONSUMPTION_DATA,
    LEADERBOARD_DATA,
    PLAN_EXAMPLE_DATA_APRIL,
    PLAN_EXAMPLE_DATA_JUNE,
    PLAN_EXAMPLE_DATA_MARCH,
    PLAN_EXAMPLE_DATA_MAY,
    ARTICLE_TEXT,
    ARTICLE_TITLE,
    PLANT_LIST_DATA,
    PLANT_CHARACTERISTIC_INFO,
    PLANT_NAME_INFO,
    PLANT_SEASON_INFO,
    PLANT_SUBTITLE,
    PLANT_SUN_INFO,
    PLANT_TIME_INFO,
    PLANT_WATER_INFO,
    PLANT_TITLE
}