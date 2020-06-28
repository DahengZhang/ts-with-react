import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            console.log('inner')
            setPositions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateMouse)

        return () => {
            // 执行之前删除上一次
            document.removeEventListener('click', updateMouse)
        }
    }, /* 第二个参数为空数组时，表明effect的执行不依赖于props或者state中的任意值，只会在组件挂在与删除的时候执行 */ [])
    return (
        <p>X: {positions.x}, Y: {positions.y}</p>
    )
}

export default MouseTracker
