import React, { useEffect } from 'react';
import './App.css';
import ListOfCategories from './components/ListOfCategories';
import Controls from './components/Controls';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { getCategoriesError, getCategoriesPending } from './redux/selectors';
import fetchCategories from './redux/fetch'

const { Footer,  Content } = Layout;

function App({error, pending, fetchCategories}) {
  
  useEffect(fetchCategories,[]);
  
  return (
    <Layout>
      <Content><ListOfCategories /></Content>
      <Footer><Controls /></Footer>
    </Layout>
  );
}

const mapStateToProps = state => ({
  error: getCategoriesError(state),
  pending: getCategoriesPending(state)
})

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
