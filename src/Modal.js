import React, { useEffect, useState } from 'react'

export const Modal = () => {

    function handleScroll(event) {
        console.log(event)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div style={{position: "absolute", right: "40px", height: "200vh", width: "100px", background: "gray"}} >Modal</div>
    )
}
