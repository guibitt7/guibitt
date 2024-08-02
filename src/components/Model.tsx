import { useGLTF, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { Group, LoopRepeat } from "three"

useGLTF.preload("/smol_ame_in_an_upcycled_terrarium_hololiveen.glb")

export default function Model() {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF("/smol_ame_in_an_upcycled_terrarium_hololiveen.glb")
  const { actions } = useAnimations(animations, scene)
  
  const [isDragging, setIsDragging] = useState(false)
  const [lastMouse, setLastMouse] = useState({ x: 0.4, y: -0.4 })
  const [rotation, setRotation] = useState({ x: 0.4, y: -0.4 })

  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].play().setLoop(LoopRepeat, Infinity) 
    }
  }, [actions])

  const handlePointerDown = (event: any) => {
    setIsDragging(true)
    setLastMouse({ x: event.clientX, y: event.clientY })
  }

  const handlePointerMove = (event: any) => {
    if (isDragging) {
      const deltaX = event.clientX - lastMouse.x
      const deltaY = event.clientY - lastMouse.y
      setRotation((prevRotation) => ({
        x: prevRotation.x + deltaY * 0.001,  
        y: prevRotation.y + deltaX * 0.001,  
      }))
      setLastMouse({ x: event.clientX, y: event.clientY })
    }
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('mouseup', handlePointerUp)
    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('mouseup', handlePointerUp)
    }
  }, [isDragging])

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x = rotation.x
      group.current.rotation.y = rotation.y
    }
  })

  return (
    <group
      ref={group}
      onPointerDown={handlePointerDown}
      scale={[1.5, 1.2, 1.5]} 
    >
      <primitive object={scene} />
    </group>
  )
}





