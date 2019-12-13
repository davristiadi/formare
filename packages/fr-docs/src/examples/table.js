import React from 'react';
import { Preview, PreviewDisplay } from 'components/preview';

const tableDummyData = {
  columns: ['Name', 'Age', 'Location'],
  rows: [
    {
      name: 'David',
      age: '25',
      location: 'Jakarta, Indonesia',
    },
    {
      name: 'Ishak',
      age: '23',
      location: 'Poso, Indonesia',
    },
    {
      name: 'Marvin',
      age: '27',
      location: 'Singapore, Singapore',
    },
  ],
};

export const TableOverview = () => {
  return (
    <Preview lang="html" layout="horizontal" mirror>
      <PreviewDisplay style={{ width: '60%' }}>
        <div className="Table">
          <table>
            <thead className="Table-head">
              <tr>
                {tableDummyData.columns.map(column => {
                  return <th>{column}</th>;
                })}
              </tr>
            </thead>
            <tbody className="Table-body">
              {tableDummyData.rows.map(item => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </PreviewDisplay>
    </Preview>
  );
};
