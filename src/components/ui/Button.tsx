import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20 active:bg-brand-800',
  secondary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950',
  outline: 'bg-white text-gray-700 border border-gray-200 hover:border-brand-300 hover:text-brand-600 active:bg-gray-50',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-brand-600 active:bg-gray-200',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3.5 text-base gap-2.5',
};

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseButtonProps & { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ExternalButtonProps = BaseButtonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;

function ButtonContent({ icon, iconRight, children }: { icon?: ReactNode; iconRight?: ReactNode; children: ReactNode }) {
  return (
    <>
      {icon && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
      <span className="font-medium">{children}</span>
      {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-1">{iconRight}</span>}
    </>
  );
}

export function Button({ variant = 'primary', size = 'md', icon, iconRight, children, className = '', fullWidth, ...props }: ButtonProps) {
  return (
    <button
      className={`group inline-flex items-center justify-center rounded-lg transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <ButtonContent icon={icon} iconRight={iconRight}>{children}</ButtonContent>
    </button>
  );
}

export function LinkButton({ variant = 'primary', size = 'md', icon, iconRight, children, className = '', fullWidth, to, ...props }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center rounded-lg transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <ButtonContent icon={icon} iconRight={iconRight}>{children}</ButtonContent>
    </Link>
  );
}

export function ExternalButton({ variant = 'primary', size = 'md', icon, iconRight, children, className = '', fullWidth, href, ...props }: ExternalButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center rounded-lg transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <ButtonContent icon={icon} iconRight={iconRight}>{children}</ButtonContent>
    </a>
  );
}
