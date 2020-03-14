import React from 'react';
import styled from 'styled-components';

const CardTradeContainer = styled.div`
    display: flex;
    border-top: 2px solid white;
    padding-left: 10px;
    margin-right: 10px;
    margin: 5px 3px;
    overflow: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Card = styled.div`
    border-radius: 8px;
    background: linear-gradient(270deg, #303646 2%, #5a6680 100%, #303646 2%);
    margin-right: 8px;
    margin-top: 8px;
`
const Percentage = styled.p`
    font-size: 16px;
    color: white;
    margin-top: 3px;
    margin-bottom: 10px;
`

const CardInfo = styled.p`
    font-size: 16px;
    color: white;
    margin: 25px;
    text-align: center;
`

const CardTrade = ({infos}) => {
    return(
        <CardTradeContainer>
            {
                infos.map((item, index) => {
                    return(
                        <Card key={index}>
                            <Percentage>{item.percentage}%</Percentage>
                            <CardInfo>
                                {item.info}
                            </CardInfo>
                        </Card>
                    )
                })
            }
        </CardTradeContainer>
    )
}

export default CardTrade