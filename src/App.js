import React, { Component } from 'react'
import Ninja from './Ninja'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { nama: "desto", usia: "28", status: "menikah", id:1 },
      { nama: "ari", usia: "30", status: "lajang", id:2 }
    ]
  }

  handleTambahNinja = (data) => {
    let vm = this.state
    data.id = Math.random()

    let newNinjas = [...vm.ninjas, data]
    this.setState({
      ninjas : newNinjas
    })
    console.log("cmp apps = ", data)

  }

  handleHapusNinja = (id) => {
    let newNinjas = this.state.ninjas.filter(data => {
      return data.id !== id
    })
    this.setState({
      ninjas : newNinjas
    })

  }

  render() {
    const { ninjas } = this.state

    return (
      <div className="App">
        welcome
        <Ninja ninjaList={ninjas} hapusNinja={this.handleHapusNinja} />

        <AddNinja tambahNinja={this.handleTambahNinja}/>
      </div>
    )
  }
}

export default App;
