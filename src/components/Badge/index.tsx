import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <span className={`${styles.badge} ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
