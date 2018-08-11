import React , { Component } from 'react';
import Counter from './counter';
class Counters extends Component{
    state = {
        number1: 0,
        number2: 0,
        imageUrl: "https://cache4.pakwheels.com/ad_pictures/2428/audi-a3-1-2-tfsi-design-line-2015-24287263.png",
        bmw: "http://www.nafpaktia.com/data/wallpapers/45/879875.jpg",
        number3: "Answer",
        tags: ['Audi a3'],
        counters:[
          { id: 1, value: 0 }
      ]
    };
    image = {
        fontSize:10,
        marginLeft: "450px",
        height: "300px",
    };
    render(){
        return(
            <div>
                <hr/>
                {/* conditional rendering */}
                <h4> Cars list </h4>
                {this.state.tags.length === 0 && "Please buy some cars"}
                {/*//gets header image */}
                <img style={this.image} src={this.state.imageUrl} />
                <img style={this.image} src={this.state.bmw} />
                {this.renderTags()}

                <hr/>
                <h4> 2 digit calculator only </h4>
                <p> First click 2 digits and then click the red button to perform action on</p>

                <button onClick={ () => this.addOne({id: 1})} className="btn btn-primary btn-sm m-2"> One</button>
                <button onClick={ () => this.addTwo({id: 2})} className="btn btn-primary btn-sm m-2"> Two</button>
                <button onClick={ () => this.addThree({id: 3})} className="btn btn-primary btn-sm m-2"> Three</button>
                <br/>
                <button onClick={ () => this.addFour({id: 4})} className="btn btn-primary btn-sm m-2"> Four</button>
                <button onClick={ () => this.addFive({id: 5})} className="btn btn-primary btn-sm m-2"> Five</button>
                <button onClick={ () => this.addSix({id: 6})} className="btn btn-primary btn-sm m-2"> Six</button>
                <br/>
                <button onClick={ () => this.addSeven({id: 7})} className="btn btn-primary btn-sm m-2"> Seven</button>
                <button onClick={ () => this.addEight({id: 8})} className="btn btn-primary btn-sm m-2"> Eight</button>
                <button onClick={ () => this.addNine({id: 9})} className="btn btn-primary btn-sm m-2"> Nine</button>
                <br/>
                <br/>
                <button onClick={() => this.multiply()} className="btn btn-danger btn-sm m-2"> Multiply </button>
                <button onClick={() => this.divide()} className="btn btn-danger btn-sm m-2"> Divide </button>
                <button onClick={() => this.addition()} className="btn btn-danger btn-sm m-2"> Add </button>
                <button onClick={() => this.substract()} className="btn btn-danger btn-sm m-2"> Substract </button>
                <p className={"badge m-2 badge-warning"}> {this.show()} </p>
                <hr/>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}  //we can't use this.props.key
                        counter={counter}
                        onDelete={this.handleDelete}>
                        <h4> Let's add up our goals counts here ! :D </h4>
                    </Counter>
                ))}
            </div>
        );
    }
    addOne = (number) => {
        this.setNumber(number.id);
    };
    addTwo = (number) => {
        this.setNumber(number.id);
    };
    addThree = (number) => {
        this.setNumber(number.id);
    };
    addFour = (number) => {
        this.setNumber(number.id);
    };
    addFive = (number) => {
        this.setNumber(number.id);
    };
    addSix = (number) => {
        this.setNumber(number.id);
    };
    addSeven = (number) => {
        this.setNumber(number.id);
    };
    addEight = (number) => {
        this.setNumber(number.id);
    };
    addNine = (number) => {
        this.setNumber(number.id);
    };
    setNumber = (number) => {
        const {number1} = this.state;
        if(number1===0){
            this.setState({number1: number});
        }else{
            this.setState({number2: number});
        }
    };
    multiply(){
        this.setState({number3: this.state.number1*this.state.number2});
        this.refresh();
    }
    addition(){
        this.setState({number3: this.state.number1+this.state.number2});
        this.refresh();
    }
    divide(){
        this.setState({number3: this.state.number1/this.state.number2});
        this.refresh();
    }
    substract(){
        this.setState({number3: this.state.number1-this.state.number2});
        this.refresh();
    }
    refresh(){
        this.setState({number1: 0});
        this.setState({number2: 0});
    }
    show(){
        const {number3} = this.state;
        return number3;
    }
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };
    //checks for if tags contain anything and return else wise
    renderTags(){
        // console.log(this.state.value); this.state.value is accessible without binding
        if (this.state.tags.length === 0) return  <p> Currently no Cars bought </p>;
        return <ul> {this.state.tags.map( tag => <li key={tag}> {tag} </li>)} </ul> ;
    }
}
export default Counters;