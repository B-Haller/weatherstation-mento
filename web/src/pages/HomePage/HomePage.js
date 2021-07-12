import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import WeatherCell from 'src/components/WeatherCell'
import RecipeCell from 'src/components/RecipeCell'

const HomePage = () => {
  const [zip, setZip] = useState()
  const [recipeSearch, setRecipeSearch] = useState(0)

  const onZipSubmit = (data) => {
    if (data != null) {
      setZip(data.zip)
    }
  }
  const onRecipeSearch = () => {
    setRecipeSearch(recipeSearch + 1)
  }

  return (
    <>
      <div className={'grid grid-rows-2'}>
        <div className={'grid grid-cols-2'}>
          <div
            className={
              'ml-auto p-8 bg-indigo-200 rounded-lg shadow-md mt-4 max-w-lg min-w-3/4'
            }
          >
            <section className={''}>
              <h1 className={'mb-6 text-lg font-bold'}>
                Lookup weather by zipcode
              </h1>
              <div>
                <Form onSubmit={onZipSubmit}>
                  <TextField
                    className={
                      'text-grey-900 px-4 py-2 bg-whit rounded-lg mr-4 placeholder-gray-300'
                    }
                    name="zip"
                    placeholder="Zipcode..."
                    maxLength="5"
                    validation={{ required: true, pattern: /^\d{5}$/ }}
                  />
                  <Submit
                    className={
                      'text-white px-5 py-3 bg-indigo-400 rounded-lg shadow-lg ' +
                      'uppercase tracking-wider font-semibold text-sm sm:mt-2 sm:mx-auto'
                    }
                  >
                    Check Weather
                  </Submit>
                </Form>
              </div>
            </section>
          </div>
          {/*TODO: Create custom background colors based on weather*/}
          {zip && (
            <div
              className={
                'ml-4 p-8 bg-yellow-200 rounded-lg shadow-md mt-4 max-w-lg min-w-3/4'
              }
            >
              {<WeatherCell zip={zip} />}
            </div>
          )}
        </div>
        <div className={'grid grid-cols-2'}>
          <div
            className={
              'ml-auto p-8 bg-pink-200 rounded-lg shadow-md mt-4 max-w-lg min-w-3/4'
            }
          >
            <section className={''}>
              <h1 className={'mb-6 text-lg font-bold'}>Get a random recipe</h1>
              <div>
                <button
                  onClick={onRecipeSearch}
                  className={
                    'text-white px-5 py-3 bg-pink-400 rounded-lg shadow-lg ' +
                    'uppercase tracking-wider font-semibold text-sm sm:mt-2 sm:mx-auto'
                  }
                >
                  Get Recipe
                </button>
              </div>
            </section>
          </div>
          {recipeSearch != 0 && (
            <div
              className={
                'ml-4 p-8 bg-green-200 rounded-lg shadow-md mt-4 max-w-lg min-w-3/4'
              }
            >
              {<RecipeCell recipeSearch={recipeSearch} />}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
