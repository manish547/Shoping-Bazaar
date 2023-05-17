import React, { useEffect, useRef, useState } from 'react'

const PrecticeFile2 = () => {
    const [name, setName] = useState('Kyle')
  const previousName = useRef(null)

  useEffect(() => {
    previousName.current = name
  }, [name])
     
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>{previousName.current} <p>=</p> {name}</div>
    </>
  )

}

export default PrecticeFile2