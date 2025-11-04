import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://expztarfiutsexcdsout.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cHp0YXJmaXV0c2V4Y2Rzb3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4Nzk4NTgsImV4cCI6MjA3NTQ1NTg1OH0.unzr0P4WdanpketzRp4wRgHOzZ3p7AOViRKB78NCm4U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Get public URL for a file in Supabase Storage
 * @param bucket - Storage bucket name
 * @param path - File path in the bucket
 * @returns Public URL string
 */
export function getPublicUrl(bucket: string, path: string): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

/**
 * List all files in a Supabase Storage bucket
 * @param bucket - Storage bucket name
 * @param path - Optional folder path within the bucket
 * @returns Array of file objects
 */
export async function listFiles(bucket: string, path: string = '') {
  const { data, error } = await supabase.storage.from(bucket).list(path)

  if (error) {
    console.error('Error listing files:', error)
    return []
  }

  return data || []
}

/**
 * Get all recipe image URLs from the recipe-images bucket
 * @returns Array of public URLs for all recipe images
 */
export async function getRecipeImageUrls(): Promise<string[]> {
  const files = await listFiles('recipe-images')

  // Filter for image files only
  const imageFiles = files.filter(file =>
    file.name.match(/\.(png|jpg|jpeg|webp|gif)$/i)
  )

  // Generate public URLs
  return imageFiles.map(file => getPublicUrl('recipe-images', file.name))
}

/**
 * Fetch recipes with their images from saved_recipes table
 *
 * Note: This requires RLS policies to allow read access. Options:
 * 1. User must be authenticated (RLS policies allow users to read their own recipes)
 * 2. Add public read policy: CREATE POLICY "Allow public read" ON saved_recipes FOR SELECT USING (true);
 * 3. Temporarily disable RLS for testing: ALTER TABLE saved_recipes DISABLE ROW LEVEL SECURITY;
 *
 * @param limit - Maximum number of recipes to fetch (default: 15)
 * @returns Array of saved recipes with image URLs
 */
export async function getRecipesWithImages(limit: number = 15) {
  const { data, error } = await supabase
    .from('saved_recipes')
    .select('id, recipe_data, image_url, category, created_at')
    .not('image_url', 'is', null) // Only get recipes with images
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching recipes:', error)
    console.error('RLS might be blocking access. See function docs for solutions.')
    return []
  }

  return data || []
}
