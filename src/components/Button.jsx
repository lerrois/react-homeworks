import React from "react";

export class Picture extends React.Component {
    state = {
        count: 0,
    };

    function Appl () {

        return <div className={Appl}>
            <h3> please choose the smile you like better: </h3>
            <List data = {items /}>

            </List>
        </div>
}

    handleCountChange = (e) => {

        console.log(e)
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        });
    };

    render () {
        return <div className="smile">
            <img src={this.props.url} data-new="1" onClick={this.handleCountChange}/>
            <img src={this.props.url} data-new="2" onClick={this.handleCountChange}/>
            <img src={this.props.url} data-new="3" onClick={this.handleCountChange}/>
        </div>
    }
}
