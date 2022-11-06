import Button from "components/common/Button";
import Icon from "components/common/Icon";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTE_PATH from "routes/routePath";
import styled from "styled-components";
import { COLORS, FONT } from "styles/theme";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { DASHBOARD, ADVERTISEMENT } = ROUTE_PATH;

  const isSelected = (path) => pathname === path;

  const handleClick = (path) => () => {
    if (pathname !== path) navigate(path);
  };

  return (
    <SidebarContainer>
      <LogoWrapper>
        <Icon type="logo" width="124px" height="30px" />
      </LogoWrapper>
      <Menu>
        <MenuTitle>서비스</MenuTitle>
        <Button size="large">매드업</Button>
      </Menu>
      <Menu>
        <MenuTitle>광고 센터</MenuTitle>
        <MenuContents>
          <Button size="large" isSelected={isSelected(DASHBOARD)} onClick={handleClick(DASHBOARD)}>
            <Icon
              type="dashboard"
              color={{ path: isSelected(DASHBOARD) ? COLORS.BLUE : COLORS.BLACK }}
            />
            대시보드
          </Button>
          <Button
            size="large"
            isSelected={isSelected(ADVERTISEMENT)}
            onClick={handleClick(ADVERTISEMENT)}
          >
            <Icon
              type="advertisement"
              color={{ path: isSelected(ADVERTISEMENT) ? COLORS.BLUE : COLORS.BLACK }}
            />
            광고관리
          </Button>
        </MenuContents>
      </Menu>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: ${COLORS.WHITE};
  padding-left: 40px;
  padding-top: 60px;
  gap: 40px;
`;

const LogoWrapper = styled.div`
  width: 240px;
  border-bottom: 1px solid ${COLORS.BORDER};
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

const MenuTitle = styled.span`
  font-size: ${FONT.SIZE.SMALL};
  color: ${COLORS.GRAY};
  padding-left: 15px;
`;

const MenuContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
