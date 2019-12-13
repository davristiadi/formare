import React from 'react';

export const HeadingsTable = () => {
  return (
    <div className="Table">
      <table>
        <thead className="Table-head">
          <tr>
            <th>Tag</th>
            <th>Class variant</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody className="Table-body">
          <tr>
            <td>
              <code>{`<h1></h1>`}</code>
            </td>
            <td>
              <code>{`.Heading-1`}</code>
            </td>
            <td>
              <h1>Heading 1</h1>
            </td>
          </tr>
          <tr>
            <td>
              <code>{`<h2></h2>`}</code>
            </td>
            <td>
              <code>{`.Heading-2`}</code>
            </td>
            <td>
              <h2>Heading 2</h2>
            </td>
          </tr>
          <tr>
            <td>
              <code>{`<h3></h3>`}</code>
            </td>
            <td>
              <code>{`.Heading-3`}</code>
            </td>
            <td>
              <h3>Heading 3</h3>
            </td>
          </tr>
          <tr>
            <td>
              <code>{`<h4></h4>`}</code>
            </td>
            <td>
              <code>{`.Heading-4`}</code>
            </td>
            <td>
              <h4>Heading 4</h4>
            </td>
          </tr>
          <tr>
            <td>
              <code>{`<h5></h5>`}</code>
            </td>
            <td>
              <code>{`.Heading-5`}</code>
            </td>
            <td>
              <h5>Heading 5</h5>
            </td>
          </tr>
          <tr>
            <td>
              <code>{`<h6></h6>`}</code>
            </td>
            <td>
              <code>{`.Heading-6`}</code>
            </td>
            <td>
              <h6>Heading 6</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
