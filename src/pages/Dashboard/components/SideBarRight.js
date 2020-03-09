import React from 'react';
import styled from 'styled-components';
import Counter from './CounterBtn'

const SideBarRightContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background:  #2a2f42 ;
    height: 100%;
    padding: 100px 8px;
    width: 200px;
`

const HightTitle = styled.h3`
    color: #808080;
    text-align: center;
`

const BalanceContainer = styled.div`
    border: 1px solid #808080;
    padding: 15px 3px;
`

const BalanceContainerText = styled.div`
    display: flex;
    justify-content: space-between;
`
const BalanceText = styled.p`
    color: #808080;
    margin: 0;
`

const CounterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const MoreMinorityContainer = styled.div`
    margin: 15px 8px
`

const StatIndicator = styled.div`
    background: ${props => props.backgroundColor};
    color: white;
    border:2px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

const StatPourcentageContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`

const StatPourcentage = styled.div`
    background-color: ${props => props.backgroundColor};
    text-align: center;
    color: white;
    width: ${props => props.width}%;
    z-index: ${props => props.front ? '2' : '1'};
    
`

const StatText = styled.p`
    font-size: 12px;
    margin: 8px;
    font-weight: bold;
`

const SideBarRight = () => {
    return (
        <SideBarRightContainer>
            <HightTitle>MY BALANCES</HightTitle>
            <BalanceContainer>
                <BalanceContainerText>
                    <BalanceText>USD:</BalanceText>
                    <BalanceText>7462785.745</BalanceText>
                </BalanceContainerText>
                <BalanceContainerText>
                    <BalanceText>EUR:</BalanceText>
                    <BalanceText>49524.768</BalanceText>
                </BalanceContainerText>
                <BalanceContainerText>
                    <BalanceText>RUR:</BalanceText>
                    <BalanceText>86354.95</BalanceText>
                </BalanceContainerText>
            </BalanceContainer>
            <CounterContainer>
                <Counter 
                    title="Amount"
                    onClickAdd = {() => {}}
                    onClickRemove={() => {}}
                    indicator={23}
                />
                <Counter 
                    title="Time"
                    onClickAdd = {() => {}}
                    onClickRemove={() => {}}
                    indicator="1:26"
                />
            </CounterContainer>
            <MoreMinorityContainer>
                <HightTitle>More Minority</HightTitle>
                <StatIndicator 
                    backgroundColor="radial-gradient(#009640, #33ab66)"
                    >
                    <i className="fas fa-arrow-up" style={{fontSize: 22}}></i>
                    <i className="fas fa-chart-bar" style={{fontSize: 22}}></i>
                </StatIndicator>
                <StatPourcentageContainer>
                    <StatPourcentage
                        backgroundColor="#e93842"
                        width={83}
                        front>
                        <StatText>83%</StatText>
                    </StatPourcentage>
                    <StatPourcentage
                        backgroundColor="#33ab66"
                        width={17}
                        front={false}>
                        <StatText>17%</StatText>
                    </StatPourcentage>
                </StatPourcentageContainer>
                <StatIndicator 
                    backgroundColor="radial-gradient(#e30613, #e93842)"
                    >
                    <i className="fas fa-arrow-down" style={{fontSize: 22}}></i>
                    <i className="fas fa-chart-bar" style={{fontSize: 22}}></i>
                </StatIndicator>
            </MoreMinorityContainer>
        </SideBarRightContainer>
    )
}

export default SideBarRight