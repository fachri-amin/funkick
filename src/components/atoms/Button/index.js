import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'

import css from './button.module.scss';

const Button = ({type, size, title, onClick}) => {

    const btnContainerClass = cn({
        [css.btn]: true,
        [css.primary]: type === 'primary',
        [css.primaryOutline]: type === 'primary-outline',
        [css.primaryOutlineText]: type === 'primary-outline-text',
        [css.secondary]: type === 'secondary',
        [css.secondaryOutline]: type === 'secondary-outline',
        [css.sizeDefault]: size === 'default',
        [css.sizeLg]: size === 'lg',
        [css.sizeXl]: size === 'xl',
    })

    return (
        <button className={btnContainerClass} onClick={onClick}>{title}</button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'primary-outline', 'primary-outline-text', 'secondary-outline']),
    size: PropTypes.oneOf(['default', 'lg', 'xl']),
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'primary',
    size: 'default',
    onClick: () => {},
}

export default Button;