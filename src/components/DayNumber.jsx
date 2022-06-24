import React, { Component } from 'react'

export default class DayNumber extends Component {


    render() {
        return (
            <div className={this.props.className}>
                
                    
                       
                            <span>Pocet dnů </span>
                        
                   
                    <select  value={this.props.value} onChange={this.props.onChange}>
                        <option value="5">5 </option>
                        <option value="7">7</option>
                        <option value="14">14</option>
                        <option value="31">31</option>
                    </select>
              
            </div>
        )
    }
}
