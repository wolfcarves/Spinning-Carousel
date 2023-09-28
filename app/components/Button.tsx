import {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends HTMLButtonProps {
  children: ReactNode;
  css?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  css,
  ...buttonProps
}): JSX.Element => {
  return (
    <button
      className={`${css} relative rounded-full p-3 text-white text-2xl duration-200`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
