import React from 'react';

export const SpacingDataTable = () => {
  const tableHeadings = ['Size', 'Variable', 'Value', 'Computed Value'];
  const tableData = [
    {
      size: '2xsmall',
      variable: 'spacing(2xsmall)',
      value: '$spacing / 4.5',
      computedValue: '0.223rem',
    },
    {
      size: 'xsmall',
      variable: 'spacing(xsmall)',
      value: '$spacing / 3',
      computedValue: '0.334rem',
    },
    {
      size: 'small',
      variable: 'spacing(small)',
      value: '$spacing / 1.5',
      computedValue: '0.667rem',
    },
    {
      size: 'base',
      variable: '$spacing',
      value: '$spacing * 1',
      computedValue: '1rem',
    },
    {
      size: 'large',
      variable: 'spacing(large)',
      value: '$spacing * 1.5',
      computedValue: '1.5rem',
    },
    {
      size: 'xlarge',
      variable: 'spacing(xlarge)',
      value: '$spacing * 3',
      computedValue: '3rem',
    },
    {
      size: '2xlarge',
      variable: 'spacing(2xlarge)',
      value: '$spacing * 4.5',
      computedValue: '4.5rem',
    },
  ];

  return (
    <div className="Table">
      <table>
        <thead className="Table-head">
          <tr>
            {tableHeadings.map(heading => (
              <th>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="Table-body">
          {tableData.map(({ size, variable, value, computedValue }) => {
            return (
              <tr>
                <td>
                  <code>{size}</code>
                </td>
                <td>
                  <code>{variable}</code>
                </td>
                <td>
                  <code>{value}</code>
                </td>
                <td>
                  <code>{computedValue}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
