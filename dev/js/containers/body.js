import React from 'react';

export default class Body extends React.Component{



	constructor(props) {
      super(props)
      this.state = {
      	book:{
      		name:'',
      		price:''
      	}
       }
       this.handleName = this.handleName.bind(this);
       this.handlePrice = this.handlePrice.bind(this);
       this.save = this.save.bind(this);
    }

    ComponentDidMount(){

    }

    handleName(event){
    	let localBook = this.state.book;
    	localBook['name'] = event.target.value;
    	this.setState({book : localBook})
    }

    handlePrice(event){
    	let localBook = this.state.book;
    	localBook['price'] = event.target.value;
    	this.setState({book : localBook})
    }

    save(){
		fetch('http://localhost:3000/library', {
			method: 'post',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			'Name': this.state.book['name'],
			'Price' : this.state.book['price']
			})
			})
		.then(res => {
			if (res.ok) return res.json()
			}).
		then(data => {
			console.log(data)
			window.location.reload()
		})
    }

 	render(){
 		console.log(this.state);
 	return(
 		<div >

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Name of the Book:</label>
        <input type="text"  id="DesignNoOfPages" value={this.state.book['name']} onChange={(event)=>{this.handleName(event)}} className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <label className="control-label">Price of the Book:</label>
        <input type="text" id="SizeInLOC" value={this.state.book['price']} onChange={(event)=>{this.handlePrice(event)}} className="form-control" />
        </div>

        <div className="form-group col-xs-12 col-sm-6 col-xl-3">
        <button onClick={this.save}>Submit</button>
        </div>

        </div>
 	);
 	}

 }