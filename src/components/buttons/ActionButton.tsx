import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "flowbite-react";

interface ActionButtonProps {
  tooltip: string;
  icon: any;
  handleClick: () => void;
}

export const ActionButton = (props: ActionButtonProps) => {
  return (
    <Tooltip title={props.tooltip} content={undefined}>
      <FontAwesomeIcon
        icon={props.icon}
        onClick={props.handleClick}
        style={{
          cursor: "pointer",
          marginLeft: 5,
          marginRight: 5,
          color: "gray",
          verticalAlign: "center",
        }}
      />
    </Tooltip>
  );
};
