import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className="anchor"
          as="a"
          href={props.href}
        >
          {props.cta}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper aria-label={props.label} type={props.type}>
          {props.cta}
        </ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  position: relative;
  z-index: 10;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(90deg, #0fa37e, #0f94a3,#e6ffe0, #f7fff5);
  background-size: 400%;
  border-radius: 30px;
  border: none;
 

  &:hover {
    cursor: pointer;
    animation: animate 8s linear infinite;

    &::before {
      filter: blur(20px);
      opacity: 1;
      animation: animate 8s linear;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #18f5be, #18f5a0, #18f586, #18f5cc);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`

export default Button
