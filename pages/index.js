import React from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import useSWR from 'swr'
import fetcher from  '../lib/fetcher'
 
const Index = () => {
  const { data } = useSWR('/api/now-playing', fetcher)

  if (!data) {
    return null
  }

  return (
    <div>
      <Layout>
        <div className="flex flex-col h-screen overflow-auto py-1 sm:py-3 lg:py-5 px-1 sm:px-12 md:px-24 lg:px-32">
          <Heading />
          <div className="my-auto tracking-tight leading-4 md:leading-5 text-lg md:text-xl">
            <p>CURRENTLY PLAYING:</p>
            <div className="py-3 pb-5 text-5xl md:text-8xl">
              {data?.title ? (
                <div className="space-x-10 md:space-x-20">
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    '{data.title.toUpperCase()}'
                  </a>
                  <h2>– {data.artist.toUpperCase()}</h2>
                </div>
              ) : (
                <h1>NOTHING IS PLAYING...</h1>
              )}
            </div>
            <div>{data?.isPlaying ? <p>PLAYING</p> : <p>PAUSED</p>}</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index

// TODO: Add transitions
// TODO: Make album art show in background 
// TODO: Work forever and not have to play