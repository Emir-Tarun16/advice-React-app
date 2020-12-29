import Axios from 'axios';
import React, { Fragment } from 'react';

class AdviceApi extends  React.Component{
    constructor(){
        super();
        this.state = {
            advice : ''
        }
    }

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () =>{
        Axios.get('https://api.adviceslip.com/advice').then(
            (response)=>{
                
                console.log(response);
                const {advice} = response.data.slip;
                this.setState({advice});

            }
        ).catch((error)=>{
            console.log(error);
        });
    }

render(){
    const {advice} = this.state
    return(
            <Fragment>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button"
                     onClick={this.fetchAdvice}>
                        <span>
                          <strong>  GIVE ME ADVICE!</strong>
                        </span>
                    </button>
                </div>
            </div>
            </Fragment>
    )
}

}


export default AdviceApi;