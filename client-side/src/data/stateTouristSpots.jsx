const StateTouristSpots = {
  "uttar-pradesh": [
    {
      id: 1,
      name: "Taj Mahal",
      image: "/taj-mahal.jpg",
      description: "Iconic white marble mausoleum and one of the New Seven Wonders of the World.",
      bestTime: "October to March",
      location: "Agra",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 2,
      name: "Varanasi Ghats",
      image: "/varanasi-ghats.jpg",
      description: "Sacred riverfront steps leading to the Ganges, center of spiritual life in India.",
      bestTime: "October to March",
      location: "Varanasi",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 3,
      name: "Chunar Fort",
      image: "/chunar-fort.jpg",
      description: "Historic fort with panoramic views of the Ganges, rich in Mughal and British history.",
      bestTime: "November to February",
      location: "Mirzapur",
      isFamous: false,
      isLocalPick: true
    }
  ],
  "kerala": [
    {
      id: 4,
      name: "Backwaters of Alleppey",
      image: "/alleppey-backwaters.jpg",
      description: "Network of picturesque canals, lagoons and lakes beside the Arabian Sea.",
      bestTime: "September to March",
      location: "Alappuzha",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 5,
      name: "Munnar Tea Gardens",
      image: "/munnar-tea.jpg",
      description: "Rolling hills covered with endless tea plantations in a cool climate.",
      bestTime: "August to May",
      location: "Munnar",
      isFamous: true,
      isLocalPick: false
    }
  ],
  "rajasthan": [
    {
      id: 6,
      name: "Amber Fort",
      image: "/amber-fort.jpg",
      description: "Magnificent fort with a blend of Hindu and Mughal architecture, overlooking Maota Lake.",
      bestTime: "October to March",
      location: "Jaipur",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 7,
      name: "Jaisalmer Desert Camp",
      image: "/jaisalmer-camp.jpg",
      description: "Experience the Thar Desert with camel rides and cultural performances under the stars.",
      bestTime: "November to February",
      location: "Jaisalmer",
      isFamous: true,
      isLocalPick: true
    }
  ],
  "jammu-kashmir": [
    {
      id: 8,
      name: "Dal Lake",
      image: "/dal-lake.jpg",
      description: "Scenic lake in Srinagar known for houseboats, shikaras, and Himalayan views.",
      bestTime: "May to October",
      location: "Srinagar",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 9,
      name: "Gulmarg",
      image: "/gulmarg.jpg",
      description: "Popular skiing and snowboarding destination with meadows and mountain views.",
      bestTime: "December to March",
      location: "Baramulla",
      isFamous: true,
      isLocalPick: false
    }
  ],
  "tamil-nadu": [
    {
      id: 10,
      name: "Meenakshi Temple",
      image: "/meenakshi-temple.jpg",
      description: "Intricately carved temple dedicated to goddess Meenakshi, a Dravidian architectural marvel.",
      bestTime: "October to March",
      location: "Madurai",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 11,
      name: "Ooty",
      image: "/ooty.jpg",
      description: "Hill station in the Western Ghats known for cool climate and tea plantations.",
      bestTime: "April to June",
      location: "Nilgiris",
      isFamous: true,
      isLocalPick: true
    }
  ],
  "punjab": [
    {
      id: 12,
      name: "Golden Temple",
      image: "/golden-temple.jpg",
      description: "Sacred Sikh temple surrounded by a serene lake, symbol of peace and spirituality.",
      bestTime: "October to March",
      location: "Amritsar",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 13,
      name: "Wagah Border Ceremony",
      image: "/wagah-border.jpg",
      description: "Daily flag-lowering ceremony at India-Pakistan border showcasing patriotic fervor.",
      bestTime: "All year",
      location: "Amritsar",
      isFamous: true,
      isLocalPick: false
    }
  ],
  "west-bengal": [
    {
      id: 14,
      name: "Sundarbans",
      image: "/sundarbans.jpg",
      description: "Largest mangrove forest in the world and home to the elusive Bengal tiger.",
      bestTime: "September to March",
      location: "South 24 Parganas",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 15,
      name: "Darjeeling",
      image: "/darjeeling.jpg",
      description: "Colonial-era hill station known for tea, Himalayan views, and the Toy Train.",
      bestTime: "March to May, October to November",
      location: "Darjeeling",
      isFamous: true,
      isLocalPick: true
    }
  ],
  "madhya-pradesh": [
    {
      id: 16,
      name: "Khajuraho Temples",
      image: "/khajuraho.jpg",
      description: "UNESCO World Heritage site with intricate carvings and erotic sculptures.",
      bestTime: "October to March",
      location: "Chhatarpur",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 17,
      name: "Bandhavgarh National Park",
      image: "/bandhavgarh.jpg",
      description: "Tiger reserve with high density of Bengal tigers and rich biodiversity.",
      bestTime: "October to June",
      location: "Umaria",
      isFamous: true,
      isLocalPick: true
    }
  ],
  "maharashtra": [
    {
      id: 18,
      name: "Ajanta & Ellora Caves",
      image: "/ellora-caves.jpg",
      description: "Ancient rock-cut caves showcasing Buddhist, Hindu, and Jain monuments.",
      bestTime: "November to March",
      location: "Aurangabad",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 19,
      name: "Marine Drive",
      image: "/marine-drive.jpg",
      description: "Iconic sea-facing boulevard known as the Queen's Necklace of Mumbai.",
      bestTime: "October to February",
      location: "Mumbai",
      isFamous: true,
      isLocalPick: true
    }
  ],
  "karnataka": [
    {
      id: 20,
      name: "Hampi",
      image: "/hampi.jpg",
      description: "Ruins of Vijayanagar Empire with striking temples and boulder landscapes.",
      bestTime: "October to February",
      location: "Bellary",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 21,
      name: "Coorg",
      image: "/coorg.jpg",
      description: "Lush coffee plantations, waterfalls, and misty hills in the Western Ghats.",
      bestTime: "October to March",
      location: "Kodagu",
      isFamous: true,
      isLocalPick: false
    }
  ],
  "uttarakhand": [
    {
      id: 22,
      name: "Valley of Flowers",
      image: "/valley-of-flowers.jpg",
      description: "UNESCO-listed national park with alpine flowers and Himalayan beauty.",
      bestTime: "July to September",
      location: "Chamoli",
      isFamous: true,
      isLocalPick: false
    },
    {
      id: 23,
      name: "Rishikesh",
      image: "/rishikesh.jpg",
      description: "Yoga capital of the world and gateway to the Himalayas on the Ganges River.",
      bestTime: "September to November, March to May",
      location: "Dehradun",
      isFamous: true,
      isLocalPick: true
    }
  ],
  "himachal-pradesh": [
    {
      id: 24,
      name: "Manali",
      image: "/manali.jpg",
      description: "Popular hill station with snow-capped peaks, adventure sports and serene valleys.",
      bestTime: "October to February",
      location: "Kullu",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 25,
      name: "Spiti Valley",
      image: "/spiti-valley.jpg",
      description: "Cold desert mountain valley with monasteries and dramatic Himalayan scenery.",
      bestTime: "May to October",
      location: "Lahaul and Spiti",
      isFamous: true,
      isLocalPick: false
    }
  ],
  "goa": [
    {
      id: 26,
      name: "Baga Beach",
      image: "/baga-beach.jpg",
      description: "Lively beach with nightlife, water sports and beach shacks.",
      bestTime: "November to February",
      location: "North Goa",
      isFamous: true,
      isLocalPick: true
    },
    {
      id: 27,
      name: "Dudhsagar Falls",
      image: "/dudhsagar.jpg",
      description: "Majestic four-tiered waterfall located on the Mandovi River in the Western Ghats.",
      bestTime: "October to February",
      location: "South Goa",
      isFamous: true,
      isLocalPick: false
    }
  ]
};

export default StateTouristSpots;