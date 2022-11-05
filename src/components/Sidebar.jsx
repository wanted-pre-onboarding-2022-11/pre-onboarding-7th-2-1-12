import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ROUTE_PATH from "../routes/paths";
import { Label, Select } from "./common";
import { COLOR_PALETTE } from "../styles";

const options = [
  {
    value: "madup",
    text: "매드업",
  },
];

const categories = [
  {
    path: `${ROUTE_PATH.dashboard}`,
    type: "dashboard",
    text: "대시보드",
  },
  {
    path: `${ROUTE_PATH.advertise}`,
    type: "advertise",
    text: "광고관리",
  },
];

const Categories = ({ categories }) => {
  return (
    <div>
      <Label name="categories" label="광고센터" />
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem key={category.text}>
            <NavLink to={category.path}>{category.text}</NavLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </div>
  );
};

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CategoryItem = styled.li`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR_PALETTE.BACKGROUND_HOVER};
    color: ${COLOR_PALETTE.BLUE};
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Header>LEVER</Header>
      <Board>
        <Select label="서비스" name="service" options={options} />
        <Categories categories={categories} />
      </Board>
    </Container>
  );
};

export default Sidebar;

const Container = styled.nav`
  box-sizing: border-box;
  width: 240px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.header`
  font-size: 24px;
  font-weight: 600;
`;

const Board = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
