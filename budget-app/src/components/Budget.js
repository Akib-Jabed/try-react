import React from 'react'

export default function Budget({classes, title, amount}) {
  return (
    <div className={classes}>
        <span>{title}: {amount} BDT</span>
    </div>
  )
}
