export interface Recipe {
  id?: string; // Optional - only present after recipe is saved to database
  title: string;
  deck?: string; // Optional 25-40 word subheading/tagline
  category: 'Appetizers' | 'Soups' | 'Salads' | 'Main Dishes' | 'Side Dishes' | 'Desserts' | 'Breads' | 'Pastry';

  // Recipe metadata
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: string;
  cookTime: string;
  totalTime: string;

  // Content sections
  introduction: string;
  historicalContext?: string;
  tips: string[];

  // Equipment and prep
  equipment: string[];
  advancedPreparation?: string[];

  // Ingredients
  ingredients: Array<{
    name: string;
    weight?: string;
    volume?: string;
    notes?: string;
  }>;

  // Instructions
  instructions: Array<{
    stepNumber: number;
    description: string;
    timing?: string;
    temperature?: string;
  }>;

  // Nutritional information (per serving)
  nutrition: {
    calories: number | 'N/A';
    totalFat: number | 'N/A';
    saturatedFat: number | 'N/A';
    cholesterol: number | 'N/A';
    sodium: number | 'N/A';
    totalCarbohydrates: number | 'N/A';
    dietaryFiber: number | 'N/A';
    sugars: number | 'N/A';
    protein: number | 'N/A';
  };
  nutritionNotes?: string;

  // User metadata
  savedAt?: string;
  createdAt?: string;
  modifiedAt?: string;

  // Image metadata
  imageUrl?: string;
  imageCategory?: ImageCategory;
}

export type ImageCategory = 'baked' | 'hot' | 'cold' | 'fried' | 'grilled' | 'raw' | 'dessert' | 'beverage';

/**
 * Saved recipe from Supabase database
 */
export interface SavedRecipe {
  id: string;
  user_id: string;
  recipe_data: Recipe;
  category: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}
