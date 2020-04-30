import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import propTypes from 'prop-types'

import { DebtBlock } from '../DebtBlock'

const ListOfDebtsBlocks = ({ debts }) => {
  return (
    <DebtsList>
      <Grid item size={40}>
        {
          debts.map(debt => {
            return (
              <DebtBlock
                key={debts.id}
                creditor={debt.creditor}
                value={debt.value}
                other={debt.other}
                status={debt.status}
              />
            )
          })
        }
      </Grid>
    </DebtsList>
  )
}

const DebtsList = styled.div`
  padding-top: 20px;
  background-color: #6A317F;
  width: 100%;
  display: flex;
  flex-direction: column;
`
ListOfDebtsBlocks.propTypes = {
  debts: propTypes.array
}

export default ListOfDebtsBlocks
