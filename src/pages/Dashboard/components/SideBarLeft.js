import React from 'react';
import styled from 'styled-components';

const SideBarLeftContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background:  #2a2f42 ;
    height: 100%;
    padding-top: 100px;
    width: 70px;
`

const LinkContainer = styled.ul`
    list-style: none;
    padding-left: 0;
`

const LinkItem = styled.li`
    padding: 15px;
    border-bottom: 3px solid #202332;
    &:hover {
        background-color: #202332;
    }
`

const Link = styled.a`
    text-align: center;
`

const IconLink = styled.i`
    color: #7f828e;
    font-size: 35px;
`

const SideBarLeft = () => {
    return (
        <SideBarLeftContainer>
            <LinkContainer>
                <LinkItem>
                    <Link href="/">
                        <IconLink 
                            className="fas fa-user-circle"
                        />
                    </Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/">
                        <IconLink 
                            className="fas fa-chart-bar"
                        />
                    </Link>      
                </LinkItem>
                <LinkItem>
                    <Link href="/">
                        <IconLink 
                            className="fas fa-sticky-note"
                        />
                    </Link>      
                </LinkItem>
                <LinkItem>
                    <Link href="/">
                        <IconLink 
                            className="far fa-clock"
                        />
                    </Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/">
                        <IconLink 
                            className="fas fa-calendar"
                        />
                    </Link>      
                </LinkItem>
                <LinkItem>
                    <Link href="/">
                        <IconLink 
                            className="fas fa-cogs"
                        />
                    </Link>
                </LinkItem>
            </LinkContainer>
        </SideBarLeftContainer>
    )
}

export default SideBarLeft