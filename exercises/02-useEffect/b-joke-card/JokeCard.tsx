import { useState } from 'react'
import { useEffect } from 'react'
type Joke = { setup: string; punchline: string }

export default function JokeCard() {
  const [joke, setJoke] = useState<string | null>(null)
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch('/jokes.json', { signal })
      .then(res => res.json())
      .then((jokes: Joke[]) => {
        const pick = jokes[Math.floor(Math.random() * jokes.length)]
      setJoke(pick.setup + ' ' + pick.punchline)
    })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      <h2>Joke of the mount</h2>
      <p data-testid="joke">{joke ?? 'Loading...'}</p>
    </div>
  )
}
