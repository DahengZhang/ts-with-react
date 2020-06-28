import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)

    useEffect(() => {
        // 组件渲染时渲染
        document.title = `点击了${like}`
    }, [like])

    return (
        <>
            <button onClick={() => {setLike(like + 1)}}>👍{like}</button>
        </>
    )
}

export default LikeButton
