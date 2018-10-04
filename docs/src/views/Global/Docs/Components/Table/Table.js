import React, { PropTypes } from 'react'

const Table = props => {
    return (
        <div id="card">
            <article className="fr-article article">
                <div className="fr-heading heading">
                    <h3 className="title">Table</h3>
                    <h5 className="subtitle color-gray">
                        Aute irure in pariatur eu eiusmod exercitation do consectetur fugiat irure cupidatat nisi. 
                        Proident elit elit in ad cupidatat fugiat in consectetur mollit elit nostrud quis.
                    </h5>
                </div>
            </article>
            <section>
                <div className="table table--striped">
                    <table>
                        <thead className="table__head table__head--primary">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody className="table__body">
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Tangerang, Jl Wedelia, sektor III.3 blok E.2/10, Puspita Loka, BSD</td>
                                <td>0812 989 2015 6</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Andrew K</td>
                                <td>Tangerang, Jl Wedelia, sektor III.3 blok E.2/10, Puspita Loka, BSD</td>
                                <td>0812 989 2015 6</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Hehe</td>
                                <td>Tangerang, Jl Wedelia, sektor III.3 blok E.2/10, Puspita Loka, BSD</td>
                                <td>0812 989 2015 6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

Table.propTypes = {
    
}

export default Table