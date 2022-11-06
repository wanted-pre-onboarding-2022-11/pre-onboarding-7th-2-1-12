import Icons from "components/common/Icon/Icons";
import styled from "styled-components";
import { COLORS } from "styles/theme";

const Icon = ({ type, width, height, color }) => {
  const IconComponent = createStyledIcon(type, { width, height, color });
  return <IconComponent />;
};

const createStyledIcon = (type, { width, height, color }) => {
  const StyledIcon = styled(Icons[type])`
    width: ${width || "24px"};
    height: ${height || "24px"};
    path {
      fill: ${color?.path || COLORS.BLACK};
    }
  `;
  return StyledIcon;
};

export default Icon;
