
import "../css/OutputMarkdown.css";

import { marked } from "marked";

function OutputMarkdown({text}) {

    // TODO: if text is null set placeholder
    return (
        <div className="OutputMarkdown">
            <div dangerouslySetInnerHTML={{__html: marked.parse(text)}}></div>
        </div>
    )
}

export default OutputMarkdown;
