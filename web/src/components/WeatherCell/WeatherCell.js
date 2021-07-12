export const QUERY = gql`
  query($zip: String!) {
    weather: getWeatherByZip(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <span className={'text-lg font-semibold text-red-500'}>
    {error.message.replace('GraphQL error: ', '')}
  </span>
)

export const Success = ({ weather }) => {
  return (
    <section>
      <h1 className={'font-bold mb-6 text-lg text-center'}>Weather</h1>
      <img className={'mx-auto'} src={weather.icon}/>
      <h2 className={'text-center'}>
        <span>{weather.city} is currently </span>
        <span className={'text-red-500 font-semibold'}>{weather.temp}°F </span>
        <span>and experiencing {weather.conditions}.</span>
      </h2>
    </section>
  )
}
