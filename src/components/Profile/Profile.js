import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { faChess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import anime from 'animejs/lib/anime.es.js'
import Wrapper from '../../assets/wrappers/ProfileStyles'
import Tile from './Tile'

const Profile = () => {
  
  const [toggled, setToggled] = useState(false)
  const [index, setIndex] = useState(1)
  const rowsRef = useRef(0)
  const columnsRef = useRef(0)
  const [numOfTiles, setNumOfTiles] = useState(0)
  const tilesContainerRef = useRef(null)
  
  const styleTilesContainer = {
    gridTemplateColumns: 'repeat(var(--columns), 1fr)',
    gridTemplateRows: 'repeat(var(--rows), 1fr)'
  }
  
  const handleToggle = useCallback((index) => {
    if (toggled) {
      setToggled(false)
    } else {
      setToggled(true)
    }
    setIndex(index)
  }, [toggled])
  
  const tiles = useMemo(() => {
    return Array.from({ length: numOfTiles }, (_, index) => {
      return <Tile toggled={toggled} key={index} handleToggle={handleToggle} index={index} />
    })
  }, [toggled, numOfTiles, handleToggle])
  useEffect(() => {

    anime({ //the animejs effect has to be added once the component has been mounted(the tiles one), that's the reason why we put tiles dependency in the dependencies array
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(60, {
        grid: [columnsRef.current, rowsRef.current],
        from: index
      })
    })
   }, [tiles, index, toggled])
  
  useEffect(() => {
    const handleResize = () => { //event listener to create the tiles dinamically according to sreen size
      const size = document.body.clientWidth > 800 ? 100 : 50;

      columnsRef.current = Math.floor(document.body.clientWidth / size)
      rowsRef.current = Math.floor(window.screen.height / size)

      setNumOfTiles(columnsRef.current * rowsRef.current)
      tilesContainerRef.current.style.setProperty("--columns", `${columnsRef.current}`);
      tilesContainerRef.current.style.setProperty("--rows", `${rowsRef.current}`);
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper>
      <section id="welcome-section" className="welcome-section">
        <div id="tiles" className="tiles" style={styleTilesContainer} ref={tilesContainerRef} >
          {tiles}
        </div>
        <div className={`profile-info`} style={{ opacity: `${toggled ? '0' : '1'} ` }}>
          <h1 >Hi, I'm Kevin Nicolas Calderon</h1>
          <p>
            I'm a front-end developer (ReactJs), who takes special care of the
            details, functionality, and good practices in coding. 
          </p>
        </div>
        <div className="profile-info-2" style={{opacity: `${toggled ? '1' : '0'} `}}>
          <FontAwesomeIcon icon={faChess} className={`profile-icon`} color="#ffffff26" />
          <p>
            I'm always improving my programming skills and I'm pleased to invite you to take a look at my job
          </p>
        </div>        
      </section>
    </Wrapper>

  )
}

export default Profile
