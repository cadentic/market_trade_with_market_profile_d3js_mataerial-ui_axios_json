import React from 'react';
import styled from 'styled-components';

const Trade = styled.div`
    margin: 10px 3px
`
const Line = styled.div`
    display: flex;
`

const TextWithSub = styled.div`
    position: relative;
    flex: 1;
    width: fit-content;
    margin: 5px 0;
`
const SubText = styled.p`
    color: ${props => props.gain >= 0 ? '#00ff40' : '#c80600'};
    position: absolute;
    bottom: -15px;
    right: 0;
    font-size: 8px;
`

const TextTrade = styled.p`
    color: ${props => props.gain >= 0 ? '#00ff40' : '#c80600'};
    font-size: 16px;
    flex: 1;  
    margin: 5px 0; 
`

const SimpleText = styled.p`
    color: white;
    font-size: 16px;
    flex: 1;
    margin: 5px 0;
`

const TextHigh = styled.h4`
    color: #aaacb3;
    flex: 1;
`

const InfoTrade = ({data}) => {
    return (
        <div >
            <Line>
                <TextHigh>
                    Currency:
                </TextHigh>
                <TextHigh>
                    Amount
                </TextHigh>
                <TextHigh>
                    Gain/Loss
                </TextHigh>
            </Line>
            <div style={{overflow: 'auto', height: '500px'}}>
                {
                    data.map((item, index) => {
                        return(
                            <Trade key={index}>
                                <Line>
                                    <SimpleText >
                                        EUR/RUR
                                    </SimpleText>
                                    <div style={{flex: 1}}>
                                        <TextWithSub>
                                            <SimpleText >
                                                $ {item.eurAmount}
                                            </SimpleText>
                                            <SubText 
                                                gain={item.eurPercentage}>
                                                {item.eurPercentage}%
                                            </SubText>
                                        </TextWithSub>
                                    </div>
                                    
                                    <TextTrade
                                        gain={item.eurGain}>
                                        ${item.eurGain}
                                    </TextTrade> 
                                </Line>
                                <Line>
                                    <SimpleText>
                                        USD/BLR
                                    </SimpleText>
                                    <div style={{flex: 1}}>
                                        <TextWithSub>
                                            <SimpleText >
                                                $ {item.usAmount}
                                            </SimpleText>
                                            <SubText 
                                                gain={item.usAmount}>
                                                {item.usPercentage}%
                                            </SubText>
                                        </TextWithSub>
                                    </div>
                                    
                                    <TextTrade
                                        gain={item.usGain}>
                                        ${item.usGain}
                                    </TextTrade> 
                                </Line>
                                
                            </Trade>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InfoTrade