const baseUrl = 'https://gateway.marvel.com'
const characterPath = '/v1/public/characters'

const Api = {
  async searchCharacters(name) {
    const url = `${baseUrl}${characterPath}?apikey=${process.env
      .REACT_APP_API_KEY}&nameStartsWith=${name}`
    const response = await fetch(url)
    const json = await response.json()

    console.log(json)
  }
}

export default Api
