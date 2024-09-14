import * as icons from "react-icons/fa";

const Icon = (props: { icon: string, [key: string]: any }) => {
  const { icon, otherProps } = props;
  const Icon = icons[icon as keyof typeof icons];

  return (
    <>
      { Icon
        ? <Icon 
            {...otherProps}
          /> 
        : null}
    </>
  );
};

export { Icon };
