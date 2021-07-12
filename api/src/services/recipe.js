import fetch from 'node-fetch'

export const getRandomRecipe = async () => {
  //TODO: remove API key and store in safe config
  //TODO: Modify endpoint to accept multiple recipe request/add tags/return steps
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_API_KEY}&number=1`
  )
  const data = await response.json()
  const recipeData = data.recipes[0]

  //TODO: Investigate error handling for this API

  return {
    vegetarian: recipeData.vegetarian,
    vegan: recipeData.vegan,
    glutenFree: recipeData.glutenFree,
    dairyFree: recipeData.dairyFree,
    cheap: recipeData.cheap,
    servings: recipeData.servings,
    cookTime: recipeData.readyInMinutes,
    title: recipeData.title,
    sourceUrl: recipeData.sourceUrl,
    imageUrl: recipeData.image,
    summary: recipeData.summary,
  }
}
