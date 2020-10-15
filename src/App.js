import React from 'react';
import './App.css';
import ListOfCategories from './components/ListOfCategories';
import Controls from './components/Controls';
import { Layout } from 'antd';
const { Footer,  Content } = Layout;

function App() {
  return (
    <Layout>
      <Content><ListOfCategories /></Content>
      <Footer><Controls /></Footer>
    </Layout>
  );
}

export default App;
