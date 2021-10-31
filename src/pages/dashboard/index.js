import React, { useState, useEffect } from 'react'
import SearchInput from '../../components/SearchInput'
import './styles.css'

const api = 'https://kitsu.io/api/edge/'

export default function Dashboard() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')

  useEffect(() => {
    if (text) {
      setInfo({})

      fetch(
        `${api}anime?filter[text]=${text}&page[limit]=12`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
          console.log(info)
        })
    }
  }, [text])

  return (
    <>
      <header className="Dashboard__header">
        <SearchInput
          value={text}
          onChange={(search) => setText(search)}
        />
      </header>

      <div className="Dashboard__main">
        <h1>Animes</h1>

        {text && !info.data && <span>Carregando...</span>}
        {info.data && (
          <ul className="Dashboard__animes-list">
            {info.data.map((anime) => (
              <li key={anime.id}>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
                <span>{anime.attributes.canonicalTitle}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}