import React from "react";
import styled from "styled-components";
import { Link } from "../../../../../components/Link";



type  TabMenuPropsType = {
    tabsItems: Array<{status: "all" | "landing" | "react" | "spa", title: string}>,
    changeFilterStatus: (value: "all" | "landing" | "react" | "spa",) => void
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.tabsItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item.title}</Link>
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
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        white-space: nowrap;
        margin: 0 auto 40px;
    }
`


const ListItem = styled.li`
 
`



