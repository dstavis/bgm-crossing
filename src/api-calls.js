const allSongsURL = 'https://acnhapi.com/v1/backgroundmusic/'

async function allSongs() {
  try {
    let response = await fetch(allSongsURL)
    return await response.json()
  } catch (error) {
    console.error({error})
  }
}

const getSongs = () => {
  return fetch(allSongsURL)
    .then(response => response.json())
}

export {allSongs, getSongs}