import React, { useState, useEffect } from 'react'

import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const positions = useMousePosition()

    useEffect(() => {
        // 组件渲染时渲染
        document.title = `点击了${like}`
    })

    return (
        <>
            <p>X: {positions.x}, Y: {positions.y}</p>
            <button onClick={() => {setLike(like + 1)}}>👍{like}</button>
        </>
    )
}

export default LikeButton
