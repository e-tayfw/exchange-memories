import hala_madrid from "../assets/images/hala_madrid.jpeg"
import madrid1 from "../assets/images/realMadrid1.jpeg";
import madrid2 from "../assets/images/realMadrid2.jpeg";
import madrid3 from "../assets/images/realMadrid3.jpeg";
import bikeGrp from "../assets/images/bike_grp_photo.jpeg";
import granadaBike1 from "../assets/images/granadaBike1.jpeg";
import granadaBike2 from "../assets/images/granadaBike2.jpeg";
import granadaBike3 from "../assets/images/granadaBike3.jpeg";
import granadaFirstMeal from "../assets/images/granada_first_meal.jpeg"; 
import granadaFirstMeal2 from "../assets/images/granada_first_meal2.jpeg";       
import bodega1 from "../assets/images/bodega1.jpeg";
import bodega2 from "../assets/images/bodega2.jpeg";
import bodega3 from "../assets/images/bodega3.jpeg";
import bodega4 from "../assets/images/bodega4.jpeg";
import april10_1 from "../assets/images/april10_1.jpeg";
import april10_2 from "../assets/images/april10_2.jpeg";
import april10_3 from "../assets/images/april10_3.jpeg";
import april10_4 from "../assets/images/april10_4.jpeg";
import april10_5 from "../assets/images/april10_5.jpeg";

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
    id: "0",
    title: "Dinner Date at Bodega Los Secretos in Madrid",
    country: "Madrid",
    description: `Took a romantic dinner date at Bodega Los Secretos in Madrid, the food was amazing and worth the wait! The ambiance was wonderful with a cozy setting and atmosphere.
    The croquetas were delicious and the octopus was perfectly cooked. The service was attentive and friendly, making the experience even more enjoyable.`,
    image: [bodega1, bodega2, bodega3, bodega4],
    date: "2025-04-09",
  },
  {
    id: "1",
    title: "April 10th in Madrid",
    country: "Madrid",
    description: `Spent a lovely afternoon with birthday girl in Madrid at the beautiful Botanical Gardens in Madrid. The weather was perfect, as we were in the midst of the spring season. This means more cherry blossoms and blooming flowers.
    Everyone there was enjoying the weather, taking pictures, and relaxing in the gardens. We also had brunch near the gardens, where the food was scrumptious and the atmosphere was lively.`,
    image: [april10_1, april10_2, april10_3, april10_4, april10_5],
    date: "2025-04-10",
  },
  {
    id: "2",
    title: "First Meal in Granada",
    country: "Granada",
    description:
      "Enjoy local Andalusian cuisine at a charming restaurant in Granada, beside the Alhambra. Love the tapas culture and affordable prices here!",
    image: [granadaFirstMeal, granadaFirstMeal2],
    date: "2025-05-02",
  },
  {
    id: "3",
    title: "Mountain Biking in Granada",
    country: "Granada",
    description: `Wandered through the beautiful outskirts of Granada, enjoying the scenic views and rich history through mountain biking. It was an exhilarating, yet scary experience, as we navigated through the 
      winding paths and steep hills. The fresh air and stunning landscapes made it all worth it. We stopped at several viewpoints to take in the breathtaking scenery of the Sierra Nevada mountains and the Alhambra. We
      even had lunch at a local restaurant, where we enjoyed traditional Andalusian dishes.`,
    image: [bikeGrp, granadaBike1, granadaBike2, granadaBike3],
    date: "2025-05-03",
  },
  {
    id: "4",
    title: "First Football Match in Madrid",
    country: "Madrid",
    description: `Attended my first football match in Madrid, witnessing the passion of the fans and the excitement of the game. The atmosphere was electric as Real Madrid played against RC Mallorca at the Santiago 
      Bernabéu Stadium. The energy in the stadium was incredible, with fans cheering and chanting throughout the match. The game was close and intense, but ended in a 2-1 victory for Real Madrid as they scored
      a last-minute goal in stoppage time. It was an unforgettable experience to see the team play live and feel the passion of the fans.`,
    image: [hala_madrid, madrid1, madrid2, madrid3],
    date: "2025-05-14",
  },
];