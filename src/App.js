import React, { Component } from 'react'
import Ninja from './Ninja'
import AddNinja from './AddNinja'
// import Rainbow from './component/hoc/Rainbow'
import GetStateFromRedux from './component/hoc/GetStateFromRedux'
import {sellerNav} from './axios/axios'
import BookContextProvider from './context/BookContext'
import BookList from './component/book/BookList'
import './App.css'


class App extends Component {
  state = {
    ninjas: [
      { nama: "desto", usia: "28", status: "menikah", id:1 },
      { nama: "ari", usia: "30", status: "lajang", id:2 }
    ],
    mantap:[]
  }

  componentDidMount(){
    sellerNav.get().then(response => {
      console.log(response.data)
      this.setState({
        mantap : response.data
      })
    })
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
    let mantap

    if(this.state.mantap.length === 0){
      mantap = "kosong"
    }
    else{
      mantap =  this.state.mantap.data.map(data=>{
        return (
          <p key={data.code}>{data.name}</p>
        )
      })
      console.log("mantap = ", mantap)

    }
    return (
      <div className="App">
        <p>welcome</p>

        <div>{mantap}</div> 



        <p> mmmmmmmmmmmmmmmmmmmmmmmmm</p>
        <Ninja ninjaList={ninjas} hapusNinja={this.handleHapusNinja} />

        <AddNinja tambahNinja={this.handleTambahNinja}/>

        <GetStateFromRedux />

        <BookContextProvider>
          <BookList></BookList>
        </BookContextProvider>
      </div>
    )
  }
}

export default App;
