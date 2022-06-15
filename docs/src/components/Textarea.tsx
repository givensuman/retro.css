import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Textarea</h2>
                <textarea className="textarea my-25" placeholder="Peace and love"></textarea>
            <Code code={`
            
<textarea class="textarea my-25" placeholder="Peace and love"></textarea>   
            `} />
        </Wrapper>
    )
}