import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { StyledBadge } from "./styles";
import { BadgeTheme, BadgeColor } from './types'

const Badge = props => {
    const {
        children,
        classNames,
        color,
        customColor,
        theme, 
    } = props;
    const classProps = classnames(color, theme, classNames);
    return (<StyledBadge customColor={customColor} className={`badge ${classProps}`} theme={theme}>{children}</StyledBadge>)
}
Badge.PRIMARY = props => <Badge color={BadgeColor.PRIMARY} {...props}></Badge>
Badge.SUCCESS = props => <Badge color={BadgeColor.SUCCESS} {...props}></Badge>
Badge.WARNING = props => <Badge color={BadgeColor.WARNING} {...props}></Badge>
Badge.INFO = props => <Badge color={BadgeColor.INFO} {...props}></Badge>
Badge.DANGER = props => <Badge color={BadgeColor.DANGER} {...props}></Badge>

Badge.propTypes = {
    theme: PropTypes.string,
    color: PropTypes.string,
    classNames: PropTypes.string,
    customColor: PropTypes.string,
};
Badge.defaultProps = {
    theme: BadgeTheme.DEFAULT,
    color: BadgeColor.SECONDARY,
};

export { BadgeTheme }
export default Badge