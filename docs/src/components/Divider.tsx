import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Dividers</h2>
            <div className="row center-x">
                <hr className="divider" />
            </div>
            <Code code={`

<div class="row center-x">
    <hr class="divider" />
</div>    
            `} />
        </Wrapper>
    )
}