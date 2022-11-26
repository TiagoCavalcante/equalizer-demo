import React, { useRef } from 'react'
import Equalizer from 'r3f-equalizer'

export default function App() {
	const audioRef = useRef<HTMLAudioElement>()

	return <>
		<audio ref={audioRef} src="" />
		<Equalizer amplitude={5} audio={audioRef} />
	</>
}
