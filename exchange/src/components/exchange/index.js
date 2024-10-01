import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class Index  extends React.Component  {

    componentDidMount() {
        window.location.replace('https://maxxbat.com');
    }

  render() {
    return (
      <>
         <h1>404 Not found...</h1>
      </>
    )
  }
}
