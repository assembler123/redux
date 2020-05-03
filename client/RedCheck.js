import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
class RedCheck extends Component {
    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         name:this.props.name,
    //         age:this.props.age,
    //         address:this.props.address
    //     }
        
    // }
    // componentDidMount() {
    //     console.log(this.props)
    // }
    componentWillReceiveProps(nextProps) {
        console.log("reccccccc",this.props,nextProps)
    }
    // shouldComponentUpdate()
    // {
    //     return true;
    // }
    render() {
        return ( <div  style={{textAlign:'center',marginTop:'10%'}}>
            <h1> Hello </h1> <h2> NAME: {this.props.name}</h2> <h2> AGE: {this.props.age}</h2> <h2 > ADDRESS: {this.props.address}< /h2> 
            <button onClick={()=>{
                const by=5;
                console.log("CALLED UP")
                this.props.Up(by);
            }}> Age Up + </button>
            <button onClick={()=>{
                console.log("CALLED Down")
                const by=5;
                this.props.Down(by);
            }}> Age Down - </button>
            <Todo></Todo>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.ageReducer)
    return state.ageReducer;
}
const mapDispatchToProps = (dispatch) => {
    return { Up:(by)=>{
            dispatch({
                type:'AGE_UP',
                payload:by
            })
        }
        ,
        Down:(by)=>{
            dispatch({
                type:'AGE_DOWN',
                payload:by
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RedCheck);