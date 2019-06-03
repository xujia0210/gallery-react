import { Layout, Popconfirm, Breadcrumb, Icon, Table, Button, Form, Input } from 'antd';
import React, { Component } from 'react';
import { Router, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css'

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
    );
const EditableFormRow = Form.create()(EditableRow);
const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }, {
    title: 'Action', 
    dataIndex: '', 
    key: 'x', 
    render: () => <a href="javascript:;">Delete</a>,
  }];
  
  const data = [];
    for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
    }
class Home extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };
    componentWillMount() {

    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    deleteArticle(Id) {
      console.log(Id)
    }
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      }
      handleDelete(item, index) {
        console.log(item, index)
      }
      onSelectChange = (selectedRowKeys) => {
          
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }
    render() {
      const { loading, selectedRowKeys } = this.state;
      const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      };        
      const hasSelected = selectedRowKeys.length > 0;

      return (
          <div>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
              <div>
                <div style={{ marginBottom: 16 }}>
                <Button
                    type="primary"
                    onClick={this.start}
                    disabled={!hasSelected}
                    loading={loading}
                >
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
