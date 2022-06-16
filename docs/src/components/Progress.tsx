import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Progress</h2>
            <div className="col space-y-10">
                <progress className="progress"></progress>
                <progress value="0.2" className="progress"></progress>
                <progress value="0.3" className="progress is-success"></progress>
                <progress value="0.4" className="progress is-warning"></progress>
                <progress value="0.5" className="progress is-danger"></progress>
                <progress value="0.6" className="progress is-info"></progress>
            </div>
            <Code code={`
<div class="col space-y-10">
    <progress class="progress"></progress>
    <progress value="0.2" class="progress"></progress>
    <progress value="0.3" class="progress is-success"></progress>
    <progress value="0.4" class="progress is-warning"></progress>
    <progress value="0.5" class="progress is-danger"></progress>
    <progress value="0.6" class="progress is-info"></progress>
</div>  
            `} />
        </Wrapper>
    )
}