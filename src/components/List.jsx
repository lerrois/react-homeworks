import React, {Component} from "react";

class List extends React.Component {

    state = {
        count: {},
        result: null
    };

    handleCountChange = (e) => {
        let key = e.target.dataset.key;
        let count = this.state.count;
        if (key in count) {
            count[key] = count[key] + 1;
        } else {
            count[key] = 1;
        }
        // console.log(this.state.count);
    };

    winner = () => {
        const { items } = this.props;
        let count = this.state.count;
        let max = 0;
        let max_key = null;
        for (let i in count) {
            if (max < count[i]) {
                max = count[i];
                max_key = i;
            }
        }
        const res = items.filter( item => {
            return item.key === parseInt(max_key)
        })[0];
        const el = document.getElementById('imgRes');
        const new_element = document.createElement('img');
        new_element.src = res.urla;
        new_element.className = "smiles"
        el.appendChild(new_element);
    }

    render () {
        const { items } = this.props;
        const liSmiles = items.map(item => <img className="smiles" src={item.urla} data-key={item.key} key={item.key} onClick={this.handleCountChange}/>)
        return (
            <div>
                {liSmiles}

                <button onClick={this.winner}>SHOW RESULTS</button>
                <div id="imgRes"></div>
            </div>
        );
    }
}

export default List