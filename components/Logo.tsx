import Image from 'next/image'
import React from 'react'
Image

const Logo = () => {
  return (
      <Image src="/logo.png" width={95} height={95} alt="logo" />
  )
}

export default Logo