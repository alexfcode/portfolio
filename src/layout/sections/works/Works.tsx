import { S } from "./work/Works_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./work/tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp";
import timerImg from "../../../assets/images//proj2.webp";
import { Container } from "../../../components/Container";
import { useState } from "react";

// const tabsItems = ["Home", "Landing Page", "Reacp", "SPA",]

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const worksList = [
  {
    src: socialImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
  },
  {
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "React",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksList;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksList.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksList.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksList.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
          {filteredWorks.map((w, index) => {
            return (
              <Work key={index} src={w.src} title={w.title} text={w.text} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
