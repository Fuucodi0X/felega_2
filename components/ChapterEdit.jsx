import Field from "./Field"
import TextArea from "./TextArea"

const ChapterEdit = ({chapter="",placeholder=["",""]}) => {
  return (
    <div className="flex flex-col justify-center gap-6 mx-[100px]">
            <Field lable={`Checkpoint ${chapter} (destination)`} placeholder={placeholder[0]} />
            <Field lable={`Chapter ${chapter}`} placeholder={placeholder[1]}/>
            <TextArea lable={placeholder[1]}/>
    </div>
  )
}

export default ChapterEdit