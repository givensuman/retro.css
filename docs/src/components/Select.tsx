import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Selects</h2>
            <div className="row wrap center-x space-10">
                <select className="select">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
                <select className="select is-active">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
                <select className="select is-disabled">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
                <select className="select is-success">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
                <select className="select is-warning">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
                <select className="select is-danger">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
                <select className="select is-info">
                <option>Far out</option>
                <option>Bodacious</option>
                <option>Radical</option>
                </select>
            </div>
            <Code code={`
<div class="row wrap center-x space-10">
    <select class="select">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
    <select class="select is-active">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
    <select class="select is-disabled">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
    <select class="select is-success">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
    <select class="select is-warning">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
    <select class="select is-danger">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
    <select class="select is-info">
        <option>Far out</option>
        <option>Bodacious</option>
        <option>Radical</option>
    </select>
</div>   
            `} />
        </Wrapper>
    )
}