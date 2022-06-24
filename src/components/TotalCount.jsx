import React, { Component } from 'react'

export default class TotalCount extends Component {
    render() {
        return (
            <div className="form-group">
                <button className="btn btn-lg btn-dark my-3" onClick={this.props.onClick}>Spočítej</button><br />
                <h2>{`konečná cena ${this.props.total} kč`}</h2>
            </div>
        )
    }
}
