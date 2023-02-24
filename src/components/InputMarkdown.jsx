
import "../css/InputMarkdown.css";

function InputMarkdown({onChange}) {
  return (
    <div className="InputMarkdown">
      <textarea onChange={onChange}/>
    </div>
  )
}

export default InputMarkdown;
