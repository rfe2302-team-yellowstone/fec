import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TimeAgo from 'timeago-react'

export default function Announcements () {

  const [lastEruption, setLastEruption] = useState('')

  useEffect(() => {
    axios.get('https://www.geysertimes.org/api/v5/entries_latest/2')
      .then((res) => {
        let eruption = res.data.entries[0]
        setLastEruption(Date(eruption.time))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {/* <h3> Announcements: lots of stuff to keep an eye on out there! </h3> */}
      <h3 className='italic pr-2 justify-self-end'>{`Last sales eruption: `}
        <TimeAgo datetime={lastEruption}></TimeAgo>
      </h3>
    </>

  )
}