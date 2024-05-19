import Button from "./Button"

const HeaderEditQuest = () => {
  return (
    <div className='flex justify-between'>
        <Button text="back"/>
        <div className="text">
            Edit Quest
        </div>
        <Button text="Save" color="red"/>
    </div>
  )
}

export default HeaderEditQuest