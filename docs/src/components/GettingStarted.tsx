import Wrapper from '../views/Wrapper'
import Code from '../views/Code'


export default () => {
    return (
        <Wrapper>
        <div className="col">
            To install with node, run
            <Code code={`
# with npm
npm install retro.css
# or, with yarn
yarn add retro.css
            `} />
            and import the main stylesheet.
            <Code code={`
// JS
import 'retro.css/css/index.min.css';
/* CSS */
@import 'retro.css/css/index.min.css';
            `} />
            Or, use degit to add the library directly:
            <Code code={`
# cd into an empty folder first!
npx degit givensuman/retro.css/dist
            `} />
            and import accordingly.
            <br />
            <br />
            Continue reading for class coverage and examples.
        </div>
        </Wrapper>
    )
}
