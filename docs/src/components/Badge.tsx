import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>

        <h2 className="subtitle">Badges</h2>
        <div className="row center-x space-x-5">
            <span className="badge">Vibe</span>
            <span className="badge is-success">Groovy</span>
            <span className="badge is-warning">Bogus</span>
            <span className="badge is-danger">Bummer</span>
            <span className="badge is-info">Mellow</span>
        </div>

        <Code code={`
<div className="row center-x space-x-5">
    <span className="badge">Vibe</span>
    <span className="badge is-success">Groovy</span>
    <span className="badge is-warning">Bogus</span>
    <span className="badge is-danger">Bummer</span>
    <span className="badge is-info">Mellow</span>
</div>
        `} />

        <br />

        <h2 className="subtitle">Badge groups</h2>
        <div className="row center-x space-x-5">
            <div className="badge-group">
                <span className="badge">Far</span>
                <span className="badge is-info">Out</span>
            </div>
            <div className="badge-group">
                <span className="badge">Status</span>
                <span className="badge is-danger">Bummer</span>
            </div>
        </div>

        <Code code={`
<div className="row center-x space-x-5">
    <div className="badge-group">
        <span className="badge">Far</span>
        <span className="badge is-info">Out</span>
    </div>
    <div className="badge-group">
        <span className="badge">Status</span>
        <span className="badge is-danger">Bummer</span>
    </div>
</div>
        `} />

        </Wrapper>
    )
}