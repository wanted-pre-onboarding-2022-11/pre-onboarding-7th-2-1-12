const { css, default: styled } = require("styled-components");
const { COLORS } = require("styles/theme");

const Button = ({ size, children, isSelected, ...restProps }) => (
  <StyledButton size={size} isSelected={isSelected} {...restProps}>
    {children}
  </StyledButton>
);

const SMALL_BUTTON = css``;

const MEDIUM_BUTTON = css``;

const LARGE_BUTTON = css`
  width: 240px;
  height: 60px;
  background: ${({ isSelected }) => (isSelected ? COLORS.BUTTON : COLORS.WHITE)};
  color: ${({ isSelected }) => (isSelected ? COLORS.BLUE : COLORS.BLACK)};
  border: none;
  border-radius: 10px;
  font-weight: inherit;

  :hover {
    background: ${COLORS.BUTTON};
  }
`;

const buttonStyle = {
  small: SMALL_BUTTON,
  medium: MEDIUM_BUTTON,
  large: LARGE_BUTTON,
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  ${({ size = "medium" }) => buttonStyle[size]}
`;

export default Button;
