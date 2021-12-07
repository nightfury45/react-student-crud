/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import '../../../node_modules/antd/dist/antd.css';
import React from 'react';
// import styled from 'styled-components';
import { Table, Button, Space } from 'antd';

import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

export default function App() {
  const columns = [
    {
      key: '1',
      title: 'No',
      dataIndex: 'no',
    },
    {
      key: '2',
      title: 'FirstName',
      dataIndex: 'firstName',
    },
    {
      key: '3',
      title: 'LastName',
      dataIndex: 'lastName',
    },
    {
      key: '4',
      title: 'Age',
      dataIndex: 'age',
    },
    {
      key: '5',
      title: 'Action',
      render: () => (
        <Space size="middle">
          <Button type="primary">Show</Button>
          <Button>Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      no: 1,
      firstName: 'Huy',
      lastName: 'Huynh',
      age: 21,
    },
    {
      no: 1,
      firstName: 'Huy',
      lastName: 'Huynh',
      age: 21,
    },
    {
      no: 1,
      firstName: 'Huy',
      lastName: 'Huynh',
      age: 21,
    },
    {
      no: 1,
      firstName: 'Huy',
      lastName: 'Huynh',
      age: 21,
    },
  ];
  return (
    <>
      <div className="App">
        <div>
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}
