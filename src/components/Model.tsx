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
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Start the animation when the component mounts
  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].play().setLoop(LoopRepeat, Infinity) // Ensure the animation loops indefinitely
    }
  }, [actions])

  // Handle mouse down event to start dragging
  const handlePointerDown = (event: any) => {
    setIsDragging(true)
    setLastMouse({ x: event.clientX, y: event.clientY })
  }

  // Handle mouse move event to update rotation
  const handlePointerMove = (event: any) => {
    if (isDragging) {
      const deltaX = event.clientX - lastMouse.x
      const deltaY = event.clientY - lastMouse.y
      setRotation((prevRotation) => ({
        x: prevRotation.x + deltaY * 0.002,  // Adjusted sensitivity
        y: prevRotation.y + deltaX * 0.002,  // Adjusted sensitivity
      }))
      setLastMouse({ x: event.clientX, y: event.clientY })
    }
  }

  // Handle mouse up event to stop dragging
  const handlePointerUp = () => {
    setIsDragging(false)
  }

  // Add event listeners for dragging
  useEffect(() => {
    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('mouseup', handlePointerUp)
    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('mouseup', handlePointerUp)
    }
  }, [isDragging])

  // Update the rotation of the object
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
      scale={[4, 4, 4]} // Scale the model to be larger
    >
      <primitive object={scene} />
    </group>
  )
}





