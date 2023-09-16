import { Recipe } from "src/models/recipe.model";

export const recipeMock1: Recipe = {
  id: "1",
  name: "A Delicious Recipe",
  description: "This is simply a test recipe",
  imagePath: "assets/images/recipe-1.jpg",
  ingredients: [
    {
      name: "Chicken",
      amount: 8,
    },
    {
      name: "Haricots Verts",
      amount: 20,
    },
  ],
};

export const recipeMock2: Recipe = {
  id: "2",
  name: "A Nice Recipe",
  description: "This is simply a test recipe",
  imagePath: "assets/images/recipe-2.jpg",
  ingredients: [
    {
      name: "Bread",
      amount: 8,
    },
    {
      name: "Tomato",
      amount: 16,
    },
    {
      name: "Fries",
      amount: 30,
    },
  ],
};
