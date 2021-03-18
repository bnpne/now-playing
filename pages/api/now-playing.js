import { getNowPlaying } from '../../lib/spotify'

export default async (_, res) => {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }
  

  const song = await response.json()
  let artist = ''
  let imageUrl = ''

  if (song.context.type == "show") {
    artist = song.item.show.name
    imageUrl = song.item.images[0].url
  }
  else {
    artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    imageUrl = song.item.album.images[0].url
  }

  const title = song.item.name
  const isPlaying = song.is_playing
  const songUrl = song.item.external_urls.spotify

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30',
  )

  return res.status(200).json({
    imageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
  // return res.status(200).json({song})
}
