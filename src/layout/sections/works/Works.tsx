import { S } from "./work/Works_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./work/tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj1.webp";
import timerImg from "../../../assets/images//proj2.webp";
import { Container } from "../../../components/Container";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    id: 1,
  },
  {
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 2,
  },
  {
    src: socialImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 3,
  },
  {
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 4,
  },
  {
    src: socialImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 5,
  },
  {
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 6,
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
    <S.Works id="works">
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
          <AnimatePresence>
            {filteredWorks.map((w, index) => {
              return (
                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                layout={true}
                  initial={{opacity: 0 }}
                  animate={{opacity: 1 }}
                  exit={{opacity: 0 }}
                  key={w.id}
                >
                  <Work key={w.id} src={w.src} title={w.title} text={w.text} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
