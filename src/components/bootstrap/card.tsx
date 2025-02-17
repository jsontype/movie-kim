import React from 'react'

const Card = (props: {
  className: any
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => <div className={`card ${props.className ? props.className : ''}`}> {props.children} </div>
Card.Header = (props: {
  className: any
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => (
  <div
    className={`card-header d-flex justify-content-between ${props.className ? props.className : ''}`}
  >
    {' '}
    {props.children}{' '}
  </div>
)
Card.Body = (props: {
  className: any
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => (
  <div className={`card-body ${props.className ? props.className : ''}`}> {props.children} </div>
)
Card.Footer = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => <div className="card-footer"> {props.children} </div>
// Card.Header.Title = (props: { className: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => <div className={`header-title ${props.className ? props.className : ''}`}> {props.children} </div>
// Card.Header.Action = (props: { className: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => <div className={`header-action ${props.className ? props.className : ''}`}> {props.children} </div>

export default Card
