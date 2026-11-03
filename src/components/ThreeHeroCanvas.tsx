import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [webGLSupported, setWebGLSupported] = useState(true)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        setWebGLSupported(false)
        return
      }
    } catch {
      setWebGLSupported(false)
      return
    }

    const width = container.clientWidth || 600
    const height = container.clientHeight || 600

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 7)

    // Renderer
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      container.appendChild(renderer.domElement)
    } catch {
      setWebGLSupported(false)
      return
    }

    // Root sculpture group
    const rootGroup = new THREE.Group()
    scene.add(rootGroup)

    // 1. Inner Core: Obsidian Titanium Polyhedron with Golden Specular
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x181916, // Rich dark charcoal obsidian
      roughness: 0.18,
      metalness: 0.92,
      wireframe: false,
    })
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    rootGroup.add(coreMesh)

    // 2. Outer Wireframe Cage: Champagne Gold Polyhedral Lattice
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.05, 1)
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0xc6a46a, // Champagne gold
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      roughness: 0.25,
      metalness: 0.95,
    })
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    rootGroup.add(wireframeMesh)

    // 3. Orbiting Gyroscopic Rings: Satin Champagne Gold & Muted Bronze
    const ring1Geometry = new THREE.TorusGeometry(2.5, 0.022, 16, 120)
    const ring1Material = new THREE.MeshStandardMaterial({
      color: 0xc6a46a, // Champagne gold
      roughness: 0.2,
      metalness: 0.95,
      transparent: true,
      opacity: 0.9,
    })
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material)
    ring1.rotation.x = Math.PI / 3
    rootGroup.add(ring1)

    const ring2Geometry = new THREE.TorusGeometry(2.8, 0.016, 16, 120)
    const ring2Material = new THREE.MeshStandardMaterial({
      color: 0x8e6d3e, // Muted bronze
      roughness: 0.25,
      metalness: 0.9,
      transparent: true,
      opacity: 0.7,
    })
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = -Math.PI / 6
    rootGroup.add(ring2)

    // 4. Floating Ambient Particulate Cloud - Subtle Golden Embers
    const particleCount = 120
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 9
      positions[i + 1] = (Math.random() - 0.5) * 9
      positions[i + 2] = (Math.random() - 0.5) * 7
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc6a46a,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Studio Lights - Warm Champagne & Editorial Bronze
    const ambientLight = new THREE.AmbientLight(0xfff8ed, 0.65)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0xffeed4, 2.2)
    dirLight1.position.set(5, 8, 5)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x8e6d3e, 1.4)
    dirLight2.position.set(-6, -5, -4)
    scene.add(dirLight2)

    // Dynamic mouse-tracking interactive point light - Champagne Glow
    const mouseLight = new THREE.PointLight(0xc6a46a, 2.8, 12)
    mouseLight.position.set(0, 0, 4)
    scene.add(mouseLight)

    // Mouse & Parallax tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    let isHovered = false

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const clientX = e.clientX - rect.left
      const clientY = e.clientY - rect.top
      mouse.targetX = (clientX / rect.width) * 2 - 1
      mouse.targetY = -(clientY / rect.height) * 2 + 1
      isHovered = true
    }

    const handleMouseLeave = () => {
      mouse.targetX = 0
      mouse.targetY = 0
      isHovered = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const rect = container.getBoundingClientRect()
        mouse.targetX = ((touch.clientX - rect.left) / rect.width) * 2 - 1
        mouse.targetY = -((touch.clientY - rect.top) / rect.height) * 2 + 1
      }
    }
    container.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Resize Observer
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      if (newWidth === 0 || newHeight === 0) return

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Idle + mouse-driven rotations
      rootGroup.rotation.y += delta * 0.25 + mouse.x * 0.02
      rootGroup.rotation.x += delta * 0.15 - mouse.y * 0.02

      coreMesh.rotation.y -= delta * 0.1
      coreMesh.rotation.z += delta * 0.15

      wireframeMesh.rotation.y += delta * 0.35
      wireframeMesh.rotation.x += delta * 0.2

      ring1.rotation.z += delta * 0.4
      ring2.rotation.z -= delta * 0.3

      // Gentle floating levitation sine wave
      rootGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15

      // Particle subtle drifting
      particles.rotation.y = elapsedTime * 0.03
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1

      // Mouse light moves with cursor
      mouseLight.position.x = mouse.x * 4
      mouseLight.position.y = mouse.y * 4

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchmove', handleTouchMove)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      coreGeometry.dispose()
      coreMaterial.dispose()
      wireframeGeometry.dispose()
      wireframeMaterial.dispose()
      ring1Geometry.dispose()
      ring1Material.dispose()
      ring2Geometry.dispose()
      ring2Material.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-72 h-72 rounded-full border border-[#C6A46A]/30 flex items-center justify-center animate-pulse">
          <div className="absolute inset-4 rounded-full border border-[#C6A46A]/20 animate-spin" style={{ animationDuration: '24s' }} />
          <div className="w-40 h-40 rounded-3xl bg-gradient-to-tr from-[#191A17] via-[#2A2B26] to-[#C6A46A]/40 rotate-45 shadow-2xl opacity-90 border border-[#C6A46A]/30" />
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[450px] sm:h-[550px] lg:h-[620px] flex items-center justify-center relative touch-none select-none cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Kinetic Sculpture - drag or hover to rotate"
    />
  )
}

