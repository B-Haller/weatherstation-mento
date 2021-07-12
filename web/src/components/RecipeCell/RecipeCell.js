export const QUERY = gql`
  query {
    recipe: getRandomRecipe {
      vegetarian
      vegan
      glutenFree
      dairyFree
      cheap
      servings
      cookTime
      title
      sourceUrl
      imageUrl
      summary
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

//TODO: Update error display based on API error handling
export const Failure = ({ error }) => (
  <span className={'text-lg font-semibold text-red-500'}>
    {error.message.replace('GraphQL error: ', '')}
  </span>
)

export const Success = ({ recipe }) => {
  return (
    <>
    <h1 className={'font-bold text-center mb-6 text-lg'}>{recipe.title}</h1>
    <section className={'py-3 grid grid-cols-2 gap-2'}>
      <div>
        <img className={'max-w-auto h-full object-cover object-center rounded-xl shadow-sm'} src={recipe.imageUrl}/>
      </div>
      <div>
        <p>
        <span>
          <span>Vegetarian: </span>
          <span>{recipe.vegetarian ? 'Yes': 'No'}</span>
          <br/>
          <span>Vegan: </span>
          <span>{recipe.vegan ? 'Yes': 'No'}</span>
          <br/>
          <span>Gluten Free: </span>
          <span>{recipe.glutenFree ? 'Yes': 'No'}</span>
          <br/>
           <span>Dairy Free: </span>
          <span>{recipe.dairyFree ? 'Yes': 'No'}</span>
          <br/>
           <span>Cheap: </span>
          <span>{recipe.cheap ? 'Yes': 'No'}</span>
          <br/>
           <span>Servings: </span>
          <span>{recipe.servings}</span>
          <br/>
           <span>Cook Time: </span>
          <span>{recipe.cookTime}</span>
          <br/>
          <a className={'text-blue-600 font-bold underline'} href={recipe.sourceUrl}>Check out this recipe!</a>
        </span>
        </p>
      </div>
    </section>
    </>
  )
}
