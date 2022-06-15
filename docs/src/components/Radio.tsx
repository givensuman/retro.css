import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () => {
    return (
        <Wrapper>
            <h2 className="subtitle">Radios</h2>
            <div className="col">
                <label className="radio">
                    <input type="radio"/>
                    Out of sight
                </label>
                <label className="radio">
                    <input type="radio" checked />
                    Copacetic
                </label>
                <label className="radio is-disabled">
                    <input type="radio" />
                    Bogart
                </label>
            </div>
            <Code code={`
<div class="col">
    <label class="radio">
        <input type="radio"/>
        Out of sight
    </label>
    <label class="radio">
        <input type="radio" checked />
        Copacetic
    </label>
    <label class="radio is-disabled">
        <input type="radio" />
        Bogart
    </label>
</div>
            `} />
        </Wrapper>
    )
}