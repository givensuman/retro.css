import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Checkboxes</h2>
            <div className="col">
                <label className="checkbox">
                    <input type="checkbox" />
                    Out of sight
                </label>
                <label className="checkbox">
                    <input type="checkbox" checked />
                    Copacetic
                </label>
                <label className="checkbox is-disabled">
                    <input type="checkbox" />
                    Bogart
                </label>
            </div>
            <Code code={`
<div class="col">
    <label class="checkbox">
        <input type="checkbox" />
        Out of sight
    </label>
    <label class="checkbox">
        <input type="checkbox" checked />
        Copacetic
    </label>
    <label class="checkbox is-disabled">
        <input type="checkbox" />
        Bogart
    </label>
</div>
            `} />
        </Wrapper>
    )
}