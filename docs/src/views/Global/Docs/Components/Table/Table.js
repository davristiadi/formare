import React, { PropTypes } from 'react'
import { Highlight } from 'components/Highlight';

const Table = props => {
    return (
        <div id="card">
            <article className="fr-article article">
                <div className="fr-heading heading">
                    <h2 className="title">Table</h2>
                    <h4 className="subtitle color-gray">
                        The Table component enables you to visualize a large set of data concisely and
                        in an easiest way possible.
                    </h4>
                </div>
                <section>
                    <div className="table table--striped mg-bottom">
                        <table>
                            <thead className="table__head table__head--primary">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Height</th>
                                    <th>Birth Year</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody className="table__body">
                                <tr>
                                    <td>1</td>
                                    <td>Luke Skywalker</td>
                                    <td>172 cm</td>
                                    <td>19BBY</td>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>C-3PO</td>
                                    <td>167</td>
                                    <td>112BBY</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>R2-D2</td>
                                    <td>96</td>
                                    <td>33BBY</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Darth Vader</td>
                                    <td>202</td>
                                    <td>41.9BBY</td>
                                    <td>Male</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Highlight lang="html">
                        {`<div class="table">
                            <table>
                                <thead className="table__head table__head--primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Height</th>
                                        <th>Birth Year</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody className="table__body">
                                    <tr>
                                        <td>1</td>
                                        <td>Luke Skywalker</td>
                                        <td>172 cm</td>
                                        <td>19BBY</td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>C-3PO</td>
                                        <td>167</td>
                                        <td>112BBY</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>R2-D2</td>
                                        <td>96</td>
                                        <td>33BBY</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Darth Vader</td>
                                        <td>202</td>
                                        <td>41.9BBY</td>
                                        <td>Male</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>`}
                    </Highlight>
                </section>
            </article>
        </div>
    )
}

Table.propTypes = {
    
}

export default Table