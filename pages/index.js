import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Back from '../components/Back'

const Index = () => {
  const { data } = useSWR('/api/now-playing', fetcher)

  if (!data) {
    return null
  }

  // let colors = !data.imageUrl
  //   ? ['#ffffff', '#000000']
  //   : colorThief.getColor(data.imageUrl).then((color) => console.log(color))

  // console.log(colors)

  return (
    <div>
      <Layout>
        <div className=" flex flex-col h-screen overflow-auto py-1 sm:py-3 lg:py-5 px-1 sm:px-3 md:px-6 lg:px-12">
          <Heading />
          <div className="font-mono mt-auto tracking-tight leading-4 md:leading-5 text-md sm:text-base relative z-20">
            <p className="font-light">CURRENTLY PLAYING:</p>
            <div className="py-1 sm:py-3 pb-5 text-3xl sm:text-5xl md:text-8xl">
              <div className="space-x-10 md:space-x-20 leading-8 sm:leading-10 md:leading-tightest lg:leading-tightester">
                {data?.title ? (
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>'{data.title.toUpperCase()}'</span>
                  </a>
                ) : (
                  <h1>
                    I'M NOT LISTENING TO ANYTHING RIGHT NOW. COME BACK SOON.
                  </h1>
                )}
                {data?.artist && <h2>– {data.artist.toUpperCase()}</h2>}
              </div>
            </div>
          </div>
          <div>
            {data?.imageUrl ? (
              <Back url={data.imageUrl} />
            ) : (
              <Back url="/jerry.jpg" />
            )}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index

// TODO: Add transitions
