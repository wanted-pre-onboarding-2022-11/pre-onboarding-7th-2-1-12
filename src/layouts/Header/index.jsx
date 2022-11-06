import Icon from "components/common/Icon";
import styled from "styled-components";
import { COLORS, FONT } from "styles/theme";

const Header = () => (
  <HeaderContainer>
    <Icon type="notification" />
    <Icon type="setting" />
    <UserProfile>
      <Icon type="profile" width="40px" height="40px" />
      <UserName>원티드님</UserName>
    </UserProfile>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  gap: 30px;
  padding-right: 40px;
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 102px;
  height: 40px;
  gap: 10px;
`;

const UserName = styled.span`
  font-size: ${FONT.SIZE.MEDIUM};
  color: ${COLORS.BLACK};
`;

export default Header;
