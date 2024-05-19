import HeaderEditQuest from "./HeaderEditQuest"
import Field from "./Field"
import ChapterEdit from "./ChapterEdit"
import TextArea from "./TextArea"

const quest_edit = () => {
  return (
    <div className="container">
        <HeaderEditQuest/>
        <div >
          <div className="place-content-center my-4 items-center first:mt-[20px] flex gap-[10px]">
            <label className="w-[105px] flex flex-wrap text-center" >Quest Title:</label>
            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
          </div>
          <ChapterEdit className="place-content-center" />
        </div>
    </div>
  )
}

export default quest_edit