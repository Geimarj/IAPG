/**
 * Created by student1 on 4/18/2016.
 */
import React from 'react';
import TodoItem from './TodoItem'

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mytodo:'',
            'list':[
                
            ]
        };
     
    }
        onKeyUp=(e)=>{
            if(e.key==="Enter")
            {
                let tmp = this.state.list;
                tmp.push(this.state.mytodo);
                this.setState({
                    list:tmp,
                    mytodo:''
                });
            }
        };
        
        onChange=(e)=>{
            this.setState({
                mytodo:e.target.value
            })
        };
        onAddItem=()=>{
                var listx = this.state.list;
                listx.push(this.state.mytodo);
                
                this.setState({
                    list:listx
                })
                };
         deleteMe=(index)=>{
           var tmp=this.state.list;
           tmp.splice(index,1);
           this.setState({
               list:tmp
           });
         };   
        
    render(){

        let items = [];
        for(var i=0;i<this.state.list.length;i++) {
            items.push(<TodoItem key={i}
            description={this.state.list[i]}
            index={i}
            removeMe={this.deleteMe}
            />);
        
    }
        
        return (
        
           <div className="todoapp">
            <div className="header"> My todo-list</div>
            <center><input type="text" 
            onChange={this.onChange} 
            onKeyUp={this.onKeyUp}
            placeholder="What needs to be done?"
            value={this.state.mytodo}
            autoFocus={true}
            className="input"/>
             {items}
         </center>
           </div>
        
                )
    }
}
