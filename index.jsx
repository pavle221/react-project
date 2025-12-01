import { createList } from "react-dom/clients"
import { createRoot } from "react"

createList(document.querySelector("#root")).render(
    <ul>
        <li>test</li>
        <li>test2</li>
        <li>test3</li>
    </ul>
)

const reactElement = <h1>Hello from jsx</h1>

root.render(
    reactElement
)
