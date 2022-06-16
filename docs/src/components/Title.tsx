import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Titles</h2>
            <div className="col center-x space-y-5">
                <h1 className="title">Outta sight</h1>
                <h2 className="subtitle">Ya' dig?</h2>
            </div>
            <Code code={`
            
<div class="col center-x space-y-5">
    <h1 class="title">Outta sight</h1>
    <h2 class="subtitle">Ya' dig?</h2>
</div>   
            `} />
        </Wrapper>
    )
}