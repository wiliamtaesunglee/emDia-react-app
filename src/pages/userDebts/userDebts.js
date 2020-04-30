import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

import { SpeedometerScoreButton } from '../../components/SpeedometerScoreButton'
import { ListOfDebtsBlocks } from '../../components/ListOfDebtsBlocks'

const UserDebts = () => {
  const debts = [
    { id: 1, creditor: 'Marisa', value: 3719.31, other: 'FIDC Multisegmentos | NPL Ipanema VI NP', status: 'completed' },
    { id: 2, creditor: 'Santander', value: 14400.31, other: 'FIDC Multisegmentos | NPL Ipanema VI NP', status: 'processing' },
    { id: 3, creditor: 'Marisander', value: 371.12, other: 'FIDC Multisegmentos | NPL Ipanema VI NP', status: 'completed' },
    { id: 4, creditor: 'Santamarisa', value: 1400.71, other: 'FIDC Multisegmentos | NPL Ipanema VI NP', status: 'processing' }
  ]

  const allDebtsSum = debts.reduce((curr, acc) => curr + acc.value, 0)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return (
    <>
      <Container>
        <Grid container direction='column' alignItems='center'>
          <Grid item xs='12'>
            <h1 className='title'>Minhas Dívidas</h1>
            <p className='text'>Veja todas as suas dívidas com a emDia abaixo. Clique para simular e ver mais informações.</p>
          </Grid>
          <Grid item xs='12'>
            <SpeedometerScoreButton totalDebts={formatter.format(allDebtsSum)} />
          </Grid>
        </Grid>
      </Container>
      <ListOfDebtsBlocks debts={debts} />
    </>
  )
}

const Container = styled.div`
  padding: 32px 40px 16px 40px;
  .title {
    margin-bottom: 0;
    font-size: 26px;
    color: #6A317F;
    font-weight: bold;
    font-family: Nunito;
    // padding-left: 16px;
  }

  .text {
    width: 250px;
    margin: 2px 0 16px 0;
    color: #666666;
    font-size: 14px;
    line-height: 19px;
    // padding-left: 16px;
  }
`

export default UserDebts
