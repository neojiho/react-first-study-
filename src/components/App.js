import React from "react";
import Header from "./Header"

document.getElementById("root").className = '';

class App extends React.Component{
	constructor(){
		super();
		this.st = {
			color : "red",
			fontSize : "14px"
		}
	}


	render(){
		let name = "JIHO";
		let st = {
			color :'red',
			fontSize : '14px'
		};
		let alert2 = () => {
			name = "HOON";
			alert(name);
		};

		return (
			/* 여기서부터 react 문법임 */
			<div>
				{/*주석입니다.*/}
				<Header st = {this.st}/>
				<h1 style={st} className="no">Hello</h1>
				<p>My name is {name}!!</p>
				<p>{name == "moongky"? 'True' : "false"}</p>
				<button onClick={alert2}>경고창</button>
				<Content />
			</div>
		)
	}
}


class Content extends React.Component {
    render(){
        return (
            <div>
	            <div>다른 클래스에서 가져온 CONTENT</div>
                <h2>Content</h2>
                <p> Hey! </p>
            </div>
        );
    }
}

export default App;

//중괄호는 안에 자바스크립트 변수를 쓰겠다는 약속.
//if else문을 쓸수가 없기에 삼항연산자를 써야함.
//다른 class안에서 다른 class를 불러올 수 없는듯?