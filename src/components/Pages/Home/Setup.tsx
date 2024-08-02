"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Html, useProgress } from "@react-three/drei"
import Model from "@/components/Model"  // Certifique-se de que o caminho está correto

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Setup() {
  return (
    <div className=" h-[500px]"> 
      <Canvas gl={{ antialias: true }} dpr={[6, 6]} className="relative h-full">
        <directionalLight position={[5, 5, -5]} intensity={3} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>

  )
}
