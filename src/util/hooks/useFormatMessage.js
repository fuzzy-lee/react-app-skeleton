import {useIntl} from "react-intl";

export const useFormatMessage = () => {
    const intl = useIntl();
    return (id, value) => intl.formatMessage({id}, value)
};
