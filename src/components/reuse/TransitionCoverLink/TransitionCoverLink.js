import React, { Component } from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import gsap from "gsap"

export default class Cover extends Component {
  constructor(props) {
    super(props)
    this.horizontal = this.horizontal.bind(this)
  }

  getCoverEl = () => document.querySelector(`.tl-cover-el`)

  horizontal = ({ node, props: { length: seconds } }) => {
    const wait = seconds / 6
    const half = (seconds - wait) / 2

    const cover = this.getCoverEl()

    return gsap
      .timeline()
      .set(cover, { y: 0, x: "-100%", display: "block" })
      .to(cover, {
        x: "0%",
        ease: "power3.inOut",
        duration: half,
      })
      .set(node, { opacity: 0 })
      .to(
        cover,
        {
          x: "100%",
          ease: "power3.inOut",
          duration: half,
        },
        `+=${wait}`
      )
  }

  render() {
    const length = this.props.duration || 1
    const { ...props } = this.props

    return (
      <>
        <TransitionLink
          exit={{
            delay: this.props.delay,
            length: length,
            trigger: ({ exit, node }) =>
              this.horizontal({
                props: exit,
                node,
              }),
          }}
          entry={{
            delay: length / 2,
          }}
          {...props}
        >
          {this.props.children}
        </TransitionLink>

        <TransitionPortal>
          <div
            className="tl-cover-el"
            style={{
              position: "fixed",
              background: this.props.bg || "#EBB740",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              width: "100vw",
              height: "100vh",
              transform: "translateY(100%)",
            }}
          />
        </TransitionPortal>
      </>
    )
  }
}
