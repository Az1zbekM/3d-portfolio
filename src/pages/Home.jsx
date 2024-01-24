import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import { Bird } from '../models/Bird'
import { Plane } from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  // useRef audio
  const audioRef = React.useRef(new Audio(sakura))
  audioRef.current.volume = 0.1,
  audioRef.current.loop = true

  const [isRotating, setIsRotating] = React.useState(false)
  const [currentStage, setCurrentStage] = React.useState(1)

  //for audio
  const [isPlaying, setIsPlaying] = React.useState(false)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const adjustIslandForCamera = () => {
    let screenScale, screenPosition, rotation;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1]
      screenPosition = [0, -6.5, -43.4] 
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForCamera = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForCamera()
  const [planeScale, planePosition] = adjustPlaneForCamera()
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex  items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* like sun */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* like moon */}
          <ambientLight intensity={0.5} />
          {/* <OrbitControls /> */}
          <hemisphereLight intensity={1} groundColor='black' />

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentFocusPoint={undefined}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2 z-5 cursor-pointer'>
        <img src={!isPlaying ? soundoff : soundon} alt="sound" 
        onClick={() => setIsPlaying(!isPlaying)} 
        className='w-10 h-10 cursor-pointer object-contain'  />
      </div>
    </section>
  )
}

export default Home
