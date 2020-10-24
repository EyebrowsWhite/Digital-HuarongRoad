import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: [7, 6, 2, 4, 3, 1, 8, 5, ' ']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const btn = document.getElementsByClassName('blank')[0];
        const btns = document.getElementsByTagName('button');
        let m = [...btns].indexOf(e.target);
        let n = [...btns].indexOf(btn);
        let tag = e.target;
        let zero = btn.id;
        let target = tag.id;
        let num = this.state.num.slice();
        num[m] = zero;
        num[n] = target;
        if(m === n - 1 || m === n + 1 || m === n - 3 || m === n + 3) {
            for(let i = 0; i < 9; i++) {
                btns[i].className = 'number';
            }
            tag.className = "blank";
            this.setState({num: num});
        }
    }

    render() {
        const arr = this.state.num;
        return (
            <div className="square">
                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[0]}
                className="number"
                >
                {arr[0]}
                </button>

                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[1]}
                className="number"
                >
                {arr[1]}
                </button>

                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[2]}
                className="number"
                >
                {arr[2]}
                </button>

                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[3]}
                className="number"
                >
                {arr[3]}
                </button>

                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[4]}
                className="number"
                >
                {arr[4]}
                </button>

                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[5]}
                className="number"
                >
                {arr[5]}
                </button>

                <button
                onClick = {(e) => this.handleClick(e)}
                id={arr[6]}
                className="number"
                >
                {arr[6]}
                </button>

                <button 
                onClick = {(e) => this.handleClick(e)}
                id={arr[7]}
                className="number"
                >
                {arr[7]}
                </button>

                <button 
                onClick = {(e) => this.handleClick(e)}
                className="blank"
                id={arr[8]}
                >
                {arr[8]}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Square />,
    document.getElementById('root')
)