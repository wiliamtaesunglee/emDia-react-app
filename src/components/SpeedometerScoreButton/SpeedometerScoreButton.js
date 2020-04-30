import React from 'react'
import styled from 'styled-components'

import { ReactComponent as SpeedometerImage } from './speedometer.svg'

import propTypes from 'prop-types'

const SpeedometerScoreButton = ({ totalDebts }) => {
  const [showDebt, setShowDebt] = React.useState(true)
  return (
    <Button onClick={() => setShowDebt(!showDebt)}>
      <span className='button--image'>
        <SpeedometerImage />
      </span>
      <div className='button--text'>
        {showDebt
          ? <p>Veja a somatória <span>DE DÍVIDAS &rsaquo;</span></p>
          : <span>{totalDebts}</span>}
      </div>
    </Button>
  )
}

const Button = styled.div`
  height: 48px;
  width: 281px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFCC4E;
  border-radius: 30px 30px 30px 30px;
  color: #6A317F;
  .button--image {
    background-color: #6A317F;
    width: 64px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px 0 0 30px;
  }
  .button--text {
    width: 217px;
    display: flex;
    justify-content: center;
    & p {
      font-weight: bold;
      & span {
        font-weight: normal;
      }
    }
  }
`

SpeedometerScoreButton.propTypes = {
  totalDebts: propTypes.number
}

export default SpeedometerScoreButton
