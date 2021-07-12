export const schema = gql`
  type Recipe {
    vegetarian: Boolean!
    vegan: Boolean!
    glutenFree: Boolean!
    dairyFree: Boolean!
    cheap: Boolean!
    servings: Int!
    cookTime: Int!
    title: String!
    sourceUrl: String!
    imageUrl: String!
    summary: String!
  }

  type Query {
    getRandomRecipe: Recipe!
  }
`
