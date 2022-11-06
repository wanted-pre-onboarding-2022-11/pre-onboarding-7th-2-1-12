import React from "react";
import { useDispatch } from "react-redux";
import { getSelect } from "app/module/managementSlice";
import useDropdown from "hooks/useDropdown";
import { menuArr } from "utils/arr";

import { ReactComponent as IconDown } from "static/icons/icon_down.svg";
import { fontStyle } from "styles/font";
import styled from "styled-components";

const ManageDropdown = ({ select }) => {
  const dispatch = useDispatch();
  const [isOpen, dropRef, handleClick] = useDropdown();

  const handleClickMenu = (item) => {
    dispatch(getSelect(item));
  };

  return (
    <S.DropdownContainer>
      <S.Menu onClick={handleClick} ref={dropRef}>
        {select.menu}
        <IconDown />
      </S.Menu>

      {isOpen && (
        <S.Down>
          {menuArr.map((item) => (
            <span key={item.menu} onClick={() => handleClickMenu(item)}>
              {item.menu}
            </span>
          ))}
        </S.Down>
      )}
    </S.DropdownContainer>
  );
};

const S = {
  DropdownContainer: styled.div`
    position: relative;
  `,

  Menu: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 12rem;
    height: 4rem;
    padding: 0 1rem 0 2rem;

    border: 1px solid ${({ theme }) => theme.color.grey_100};
    border-radius: 1rem;

    ${fontStyle.body_14}
    color: ${({ theme }) => theme.color.grey_800};
  `,

  Down: styled.div`
    position: absolute;
    top: 4.5rem;

    display: flex;
    flex-direction: column;

    width: 12rem;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.color.white};

    border: 1px solid ${({ theme }) => theme.color.grey_100};
    border-radius: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    span {
      display: flex;
      align-items: center;

      height: 3rem;

      ${fontStyle.body_14}
      color: ${({ theme }) => theme.color.grey_800};

      &:hover {
        ${fontStyle.body_14_bold}
      }
    }
  `,
};

export default ManageDropdown;
