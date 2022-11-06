import Icons from "components/common/Icon/Icons";

const Icon = ({ iconName }) => {
  const IconComponent = Icons[iconName];
  return <IconComponent />;
};

export default Icon;
