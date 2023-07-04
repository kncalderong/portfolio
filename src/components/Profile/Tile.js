import { useState } from "react"

const Tile = ({ toggled, handleToggle, index }) => {
  
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="tile" onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} onClick={() => { handleToggle(index) }}>
      <div className="likeBefore" style={{
        backgroundColor: `${isHover ? '#1E1E1E' : '#0F0F0F'}`
      }}></div>
    </div>
  )
}

export default Tile
