"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { getRecipesWithImages } from "@/lib/supabase"
import type { SavedRecipe } from "@/types/recipe"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 2100 : 1800  // Larger cylinder = larger face width for each image
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.015)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.01,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 60,
                mass: 0.15,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.img
                src={imgUrl}
                alt={`Recipe ${i + 1}`}
                layoutId={`img-${imgUrl}`}
                className="pointer-events-none  w-full rounded-xl object-cover aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`
function ThreeDPhotoCarousel() {
  const [activeRecipe, setActiveRecipe] = useState<SavedRecipe | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [cards, setCards] = useState<string[]>([]) // Image URLs for carousel
  const [recipeMap, setRecipeMap] = useState<Map<string, SavedRecipe>>(new Map()) // Map image URL to recipe
  const [isLoading, setIsLoading] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    async function loadRecipes() {
      try {
        setIsLoading(true)

        // Fetch recipes with images from database
        const recipes = await getRecipesWithImages(15)

        console.log(`Loaded ${recipes.length} recipes with images`)

        // Extract image URLs for carousel
        const imageUrls = recipes.map(r => r.image_url).filter((url): url is string => url !== null)

        // Create a map of image URL -> recipe for quick lookup
        const map = new Map<string, SavedRecipe>()
        recipes.forEach(recipe => {
          if (recipe.image_url) {
            map.set(recipe.image_url, recipe)
          }
        })

        setCards(imageUrls)
        setRecipeMap(map)

        console.log("Recipes loaded:", recipes.map(r => r.recipe_data?.title))
      } catch (error) {
        console.error("Error loading recipes:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadRecipes()
  }, [])

  const handleClick = (imgUrl: string) => {
    // Look up the recipe by image URL
    const recipe = recipeMap.get(imgUrl)
    if (recipe) {
      setActiveRecipe(recipe)
      setIsCarouselActive(false)
      controls.stop()
    }
  }

  const handleClose = () => {
    setActiveRecipe(null)
    setIsCarouselActive(true)
  }

  if (isLoading) {
    return (
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center bg-mauve-dark-2">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/70">Loading recipes...</p>
        </div>
      </div>
    )
  }

  if (cards.length === 0) {
    return (
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center bg-mauve-dark-2">
        <p className="text-white/70">No recipes found</p>
      </div>
    )
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            transition={transitionOverlay}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              transition={{ delay: 0.1 }}
            >
              {/* Recipe Card Content - We'll create this component next */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {activeRecipe.recipe_data?.title || 'Untitled Recipe'}
                    </h1>
                    {activeRecipe.recipe_data?.deck && (
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {activeRecipe.recipe_data.deck}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                {/* Recipe Image */}
                {activeRecipe.image_url && (
                  <img
                    src={activeRecipe.image_url}
                    alt={activeRecipe.recipe_data?.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                )}

                {/* Recipe Metadata */}
                <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Servings</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {activeRecipe.recipe_data?.servings || 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Difficulty</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                      {activeRecipe.recipe_data?.difficulty || 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Prep Time</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {activeRecipe.recipe_data?.prepTime || 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cook Time</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {activeRecipe.recipe_data?.cookTime || 'N/A'}
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                {activeRecipe.recipe_data?.ingredients && activeRecipe.recipe_data.ingredients.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ingredients</h2>
                    <ul className="space-y-2">
                      {activeRecipe.recipe_data.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-baseline text-gray-700 dark:text-gray-300">
                          <span className="mr-2">•</span>
                          <span>
                            {ing.weight && <strong>{ing.weight}</strong>}
                            {ing.weight && ing.volume && ' / '}
                            {ing.volume && <strong>{ing.volume}</strong>}
                            {(ing.weight || ing.volume) && ' '}
                            {ing.name}
                            {ing.notes && <span className="text-gray-500 dark:text-gray-400 ml-2">({ing.notes})</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Instructions */}
                {activeRecipe.recipe_data?.instructions && activeRecipe.recipe_data.instructions.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Instructions</h2>
                    <ol className="space-y-4">
                      {activeRecipe.recipe_data.instructions.map((step) => (
                        <li key={step.stepNumber} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                            {step.stepNumber}
                          </span>
                          <div className="flex-1">
                            <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                            {step.timing && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">⏱️ {step.timing}</p>
                            )}
                            {step.temperature && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">🌡️ {step.temperature}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
