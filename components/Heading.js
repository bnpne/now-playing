import React from 'react'
import Link from 'next/link'

const Heading = () => {
  return (
    <div className="tracking-tight leading-4 sm:leading-5 text-lg sm:text-xl block space-y-10 md:space-y-0 md:flex md:justify-between md:items-start">
      <div className="max-w-xs">
        NOW PLAYING – A LIL APP THAT TELLS YOU WHAT BEN IS LISTENING TO ON
        SPOTIFY.
      </div>
      <div className="max-w-xs">
        {/* <p>
          <Link href="/recent">
            <a className="hover:underline">
              SEE RECENTLY PLAYED
            </a>
          </Link>
        </p> */}
        <a
          className="hover:underline"
          href="https://github.com/bnpne/now-playing"
          target="_blank"
        >
          CHECK IT OUT ON GITHUB
        </a>
        <p>©2021</p>
      </div>
      <div>
        <a
          className="hover:underline"
          href="https://twitter.com/bnpneio"
          target="_blank"
        >
          BN PNE
        </a>
      </div>
    </div>
  )
}

export default Heading
