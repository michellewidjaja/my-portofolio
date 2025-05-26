import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  bgColor?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  bgColor = '#328dff',
  color = '#FFF',
  size = 'md',
  fullWidth = false,
  style,
  className = '',
  children,
  disabled = false,
  onClick,
}) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: bgColor,
      color: color,
      ...style,
    }}
    disabled={disabled}
    className={`${styles.button} ${fullWidth ? styles.fullWidth : ''} ${styles[size]} ${className}`}
  >
    {children}
  </button>
);

export default Button;