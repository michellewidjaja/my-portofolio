import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  text: string;
  bgColor?: string;
  color?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, bgColor, color, className }) => {
  return (
    <span className={`${styles.badge} ${className}`} style={{ backgroundColor: bgColor, color: color, borderColor: color }}>
      {text}
    </span>
  );
};

export default Badge;
