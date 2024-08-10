import { Sandpack } from "@codesandbox/sandpack-react"

type TSandPack = {
    code: string
}

const SandPack = ({ code }: TSandPack) => {
    return <Sandpack template="react"
        options={{
            showNavigator: true,
            showLineNumbers: true,
            showTabs: true,
            closableTabs: true,
            editorHeight: '100vh',

        }}

        files={{
            "/App.js": code,
            "/button.js": ``
        }}
        theme='auto'
    />

}

export default SandPack