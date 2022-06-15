import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Containers</h2>
            <div className="container">
                It’s ironic that those who till the soil, cultivate and harvest the fruits, vegetables, and other foods that fill your tables with abundance have nothing left for themselves.
                <br />
                <strong>- Cesar Chavez</strong>
            </div>
            <Code code={`
<div class="container">
    It’s ironic that those who till the soil, cultivate and harvest the fruits, vegetables, and other foods that fill your tables with abundance have nothing left for themselves.
    <br />
    <strong>- Cesar Chavez</strong>
</div>
            `} />
        </Wrapper>
    )
}