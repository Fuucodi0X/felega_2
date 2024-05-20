const EditField = ({lable,placeholder=""}) => {
  return (
    <div className="first:mt-[20px] flex gap-[10px] items-center">
        <label className="w-[105px] flex flex-wrap text-center" >{lable}</label>
        <label >: </label>
        <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
    </div>
  )
}

export default EditField