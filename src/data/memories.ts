import hala_madrid from "../assets/images/hala_madrid.jpeg"
import madrid1 from "../assets/images/realMadrid1.jpeg";
import madrid2 from "../assets/images/realMadrid2.jpeg";
import madrid3 from "../assets/images/realMadrid3.jpeg";
import bikeGrp from "../assets/images/bike_grp_photo.jpeg";
import granadaBike1 from "../assets/images/granadaBike1.jpeg";
import granadaBike2 from "../assets/images/granadaBike2.jpeg";
import granadaFirstMeal from "../assets/images/granada_first_meal.jpeg"; 
import granadaFirstMeal2 from "../assets/images/granada_first_meal2.jpeg";       

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
    image: [hala_madrid, madrid1, madrid2, madrid3],
    date: "2025-05-14",
  },
  {
    id: "2",
    title: "Exploring Granada OutSkirts",
    country: "Granada",
    description:
      "Wandered through the beautiful outskirts of Granada, enjoying the scenic views and rich history through mountain biking.",
    image: [bikeGrp, granadaBike1, granadaBike2],
    date: "2025-05-03",
  },
  {
    id: "3",
    title: "First Meal in Granada",
    country: "Granada",
    description:
      "Enjoy local Andalusian cuisine at a charming restaurant in Granada, beside the Alhambra. Love the tapas culture and affordable prices here!",
    image: [granadaFirstMeal, granadaFirstMeal2],
    date: "2025-05-02",
  },
];