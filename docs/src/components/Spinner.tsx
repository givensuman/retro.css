import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Spinners</h2>
            <div className="row space-x-10">
                <span className="spinner"></span>
                <span className="spinner is-success"></span>
                <span className="spinner is-warning"></span>
                <span className="spinner is-danger"></span>
                <span className="spinner is-info"></span>
            </div>
            <Code code={`

<div class="row space-x-10">
    <span class="spinner"></span>
    <span class="spinner is-success"></span>
    <span class="spinner is-warning"></span>
    <span class="spinner is-danger"></span>
    <span class="spinner is-info"></span>
</div>   
            `} />
        </Wrapper>
    )
}