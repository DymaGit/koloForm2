
import './App.css'
import React, { Component } from 'react'
import BikeType from './components/BikeType'
import TotalCount from './components/TotalCount'
import DayNumber from './components/DayNumber'
import AddExtras from './components/AddExtras'
import ComparePrice from './components/ComparePrice'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      totalPrice: 0,
      rentDays: 1,
      extras: 1,
      bikes: [
        {
          id: "1",
          label: "horské kolo",
          price: 100,
          count: 1,
          checked: false,
         
       

        },
        {
          id: "2",
          label: "dětské kolo",
          price: 50,
          count: 1,
          checked: false,
          
          

        },
        {
          id: "3",
          label: "silniční kolo",
          price: 150,
          count: 1,
          checked: false,
         
         
        },
    

        {
          id: "5",
          label: "gravel kolo",
          price: 200,
          count: 1,
          checked: false,
          
          
        },

      ],

    }
  }

  handleChange = (event) => {
    let from = event.target.name
    console.log(`handleChange fired from ${from}`)
    let index = parseInt(event.target.getAttribute("data-pos")) - 1
    let bikes = [...this.state.bikes]
    // event.preventDefault()
    if (from === 'value') {
      let val = event.target.value
      if (val < 0)
        val = 0
      let item = { ...bikes[index], count: val }
      bikes[index] = item
    }
    else {
      let val = event.target.checked
      let item = { ...bikes[index], checked: val }
      bikes[index] = item
    }
    this.setState({ bikes: bikes })
  }
  handleDayChange = (event) => {
    this.setState({ rentDays: event.target.value })
  }
  handleExtraChange = (event) => {
    console.log(`handleExtra fired ${event.target.value}`)
    this.setState({ extras: event.target.value })
  }

  handleSum = () => {
    console.log('handle sum fired')
    let checkedBikes = this.state.bikes.filter(bike => bike.checked === true)
    let total = (Math.floor((checkedBikes.reduce((a, v) => a = (a + v.price * v.count), 0)) * this.state.rentDays * this.state.extras))
    console.log(total)
    this.setState({ totalPrice: total })
  }
  handleMaxValChange = (event) => {
    console.log(`handleMaxChange fired`)
    this.setState({ MaxPrice: event.target.value })
  }



  render() {
    console.log('app running')
    return (
      <div className='App mb-5'>
        <div className="container text-center">
          <legend >
            <h2>Půjčovna kol</h2>
          </legend>
     
            {this.state.bikes.map((bike) => <BikeType
              
              id={bike.id}
              key={bike.id}
              label={bike.label}
              price={bike.price}
              description={bike.description}
              value={bike.count}
              checked={bike.checked}
              onChange={(event) => this.handleChange(event)}
            />)}
         
          <hr />
          <DayNumber
            
            onChange={(event) => this.handleDayChange(event)}
          />
          <AddExtras
            onChange={(event) => this.handleExtraChange(event)}
          />

          <hr />
          <TotalCount
            onClick={this.handleSum}
            total={this.state.totalPrice}
          />



        </div>

      </div>
    )
  }
}
