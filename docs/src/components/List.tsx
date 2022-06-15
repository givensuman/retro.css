import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Lists</h2>
            <div className="row center-x space-x-15">
                <ul role="list" className="list">
                    <li>Far out</li>
                    <li>Bodacious</li>
                    <li>Radical</li>
                </ul>
                <ul role="list" className="list with-peace-signs">
                    <li>Far out</li>
                    <li>Bodacious</li>
                    <li>Radical</li>
                </ul>
                <ol role="list" className="list with-rainbows">
                    <li>Far out</li>
                    <li>Bodacious</li>
                    <li>Radical</li>
                </ol>
                <ol role="list" className="list with-stars">
                    <li>Far out</li>
                    <li>Bodacious</li>
                    <li>Radical</li>
                </ol>
            </div>
            <Code code={`
<div className="row center-x space-x-15">
    <ul role="list" className="list">
        <li>Far out</li>
        <li>Bodacious</li>
        <li>Radical</li>
    </ul>
    <ul role="list" className="list with-peace-signs">
        <li>Far out</li>
        <li>Bodacious</li>
        <li>Radical</li>
    </ul>
    <ol role="list" className="list with-rainbows">
        <li>Far out</li>
        <li>Bodacious</li>
        <li>Radical</li>
    </ol>
    <ol role="list" className="list with-stars">
        <li>Far out</li>
        <li>Bodacious</li>
        <li>Radical</li>
    </ol>
</div> 
            `} />
        </Wrapper>
    )
}