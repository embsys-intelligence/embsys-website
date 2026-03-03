'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useTheme } from '@/components/ThemeProvider'

function GoldenParticles({ theme, ...props }) {
    const ref = useRef()

    // Generate random points in a sphere
    const count = 3000
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3)
        const radius = 12
        for (let i = 0; i < count; i++) {
            // Random point on/in a sphere using spherical coordinates
            const u = Math.random()
            const v = Math.random()
            const theta = 2 * Math.PI * u
            const phi = Math.acos(2 * v - 1)
            const r = Math.cbrt(Math.random()) * radius // Distribution to fill sphere

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = r * Math.cos(phi)
            p[i * 3] = x
            p[i * 3 + 1] = y
            p[i * 3 + 2] = z
        }
        return p
    }, [count])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20
            ref.current.rotation.y -= delta / 30

            // Add a slight bobbing effect based on time
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
        }
    })

    // Use a darker amber/gold for light mode to ensure contrast against white background
    const isDark = theme === 'dark'
    const color = isDark ? '#F59E0B' : '#B45309'

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color}
                    size={isDark ? 0.035 : 0.045}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={isDark ? 0.6 : 0.9}
                />
            </Points>
        </group>
    )
}

export default function ThreeBackground() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            aria-hidden="true"
            style={{
                opacity: isDark ? 0.5 : 0.7,
                mixBlendMode: isDark ? 'screen' : 'multiply'
            }}
        >
            <Canvas camera={{ position: [0, 0, 8] }}>
                <GoldenParticles theme={theme} />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    )
}
