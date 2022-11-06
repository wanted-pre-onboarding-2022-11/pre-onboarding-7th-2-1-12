import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LeverLogo from "../assets/logo_lever1.png";
import { routes } from "../routes/routePath";

const SideBar = () => {
  const { pathname: curPathName } = useLocation();
  const isMath = (path) => {
    return curPathName === path;
  };

  return (
    <S.SideBar>
      <S.LogoContainer>
        <img src={LeverLogo} alt="LEVER_logo" />
      </S.LogoContainer>
      <div>
        <p>서비스</p>
        <S.Select>
          <option value="매드업">매드업</option>
        </S.Select>
      </div>
      <div>
        <p>광고 센터</p>
        {routes.map(({ name, path }) => (
          <Tab key={name} isActive={isMath(path)}>
            <Link to={path}>{name}</Link>
          </Tab>
        ))}
      </div>
    </S.SideBar>
  );
};

const Tab = styled.button`
  display: flex;
  box-sizing: border-box;
  color: ${(props) => (props.isActive ? "#586CF5" : "#3A474E")};

  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  a {
    box-sizing: border-box;
    border-radius: 10px;
    padding: 2rem;
    width: 24rem;
    height: 6rem;
    background-color: ${(props) => (props.isActive ? "#EDEFF1" : "#FFFFFF")};
  }
`;

const S = {
  SideBar: styled.aside`
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    min-width: 20rem;
    min-height: 129.4rem;
    background: #ffffff;
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);

    div {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;
    }
  `,
  LogoContainer: styled.div`
    width: 15rem;
    padding: 6rem 0;
  `,
  Select: styled.select`
    padding: 2rem;
    width: 100%;
    height: 60px;
    background: #ffffff;
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    font-weight: 700;
    font-size: 1.6rem;
    color: #3a474e;
  `,
};

export default SideBar;
