import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props){
        super(props);
            this.state={error:null}
        }
    componentDidCatch(error)
{
    this.setState({error:error})
}
  render() {
   if(this.state.error)
   {
    return(<h1>error occured</h1>)
   }
   else{
    return this.props.children;
   }
  }
}

export default ErrorBoundry