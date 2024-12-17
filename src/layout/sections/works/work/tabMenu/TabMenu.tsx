import React from "react";
import styled from "styled-components";
import { Link } from "../../../../../components/Link";
import { Button } from "../../../../../components/Button";

export type TabsStatusType = "all" | "landing" | "react" | "spa"



type  TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value: TabsStatusType,) => void,
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link active ={props.currentFilterStatus === item.status} as={Button} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );

};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        max-width: 352px;
        width: 100%;
        white-space: nowrap;
        margin: 0 auto 40px;
    }
`


const ListItem = styled.li`
 
`



