import { S } from "./work/Works_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./work/tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp"
import timerImg from "../../../assets/images//proj2.webp"
import { Container } from "../../../components/Container";

const worksItems = ["Home", "Landing Page", "Reacp", "SPA",]
const workList = [{
    src: socialImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
},
{
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
},
]

export const Works = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
                    {workList.map((w, index) => {
                        return (
                            <Work key={index}
                                src={w.src}
                                title={w.title}
                                text={w.text} />
                        )
                    })}
                </FlexWrapper>
            </Container>

        </S.Works>
    );
};



