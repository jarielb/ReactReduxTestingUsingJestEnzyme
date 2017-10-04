import React from "react"
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import {addInputs, subtractInputs} from '@/actions/calculatorActions'


export class Home extends React.Component{
	addOperation(){
		let IntegerA, IntegerB, IntegerC;
		IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
		IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
		IntegerC = IntegerA + IntegerB

		this.props.dispatch(addInputs(IntegerC))
	}
	subtractOperation(){
		let IntegerA, IntegerB, IntegerC;
		IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
		IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
		IntegerC = IntegerA - IntegerB

		this.props.dispatch(subtractInputs(IntegerC))
	}
	render(){
		return(
			<div className="container">
				<h2>using React and Redux</h2>
				<div>Input 1: 
					<input type="text" placeholder="Input 1" ref="input1"></input>
				</div>
				<div>Input 2 :
					<input type="text" placeholder="Input 2" ref="input2"></input>
				</div>
				<div>Output :
					<input type="text" placeholder="Output" readOnly ref="output" value={ this.props.output }></input>
				</div>
				<div>
					<button className="button" id="add" onClick={ this.addOperation.bind(this) }>Add</button>
					
					<button className="button" id="subtract" onClick={ this.subtractOperation.bind(this) }>Subtract</button>
				</div>
				
				<hr/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	output:state.output
})

export default connect(mapStateToProps)(Home)