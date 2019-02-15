import React from 'react';
import classNames from 'classnames';
import { Preview, PreviewHighlight, PreviewDisplay } from 'components/Preview';

const TablePreview = props => {
  const {
    striped,
    theme
  } = props;
  
  const classes = {
    Table: classNames(
      'Table',
      striped ? 'Table--striped' : null,
      theme ? `Table--${theme}` : null
    ),
    TableHead: classNames(
      'Table-head',
      theme ? `Table-head--${theme}` : null
    )
  }
  
  return (
    <Preview>
      <PreviewDisplay>
        <div className={classes.Table}>
          <table>
            <thead className={classes.TableHead}>
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
        {`<div className="${classNames('Table', striped ? 'Table--striped' : null)}">
          <table>
            <thead className="${classNames('Table-head', theme ? `Table-head--${theme}` : null)}">
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
        `}
      </PreviewHighlight>
    </Preview>
  );
};

export default TablePreview;
