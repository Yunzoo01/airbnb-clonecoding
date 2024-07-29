interface ButtonProps{
    label : string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button = () => {
  return (
    <div>Button</div>
  )
}

export default Button