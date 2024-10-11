import React, { Component } from 'react'
import load from './load.gif'

export default class loading extends Component {
  render() {
    return (
      <div>
       <img src={load} alt="load"></img>
      </div>
    )
  }
}
