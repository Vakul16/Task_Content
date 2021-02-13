import React, { Component } from 'react'
import axios from 'axios'
class DataList extends Component {
	constructor(props) {
		super(props)

	this.state = {
      children: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://www.reddit.com/r/reactjs.json')
			.then(response => {
				console.log(response.data.data.children)
				this.setState({ children: response.data.data.children})
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { children, errorMsg } = this.state;
		console.log(children.length)
		return (
			<div>
            <h1 >Data List</h1>
            <table>
               <tbody>
                  {
					children.map((tblData, index) => {
						const { title, url, score, selftext_html } = tblData.data
						return (
						   <tr>
							  <td>{title}</td>
							  <td>{url}</td>
							  <td>{score}</td>
						   </tr>
						)
					 })
				  }
               </tbody>
            </table>
         	</div>
		)
	}
}

export default DataList