import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Inputs</h2>
            <div className="col center-x space-y-5">
                <input className="input" placeholder="Vibe" />
                <input className="input is-active" placeholder="Dig it" />
                <input className="input is-disabled" placeholder="Bogart" />
                <input className="input is-success" placeholder="Groovy" />
                <input className="input is-warning" placeholder="Bogus" />
                <input className="input is-danger" placeholder="Bummer" />
                <input className="input is-info" placeholder="Mellow" />
            </div>
            <Code code={`
<div class="col space-y-5">
    <input class="input" placeholder="Vibe" />
    <input class="input is-active" placeholder="Dig it" />
    <input class="input is-disabled" placeholder="Bogart" />
    <input class="input is-success" placeholder="Groovy" />
    <input class="input is-warning" placeholder="Bogus" />
    <input class="input is-danger" placeholder="Bummer" />
    <input class="input is-info" placeholder="Mellow" />
</div> 
            `} />
        </Wrapper>
    )
}