import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Cards</h2>
            <div className="row wrap space-10">
                <div className="card">
                <header>Radical</header>
                I will say this: In order for the planet to survive, there are going to be acts of ecoterrorism.
                <footer>
                    <strong>- Abbie Hoffman</strong>
                </footer>
                </div>
                <div className="card with-wood">
                <header>Groovy</header>
                Feminism has never been about getting a job for one woman. It’s about making life more fair for women everywhere. It’s not about a piece of the existing pie; there are too many of us for that. It’s about baking a new pie.
                <footer>
                    <strong>- Gloria Steinem</strong>
                </footer>
                </div>
                <div className="card with-scales">
                <header>Dig it</header>
                The ultimate test of man's conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard.
                <footer>
                    <strong>- Gaylord Nelson</strong>
                </footer>
                </div>
                <div className="card with-leaves">
                <header>Far out</header>
                The only people available to change the world are the people now living in it, with all the beliefs they bring along - however retrograde those beliefs may appear to those of us who see ourselves as enlightened.
                <footer>
                    <strong>- Todd Gitlin</strong>
                </footer>
                </div>
            </div>
            <Code code={`
<div class="row wrap space-10">
    <div class="card">
        <header>Radical</header>
        I will say this: In order for the planet to survive, there are going to be acts of ecoterrorism.
        <footer>
            <strong>- Abbie Hoffman</strong>
        </footer>
    </div>
    <div class="card with-wood">
        <header>Groovy</header>
        Feminism has never been about getting a job for one woman. It’s about making life more fair for women everywhere. It’s not about a piece of the existing pie; there are too many of us for that. It’s about baking a new pie.
        <footer>
            <strong>- Gloria Steinem</strong>
        </footer>
    </div>
    <div class="card with-scales">
        <header>Dig it</header>
        The ultimate test of man's conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard.
        <footer>
            <strong>- Gaylord Nelson</strong>
        </footer>
    </div>
    <div class="card with-leaves">
        <header>Far out</header>
        The only people available to change the world are the people now living in it, with all the beliefs they bring along - however retrograde those beliefs may appear to those of us who see ourselves as enlightened.
        <footer>
            <strong>- Todd Gitlin</strong>
        </footer>
    </div>
</div>
            `} />
        </Wrapper>
    )
}