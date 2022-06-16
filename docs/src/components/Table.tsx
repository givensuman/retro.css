import Wrapper from '../views/Wrapper'
import Code from '../views/Code'

export default () =>  {
    return (
        <Wrapper>
            <h2 className="subtitle">Tables</h2>
            <div className="row wrap space-10">
                <table className="table">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Bay of Pigs</td>
                        <td>April 16-25, 1961</td>
                    </tr>
                    <tr>
                        <td>Civil Rights Act</td>
                        <td>July 2, 1964</td>
                    </tr>
                    <tr>
                        <td>Moon Landing</td>
                        <td>July 20, 1969</td>
                    </tr>
                </table>
                <table className="table is-striped">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Bay of Pigs</td>
                        <td>April 16-25, 1961</td>
                    </tr>
                    <tr>
                        <td>Civil Rights Act</td>
                        <td>July 2, 1964</td>
                    </tr>
                    <tr>
                        <td>Moon Landing</td>
                        <td>July 20, 1969</td>
                    </tr>
                </table>
                <table className="table with-wood">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Bay of Pigs</td>
                        <td>April 16-25, 1961</td>
                    </tr>
                    <tr>
                        <td>Civil Rights Act</td>
                        <td>July 2, 1964</td>
                    </tr>
                    <tr>
                        <td>Moon Landing</td>
                        <td>July 20, 1969</td>
                    </tr>
                </table>
                <table className="table with-scales">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Bay of Pigs</td>
                        <td>April 16-25, 1961</td>
                    </tr>
                    <tr>
                        <td>Civil Rights Act</td>
                        <td>July 2, 1964</td>
                    </tr>
                    <tr>
                        <td>Moon Landing</td>
                        <td>July 20, 1969</td>
                    </tr>
                </table>
                <table className="table with-leaves">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>Bay of Pigs</td>
                        <td>April 16-25, 1961</td>
                    </tr>
                    <tr>
                        <td>Civil Rights Act</td>
                        <td>July 2, 1964</td>
                    </tr>
                    <tr>
                        <td>Moon Landing</td>
                        <td>July 20, 1969</td>
                    </tr>
                </table>
                </div>
            <Code code={`
<div class="row wrap space-10">
<table class="table">
    <tr>
        <th>Event</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>Bay of Pigs</td>
        <td>April 16-25, 1961</td>
    </tr>
    <tr>
        <td>Civil Rights Act</td>
        <td>July 2, 1964</td>
    </tr>
    <tr>
        <td>Moon Landing</td>
        <td>July 20, 1969</td>
    </tr>
</table>
<table class="table is-striped">
    <tr>
        <th>Event</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>Bay of Pigs</td>
        <td>April 16-25, 1961</td>
    </tr>
    <tr>
        <td>Civil Rights Act</td>
        <td>July 2, 1964</td>
    </tr>
    <tr>
        <td>Moon Landing</td>
        <td>July 20, 1969</td>
    </tr>
</table>
<table class="table with-wood">
    <tr>
        <th>Event</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>Bay of Pigs</td>
        <td>April 16-25, 1961</td>
    </tr>
    <tr>
        <td>Civil Rights Act</td>
        <td>July 2, 1964</td>
    </tr>
    <tr>
        <td>Moon Landing</td>
        <td>July 20, 1969</td>
    </tr>
</table>
<table class="table with-scales">
    <tr>
        <th>Event</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>Bay of Pigs</td>
        <td>April 16-25, 1961</td>
    </tr>
    <tr>
        <td>Civil Rights Act</td>
        <td>July 2, 1964</td>
    </tr>
    <tr>
        <td>Moon Landing</td>
        <td>July 20, 1969</td>
    </tr>
</table>
<table class="table with-leaves">
    <tr>
        <th>Event</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>Bay of Pigs</td>
        <td>April 16-25, 1961</td>
    </tr>
    <tr>
        <td>Civil Rights Act</td>
        <td>July 2, 1964</td>
    </tr>
    <tr>
        <td>Moon Landing</td>
        <td>July 20, 1969</td>
    </tr>
</table>
</div>    
            `} />
        </Wrapper>
    )
}