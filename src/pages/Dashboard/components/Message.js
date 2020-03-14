import React from 'react';
import styled from 'styled-components';

const MessageItem = styled.div`
    color: white;
    display: flex;
`
const RoundItem = styled.div`
    background: white;
    height: 5px;
    width: 5px;
    border-radius: 100%;
    margin-right: 2px;
    flex: 1;
`
const TextMessage = styled.p`
    flex: 2;
`

const TextHigh = styled.h3`
    color: #aaacb3;
    flex: 1;
`

const Message = ({messages}) => {
    return(
        <div>
            <TextHigh>
                Last News
            </TextHigh>
            <div style={{overflow: 'auto', height: '250px'}}>
                {
                    messages.map((item, index) => {
                        return(
                            <MessageItem key = {index}>
                                <div>
                                    <RoundItem />
                                </div>
                                
                                <TextMessage>
                                    {item.msg}
                                </TextMessage>
                            </MessageItem>
                        )
                    })
                }
            </div>
        </div>
    )
} 

export default Message