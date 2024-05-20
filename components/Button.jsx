const Button = ({text="",color="#f11f1f"}) => {
  return (
    <div className={`btn text-white bg-[${color}]`}>{text}</div>
  )
}

export default Button