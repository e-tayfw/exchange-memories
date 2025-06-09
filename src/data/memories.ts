export interface Memory {
    id: string;
    title: string;
    country: string;
    description: string;
    image: string[];
    date: string;
}

export const memories: Memory[] = [
  {
    id: "1",
    title: "First Football Match in Madrid",
    country: "Madrid",
    description:
      "Attended my first football match in Madrid, witnessing the passion of the fans and the excitement of the game.",
    image: [
      "/src/assets/images/hala_madrid.jpeg",
      "/src/assets/images/realMadrid1.jpeg",
      "/src/assets/images/realMadrid2.jpeg",
      "/src/assets/images/realMadrid3.jpeg",
    ],
    date: "2025-05-14",
  },
  {
    id: "2",
    title: "Exploring Granada OutSkirts",
    country: "Granada",
    description:
      "Wandered through the beautiful outskirts of Granada, enjoying the scenic views and rich history through mountain biking.",
    image: ["/src/assets/images/bike_grp_photo.jpeg",
        "/src/assets/images/granadaBike1.jpeg",
        "/src/assets/images/granadaBike2.jpeg"
    ],
    date: "2025-05-03",
  },
  {
    id: "3",
    title: "First Meal in Granada",
    country: "Granada",
    description:
      "Enjoy local Andalusian cuisine at a charming restaurant in Granada, beside the Alhambra. Love the tapas culture and affordable prices here!",
    image: ["/src/assets/images/granada_first_meal.jpeg",
        "/src/assets/images/granada_first_meal2.jpeg",
    ],
    date: "2025-05-02",
  },
];