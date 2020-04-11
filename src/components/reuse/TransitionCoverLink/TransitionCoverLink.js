import React, { useRef, useEffect } from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import gsap from "gsap"

import styled from "styled-components"

const TransitionSpan = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  background-color: ${({ theme }) => theme.color.orange};
`

const OrangeCoverLink = ({ children, to, delay, length }) => {
  const spanRef = useRef(null)

  useEffect(() => {
    gsap.set(spanRef.current, { x: "-100vw" })
  })

  const animation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

    tl.fromTo(
      spanRef.current,
      { x: "-100vw" },
      { duration: length / 2, x: "0vw" }
    ).fromTo(
      spanRef.current,
      { x: "0vw" },
      { duration: length / 2, x: "100vw" }
    )
  }

  return (
    <>
      <TransitionLink
        to={to}
        entry={{ delay: length / 2 }}
        exit={{
          delay: delay,
          length: length,
          trigger: ({ node }) => {
            node.style.position = "absolute"
            node.style.top = "0px"
            node.style.left = "0px"
            node.style.overflow = "hidden"
            animation()
          },
        }}
      >
        {children}
      </TransitionLink>

      <TransitionPortal>
        <TransitionSpan ref={spanRef} />
      </TransitionPortal>
    </>
  )
}

export default OrangeCoverLink
