import { createList } from "react-dom/clients"

createList(document.querySelector("#root")).render(
    <ul>
        <li>test</li>
        <li>test2</li>
        <li>test3</li>
    </ul>
)