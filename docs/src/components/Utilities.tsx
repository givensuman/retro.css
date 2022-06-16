import Wrapper from "../views/Wrapper"

export default () => {
    return (
        <Wrapper>
            <div className="col">
                <h2 className="subtitle">Utilities</h2>
                Retro.css comes with a few easy utility classes to help manage layout of components. Because many elements have stylized borders and box-shadows, they may overlap adjacent elements. Use these utilities to create a layout suitable to your taste.

                <table className="table mt-50 is-striped">
                    <tr>
                        <th>Class</th>
                        <th>*</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>.m-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin</td>
                    </tr>
                    <tr>
                        <td>.my-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin above and below</td>
                    </tr>
                    <tr>
                        <td>.mx-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin to the left and right</td>
                    </tr>
                    <tr>
                        <td>.mt-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin above</td>
                    </tr>
                    <tr>
                        <td>.mr-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin to the right</td>
                    </tr>
                    <tr>
                        <td>.mb-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin below</td>
                    </tr>
                    <tr>
                        <td>.ml-*</td>
                        <td>1-100 or "auto"</td>
                        <td>Applies a margin to the left</td>
                    </tr>
                    <tr>
                        <td>.p-*</td>
                        <td>1-100</td>
                        <td>Applies a padding</td>
                    </tr>
                    <tr>
                        <td>.py-*</td>
                        <td>1-100</td>
                        <td>Applies a padding above and below</td>
                    </tr>
                    <tr>
                        <td>.px-*</td>
                        <td>1-100</td>
                        <td>Applies a padding to the left and right</td>
                    </tr>
                    <tr>
                        <td>.pt-*</td>
                        <td>1-100</td>
                        <td>Applies a padding above</td>
                    </tr>
                    <tr>
                        <td>.pr-*</td>
                        <td>1-100</td>
                        <td>Applies a padding to the right</td>
                    </tr>
                    <tr>
                        <td>.pb-*</td>
                        <td>1-100</td>
                        <td>Applies a padding below</td>
                    </tr>
                    <tr>
                        <td>.pl-*</td>
                        <td>1-100</td>
                        <td>Applies a padding to the left</td>
                    </tr>
                    <tr>
                        <td>.space-*</td>
                        <td>1-100</td>
                        <td>Applies a margin to direct children</td>
                    </tr>
                    <tr>
                        <td>.space-y-*</td>
                        <td>1-100</td>
                        <td>Applies a margin above and below to direct children</td>
                    </tr>
                    <tr>
                        <td>.space-x-*</td>
                        <td>1-100</td>
                        <td>Applies a margin to the left and right to direct children</td>
                    </tr>
                    <tr>
                        <td>.col</td>
                        <td>-</td>
                        <td>Creates a flex column</td>
                    </tr>
                    <tr>
                        <td>.row</td>
                        <td>-</td>
                        <td>Creates a flex row</td>
                    </tr>
                    <tr>
                        <td>.wrap</td>
                        <td>-</td>
                        <td>Allows flex content to wrap</td>
                    </tr>
                    <tr>
                        <td>.center</td>
                        <td>-</td>
                        <td>Centers flex content</td>
                    </tr>
                    <tr>
                        <td>.center-*</td>
                        <td>"x" or "y"</td>
                        <td>Centers flex content along axis</td>
                    </tr>
                    <tr>
                        <td>.top</td>
                        <td>-</td>
                        <td>Positions flex content to top</td>
                    </tr>
                    <tr>
                        <td>.bottom</td>
                        <td>-</td>
                        <td>Positions flex content to bottom</td>
                    </tr>
                    <tr>
                        <td>.left</td>
                        <td>-</td>
                        <td>Positions flex content to left</td>
                    </tr>
                    <tr>
                        <td>.right</td>
                        <td>-</td>
                        <td>Positions flex content to right</td>
                    </tr>
                </table>
            </div>
        </Wrapper>
    )
}