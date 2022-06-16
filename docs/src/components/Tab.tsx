import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Tabs</h2>
            <div className="tabs my-25">
                <button className="is-active">Far out</button>
                <button>Bodacious</button>
                <button>Radical</button>
            </div>
            <Code code={`
<!-- Use JS to change active tab -->
<div class="tabs my-25">
    <button class="is-active">Far out</button>
    <button>Bodacious</button>
    <button>Radical</button>
</div>  
            `} />
        </Wrapper>
    )
}