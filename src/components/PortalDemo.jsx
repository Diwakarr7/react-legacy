import React from 'react'
import { createPortal } from 'react-dom'


function PortalDemo() {
  return createPortal(
    <>
        <h1>portal demo</h1>
    </>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo

