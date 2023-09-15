interface Props {
  children: React.ReactNode
  bgColor?: string
  hoverColor?: string
  color?: string
  position?: string
  padding?: string
  animation?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  children,
  bgColor,
  hoverColor,
  color,
  position,
  padding,
  animation,
  onClick,
}) => {
  return (
    <button
      type='button'
      className={`${
        bgColor ? bgColor : 'bg-gradient-to-r from-purple-500 to-pink-500'
      } ${hoverColor ? hoverColor : 'hover:bg-indigo-600'} ${
        color ? color : 'text-white'
      } ${position ? position : ''} ${padding ? padding : ''} ${
        animation ? animation : 'hover:-translate-y-1'
      } font-medium shadow-md py-2 px-4 rounded-full transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
