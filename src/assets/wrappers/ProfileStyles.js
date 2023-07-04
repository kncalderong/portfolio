import styled from 'styled-components'

const Wrapper = styled.section`

.tiles {
  height: calc( 100vh - 1px);
  width: calc( 100vw - 1px);
  position: relative;
  z-index: 2;
  display: grid;
}

.tile {
  cursor: pointer;
  position: relative;
}

.tile > .likeBefore {
  inset: 0.5px;
  position: absolute;
}

.profile-info, .profile-info-2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 1200ms ease-in;
  width: 70vw;
  z-index: 3;
}

.profile-icon {
  font-size: 60vmin;
  pointer-events: none;
  transition: opacity 1200ms ease-in;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4
}

`

export default Wrapper