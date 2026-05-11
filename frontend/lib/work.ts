export const workData = [
  { 
    id: "1", 
    title: "A Symphony of Light", 
    category: "Weddings", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    thumbnail: "/assets/work-1.jpg" 
  },
  { 
    id: "2", 
    title: "The Next Era", 
    category: "Corporate", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    thumbnail: "/assets/work-2.jpg" 
  },
  { 
    id: "3", 
    title: "Echoes in the Valley", 
    category: "Music Videos", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    thumbnail: "/assets/work-3.jpg" 
  },
  { 
    id: "4", 
    title: "Summit 2026", 
    category: "Events", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    thumbnail: "/assets/work-4.jpg" 
  },
  { 
    id: "5", 
    title: "Vogue Essence", 
    category: "Commercials", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    thumbnail: "/assets/work-5.jpg" 
  },
  { 
    id: "6", 
    title: "Eternal Vows", 
    category: "Weddings", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
    thumbnail: "/assets/work-6.jpg" 
  }
];

export const workCategories = ["All", ...Array.from(new Set(workData.map((work) => work.category)))];
