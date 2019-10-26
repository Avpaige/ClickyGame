import React, { Component } from "react";
import Oceans from '../Oceans';
import Header from '../Header';
import Members from '../images.json';


let highScore = 0;
let score = 0;

class Game extends Component {

    state = {
        Members,
        highScore,
        score
    };

    componentDidMount = () => {
        Members.sort((a, b) => {
            return 0.5 - Math.random();
        });

        this.setState({ Members });
    }

    thisWasClicked = id => {
        let Members = this.state.Members;
        let selected = Members.find(Member => Member.id === id);
        console.log(selected)
        if (selected.clicked) {

            if (score > highScore) {
                highScore = score;
                this.setState({ highScore });
            }

            score = 0;
            alert("Bummer, you blew the heist and Terry Benedict is on his way.")

            for (let i = 0; i < Members.length; i++) {
                Members[i].clicked = false;
            }

            this.setState({
                Members,
                score
            });

        } else {
            selected.clicked = true;
            score = score++;

            if (score === 12) {
                alert("Congratulations you won!")
                score = 0;
                highScore = 0;
                this.setState({ highScore });

                for (let i = 0; i < Members.length; i++) {
                    Members[i].clicked = false;
                }
            }

            if (score > highScore) {
                highScore = score;
                this.setState({ highScore });
            }

            this.setState({
                Members,
                score
            });
        }


        Members.sort((a, b) => {
            return 0.5 - Math.random();
        });

     
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.state.Members.map(Member => (
                        <Oceans
                            thisWasClicked={this.thisWasClicked}
                            id={Member.id}
                            key={Member.id}
                            image={Member.img}
                            name={Member.name}
                            className="col-sm-1"
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Game;