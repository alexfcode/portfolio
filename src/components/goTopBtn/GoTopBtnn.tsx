import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtnn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
          <Icon
            iconId={"arrowGoTop"}
            height={"15"}
            width={"15"}
            viewbox={"00 16 15"}
          />
        </StyledGoTopBtn>
      )}

      <button></button>
    </>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: rgda(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
