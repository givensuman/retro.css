import { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { useCopyToClipboard } from 'usehooks-ts'

interface Props {
    code: string
}

export default ({ code }: Props) => {

    const [ value, copy ] = useCopyToClipboard()
    const [ buttonContent, setButtonContent ] = useState(
        <MdContentCopy />
    )
    const changeButtonContent = () => {
        setButtonContent(<span>Copied</span>)
        setTimeout(() => setButtonContent(<MdContentCopy />), 1000)
    }

    return (
        <div className="container">
            <button
            className="button is-small"
            onClick={() => {
                copy(code)
                changeButtonContent()
            }}
            style={{
                position: 'absolute',
                top: '0.75em', right: '0.75em',
                fontSize: '1em',
                padding: '0.75em'
            }}
            >
                {buttonContent}
            </button>
            <pre>
            <code>{code}</code>
            </pre>
        </div>
    )
}