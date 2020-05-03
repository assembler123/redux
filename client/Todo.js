import React, { Component } from 'react';
import { connect } from 'react-redux';
class Todo extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            task:'',
            disable:true
        }
    }
    // componentDidMount()
    // {
    //     console.log("did mount=----",this.props)
    // }
    componentWillReceiveProps(nextProps) {
        console.log("reccccccc",this.props,nextProps)
    }
    render()
    {

    const addtask=()=>{
        this.props.Add(this.state.task);
        this.setState({task:'',disable:true})
    }
        return(<div style={{marginTop:'50px'}}>
            <input type='text' placeholder='tasks' style={{fontSize:'17px',padding:'5px 10px'}} 
            onKeyPress={
                (e)=>
                {
                    console.log('dfdfdfddfdfdfdfd')
                    if(e.key=='Enter')
                        addtask()

                }
            }
            onChange={
                (e)=>{
                    if(e.target.value!='')
                    this.setState({task:e.target.value,disable:false})
                    else
                    this.setState({task:'',disable:true})

                }
            }
            value={this.state.task}
            ></input><button 
            onClick={addtask}
            style={{fontSize:'17px',padding:'5px 10px',background:'#f72312'}} disabled={this.state.disable}>Add </button>
            {/* {this.props.tasks.map(e=><h1>{e}</h1>)} */}
            {this.props.tasks.map((e,index)=><div style={{margin:'10px 5px;'}}><h4 key={index}>{e}</h4> <button onClick={()=>{this.props.Delete(index)}}>Delete</button></div>)}
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log("Ddd",state)
    return Object.assign({},state.todoReducer);
}
const mapDispatchToProps=(dispatch)=>{
    return {
        Add:(param)=>{
            dispatch({
                type:'ADD_TASK',
                payload:param
            })
        },
        Delete:(index)=>{
            dispatch({
                type:'DELETE_TASK',
                payload:index
            })
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)