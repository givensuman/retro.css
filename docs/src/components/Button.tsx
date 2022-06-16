import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () => {
    return (
    <Wrapper>

        <h2 className="subtitle">Buttons</h2>
        <div className="row wrap space-10">
          <button className="button">Vibe</button>
          <button className="button is-small">Small vibes</button>
          <button className="button is-large">Large vibes</button>
          <button className="button is-active">Dig it</button>
          <button className="button is-disabled">Bogart</button>
          <button className="button is-success">Groovy</button>
          <button className="button is-warning">Bogus</button>
          <button className="button is-danger">Bummer</button>
          <button className="button is-info">Mellow</button>
        </div>
        <Code code={`
<div class="row wrap space-10">
    <button class="button">Vibe</button>
    <button class="button is-small">Small vibes</button>
    <button class="button is-large">Large vibes</button>
    <button class="button is-active">Dig it</button>
    <button class="button is-disabled">Bogart</button>
    <button class="button is-success">Groovy</button>
    <button class="button is-warning">Bogus</button>
    <button class="button is-danger">Bummer</button>
    <button class="button is-info">Mellow</button>
</div>
        `} />

      </Wrapper>
    )
}