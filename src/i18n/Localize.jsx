import { useIntl } from "react-intl";

export const Localize = ({ ...props }) => {
  const intl = useIntl();
  const message = intl.formatMessage({ id: props.value });

  return [message];
};
