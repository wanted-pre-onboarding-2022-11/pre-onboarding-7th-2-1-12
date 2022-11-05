import React from "react";
import styled from "styled-components";
import { ReactComponent as IconAlarm } from "static/icons/icon_알림.svg";
import { ReactComponent as IconSetting } from "static/icons/icon_설정.svg";
import { ReactComponent as IconProfile } from "static/icons/img_profile_small.svg";
import { fontStyle } from "styles/font";

const Header = () => {
  return (
    <S.Header>
      <IconAlarm />
      <IconSetting />
      <IconProfile />
      <span>원티드님</span>
    </S.Header>
  );
};

const S = {
  Header: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;

    height: 8rem;
    margin: 0 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_50};

    ${fontStyle.body_14}
    color: ${({ theme }) => theme.color.grey_800};

    span {
      margin-left: -2rem;
    }
  `,
};

export default Header;
