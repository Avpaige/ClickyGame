import React, { Component } from "react";
import Oceans from '../Oceans';
import Header from '../Header';
import Members from '../iamges.json';
import './style.css';

let highScore = 0;
let score = 0;

class Game extends Component {

    state = {
        Members,
        highScore,
        score,
    };

    componentDidMount = () => {
        Members.sort((a, b) => {
            return 0.5 - Math.random();
        });

        this.setState({ Members });
    }

     setClicked = id => {
        const Members = this.state.Members;
        const selected = Members.filter(Member => Member.id === id);
        if (selected[0].clicked) {
       
            currentScore = 0;
            alert ("Bummer, you blew the heist and Terry Benedict is on his way.")
        
                for (let i = 0; i < Members.length; i++) {
                    Members[i].clicked = false;
                }

            } else {
                
                    for (let i = 0; i < Members.length; i++) {
                    Members[i].clicked = false;
                }
           

            this.setState({ score });
            this.setState({ Members })

        } else {
            selected[0].clicked = true;

            if (score === 12) {
                alert("Congratulations you won!")
                score = 0;
                highScore = 0;
                this.setState({ highScore });

                    for (let i = 0; i < Members.length; i++) {
                    Members[i].clicked = false;
                }
            } 
          
        } else{
                
                score = score++;

                if (score > highScore) {
                    highScore = score;
                    this.setState({ highScore });
                }
            }

        
            Members.sort((a, b) => {
                return 0.5 - Math.random();
            });

            this.setState({ Members });
            this.setState({ score });
        }
    };

    render() {

        return (
            <div clasName="container-fluid">
                <div className="row">
                    {this.state.Members.map(Member => (
                        <Oceans
                            setClicked={this.setClicked}
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