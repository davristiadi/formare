import React, { PropTypes } from 'react';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const Table = props => {
  return (
    <div id="card">
      <article className="fr-DocsArticle">
        <div className="fr-DocsArticle-heading">
          <h2 className="fr-DocsArticle-title">Table</h2>
          <h5 className="fr-DocsArticle-subtitle">Officia ullamco sit aliqua consectetur commodo tempor magna fugiat aliqua cillum.</h5>
        </div>
        <section className="fr-DocsArticle-section">
          <div className="Heading">
            <h4 className="Title">Overview</h4>
          </div>
          <p>Nostrud sint id velit ipsum nulla irure labore quis. Aliqua cillum non pariatur ad est non.</p>
          <Preview>
            <PreviewDisplay>
              <div className="Table">
                <table>
                  <thead className="Table-head">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Height</th>
                      <th>Birth Year</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody className="Table-body">
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
                      <td>167 cm</td>
                      <td>112BBY</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>R2-D2</td>
                      <td>96 cm</td>
                      <td>33BBY</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Darth Vader</td>
                      <td>202 cm</td>
                      <td>41.9BBY</td>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </PreviewDisplay>
            <PreviewHighlight lang="html">
              {`
              <div className="Table table--striped">
                <table>
                  <thead className="Table-head">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Height</th>
                      <th>Birth Year</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody className="Table-body">
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
              `}
            </PreviewHighlight>
          </Preview>
        </section>
      </article>
    </div>
  );
};

Table.propTypes = {};

export default Table;
