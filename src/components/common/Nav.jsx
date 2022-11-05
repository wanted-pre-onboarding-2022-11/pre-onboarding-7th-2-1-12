import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "static/images/Lever_BI 1.svg";
import { ReactComponent as IconBoard } from "static/icons/icon_dashboard.svg";
import { ReactComponent as IconManagement } from "static/icons/icon_management.svg";
import { fontStyle } from "styles/font";
import styled, { css } from "styled-components";

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.Nav>
      <S.Logo>
        <Logo />
      </S.Logo>

      <S.Subtitle>서비스</S.Subtitle>

      <S.Subtitle>광고 센터</S.Subtitle>

      <S.NavButton onClick={() => navigate("/")} isLocate={pathname === "/"}>
        <IconBoard fill={pathname === "/" ? "#586CF5" : "#3A474E"} />
        <span>대시보드</span>
      </S.NavButton>

      <S.NavButton onClick={() => navigate("/management")} isLocate={pathname === "/management"}>
        <IconManagement fill={pathname === "/management" ? "#586CF5" : "#3A474E"} />
        <span>광고관리</span>
      </S.NavButton>
    </S.Nav>
  );
};

const S = {
  Nav: styled.div`
    padding: 0 4rem;
  `,

  Logo: styled.div`
    width: 100%;
    padding: 6rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_50};
  `,

  Subtitle: styled.div`
    display: flex;
    align-items: center;

    height: 4rem;
    padding-left: 2rem;
    margin-top: 4rem;

    ${fontStyle.body_12_bold}
    color: ${({ theme }) => theme.color.grey_300};
  `,

  NavButton: styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 6rem;
    padding: 0 2rem;
    border-radius: 1rem;

    ${fontStyle.head_16}

    cursor: pointer;

    ${(props) =>
      props.isLocate &&
      css`
        background-color: ${({ theme }) => theme.color.grey_50};
        color: ${({ theme }) => theme.color.primary};
      `}

    span {
      margin-left: 1rem;
    }
  `,
};

export default Nav;
