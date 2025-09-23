import React from 'react';

interface BadgeProps {
  text: string;
  bgColor?: string;
  color?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, bgColor, color }) => {
  return (
    <span className="inline-block px-2 py-1 rounded-full text-xs tracking-wide font-medium bg-blue-500 dark:bg-theme-accent-500 text-white" style={{ backgroundColor: bgColor, color: color, borderColor: color }}>
      {text}
    </span>
  );
};

export default Badge;
