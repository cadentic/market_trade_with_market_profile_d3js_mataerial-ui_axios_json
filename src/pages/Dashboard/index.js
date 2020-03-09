import React from 'react';
import SideBarLeft from './components/SideBarLeft';
import SideBarRight from './components/SideBarRight';
import styled from 'styled-components';

const AppBar = styled.div`
    width: 100%;
    height: auto;
    background: #2a2f42;
`
const AppBarText = styled.h2`
    text-align: center;
    color: #009fe3;
    margin: 0;
    padding: 15px;
`

const Main = styled.div`
    background-color: radial-gradient(#5a6680, #303646);
    height: 100%;
`

const Dashboard = () => {
    return(
        <>
            <SideBarLeft/>
            <SideBarRight />
            <Main>  
                <AppBar>
                    <AppBarText>TRADING PLATFORM</AppBarText>
                </AppBar>
            </Main>
        </>
    )
}

export default Dashboard