import React from 'react'

export const Form = ({ children, styleForm, handleEvent }) => {
  return (
    <form onSubmit={handleEvent} className={styleForm}>
      { children }
    </form>
  )
}
