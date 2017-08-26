import React from 'react'
import Router from 'next/router'

/*
* function onClickHandler
* params -> @string, @function
* return -> triger animation + push to routes
*/
function onClickHandler(to, linkClicked) {
  return (e) => {
    e.preventDefault()
    linkClicked()
    setTimeout(() => {
      Router.push(to)
    }, 200)
  }
}
/*
* Link component
* props -> children, to : correspond to href path, linkClicked : callback function
* return jsx -> a attribut, will triger onClickHandler method on click
*/
const Link = ({ children, to, linkClicked }) => (
  <a href="#" onClick={onClickHandler(to, linkClicked)}>
    {children}
    <style jsx>{`
      a {
        margin-right: 10px;
        text-decoration: none;
      }
    `}</style>
  </a>
)

// Export
export default Link