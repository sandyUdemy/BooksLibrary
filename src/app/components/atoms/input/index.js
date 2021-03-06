import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';
import { InputSize, InputTheme } from './types';

const Input = props => {
  const { action, border, classNames, size, theme, type, placeholder, aria, defaultValue } = props;
  const classProps = classnames(size, classNames);
  return (
    <StyledInput
      onChange={action}
      className={`form-control ${classProps}`}
      type={type}
      theme={theme}
      placeholder={placeholder}
      aria-label={aria}
      defaultValue={defaultValue}
      border={border}
    ></StyledInput>
  );
};

const { SMALL, LARGE } = InputSize;
Input.SMALL = props => {
  return <Input size={SMALL} {...props}></Input>;
};
Input.LARGE = props => {
  return <Input size={LARGE} {...props}></Input>;
};
Input.STEPPER = props => {
  return <Input name="size" type="number" {...props}></Input>;
};
Input.propTypes = {
  border: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  disabled: false,
  theme: InputTheme.DEFAULT,
  onChange: () => {},
};

export { InputTheme, InputSize };
export default Input;
