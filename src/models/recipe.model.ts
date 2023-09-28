import { Ingredient } from "./ingredient.model";

export interface NewRecipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

export interface Recipe extends NewRecipe {
  id: string;
}
