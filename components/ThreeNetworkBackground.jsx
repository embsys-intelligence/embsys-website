'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '@/components/ThemeProvider'

function NetworkLines({ theme, ...props }) {
    const groupRef = useRef()

    // Generate nodes and lines
    const particleCount = 200
    const { positions, lines } = useMemo(() => {
        const positions = new Float32Array(particleCount * 3)
        const radius = 15

        for (let i = 0; i < particleCount; i++) {
            // Random point in a box roughly for a background plane
            positions[i * 3] = (Math.random() - 0.5) * radius * 2.5
            positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 1.5
            positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 0.5
        }

        const linesArray = []
        const p1 = new THREE.Vector3()
        const p2 = new THREE.Vector3()

        for (let i = 0; i < particleCount; i++) {
            p1.fromArray(positions, i * 3)
            let connections = 0
            for (let j = i + 1; j < particleCount; j++) {
                p2.fromArray(positions, j * 3)
                const dist = p1.distanceTo(p2)
                if (dist < 2.5 && connections < 4) { // Connect if close
                    linesArray.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
                    connections++
                }
            }
        }

        return { positions, lines: new Float32Array(linesArray) }
    }, [])

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x -= delta * 0.05
            groupRef.current.rotation.y += delta * 0.02
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
        }
    })

    const isDark = theme === 'dark'
    const color = isDark ? '#3B82F6' : '#2563EB' // Brand blue

    return (
        <group ref={groupRef} rotation={[0, 0, 0]}>
            <points>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial transparent color={color} size={0.05} sizeAttenuation={true} opacity={isDark ? 0.8 : 0.6} />
            </points>
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3} />
                </bufferGeometry>
                <lineBasicMaterial transparent color={color} opacity={isDark ? 0.25 : 0.15} />
            </lineSegments>
        </group>
    )
}

export default function ThreeNetworkBackground() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            aria-hidden="true"
            style={{
                opacity: isDark ? 0.6 : 0.7,
                mixBlendMode: isDark ? 'screen' : 'multiply'
            }}
        >
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <NetworkLines theme={theme} />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    )
}
