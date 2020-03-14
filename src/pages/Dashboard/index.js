import React, {useState, useEffect} from 'react';
import SideBarLeft from './components/SideBarLeft';
import SideBarRight from './components/SideBarRight';
import GraphChart from './components/GraphChart';
import { getData } from "./components/utils"
import styled from 'styled-components';
import myData from '../../data.json'
import InfoTrade from './components/InfoTade';
import Message from './components/Message';
import CardTrade from './components/CardTrade';

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
    display: flex;
    margin-right: 220px;
    margin-left: 70px;
`
const Content = styled.div`
     
`

const Dashboard = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        getData().then(data => {
            setData(data)
        })
    }, [])

    return(
        <>
            <SideBarLeft/>
            <AppBar>
                <AppBarText>TRADING PLATFORM</AppBarText>
            </AppBar>
            <SideBarRight />
            <Main id="container"> 
                <div style={{width: '30%', height: '100%'}}>
                        <InfoTrade 
                            data={myData.trade}
                        />
      
                        <Message 
                            messages={myData.messages}
                        />
                </div>
                
                <Content>
                    {
                        data === null ? 
                        <div>Loading</div>
                                    :
                        <GraphChart data={data} />
                    }
                    <CardTrade 
                        infos={myData.infos}
                    />
                </Content>
                
            </Main>
        </>
    )
}

export default Dashboard