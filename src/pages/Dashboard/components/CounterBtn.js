import React from 'react';
import styled from 'styled-components';


const Counter = styled.div`
    width: 85px
`
const CounterHightTitle = styled.h4`
    color: #808080;
    text-align: center;
    margin: 0
`
const CounterScreen = styled.div`
    display: flex;
    background-color: #555968;
    border-radius: 8px;
`

const CounterContainerBtn = styled.div`
    flex: 1;
`

const CounterBtnTop = styled.button`
    background-color: #bfbfbf;
    color: black;
    border-top-right-radius: 8px;
    width: 20px;
    height: 18px;
    float: right;
`
const CounterBtnBottom = styled.button`
    background-color: #bfbfbf;
    color: black;
    border-bottom-right-radius: 8px;
    width: 20px;
    height: 18px;
    float: right;
`

const CounterIndicator = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CounterIndicatorText = styled.p`
    color: white;
    margin: 0;
    font-size: 20px;
`

const CounterBtn = ({title, indicator, onClickAdd, onClickRemove}) => {
    return(
        <Counter>
            <CounterHightTitle>{title}</CounterHightTitle>
            <CounterScreen>
                <CounterIndicator>
                    <CounterIndicatorText>{indicator}</CounterIndicatorText>
                </CounterIndicator>
                <CounterContainerBtn>
                    <CounterBtnTop onClick={onClickAdd}>+</CounterBtnTop>
                    <CounterBtnBottom onClick={onClickRemove}>-</CounterBtnBottom>
                </CounterContainerBtn>
            </CounterScreen>
        </Counter>
    )
}

export default CounterBtn