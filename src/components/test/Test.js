import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    test: 'test'
  };
  componentDidMount() {
    console.log('componentDidMount...');
  }
  componentWillMount() {
    console.log('componentWillMount...');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...');
  }

  static getDerivedStateFromError(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...')
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}
