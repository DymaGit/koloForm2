import React, { Component } from 'react'



export default class BikeType extends Component {
    handleError = (event) => {

    }

    render() {
        return (
            <div class="m-3">
                <div className={this.props.className}>
               
                    <input data-pos={this.props.id} name='checkbox' checked={this.props.checked} onChange={this.props.onChange} type="checkbox" />&nbsp;   
            
                    {this.props.label} {this.props.price} Kč/den &nbsp;
                    

              

                    <input data-pos={this.props.id} name='value' type="number" value={this.props.value} onChange={this.props.onChange} />

                </div>
            </div>
        )
    }
}
