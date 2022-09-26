const allSongsURL = 'https://acnhapi.com/v1/backgroundmusic/'

async function getSongs() {
  try {
    let response = await fetch(allSongsURL)
    return await response.json()
  } catch (error) {
    console.error({error})
  }
}

export {getSongs}