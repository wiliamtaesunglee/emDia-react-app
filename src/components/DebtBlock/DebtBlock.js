import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const DebtBlock = ({ creditor, value, other, status }) => {
  const formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return (
    <Block>
      <div className='creditor'>
        <h3>{creditor.toUpperCase()}</h3>
        <p>{other}</p>
      </div>
      <div className='infos'>
        <span>Sua dívida é: </span>
        <p>
          <span>R$</span>
          {formatter.format(value)}
        </p>
      </div>
      {
        status === 'completed'
          ? <BottomBlock completed><p>MAIS DETALHES</p></BottomBlock>
          : <BottomBlock><p>PROPOSTA EM PROCESSAMENTO</p></BottomBlock>
      }
    </Block>
  )
}

const Block = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 20px auto;
  border-radius: 8px 8px 8px 8px;
  background-color: #EAEAEA;
  .creditor {
    color: #6A317F;
    padding: 16px;
    h3 {
      font-size: 18px;
      margin: 0;
    }
    p {
      margin: 4px 0 0 0;
    }
  }

  .infos {
    margin: 0;
    padding: 16px;
    background-color: #F8F8F8;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid #E7E9EA;
    span {
      font-size: 14px;
      line-heigth: 19px;
      font-weight: 600;
      color: #858585;
    }
    p {
      color: #6A317F;
      margin: 0;
      font-size: 30px;
      font-weight: bold;

      span {
        color: #6A317F;
        padding-right: 6px;
      }
    }
  }
`

const BottomBlock = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  background-color: #EAEAEA;
  color: #${props => props.completed ? '6A317F' : 'D99529'};
  border-bottom: 8px solid #${props => props.completed ? 'D2ACD1' : 'D99529'};
  border-radius: 0 0 8px 8px;
`

DebtBlock.propTypes = {
  creditor: propTypes.string,
  value: propTypes.number,
  other: propTypes.string,
  status: propTypes.string
}

export default DebtBlock
