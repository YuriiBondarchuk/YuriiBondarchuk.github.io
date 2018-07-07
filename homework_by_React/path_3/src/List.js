import React, {Component, Fragment} from 'react';
import './List.css';
import { Link} from 'react-router';
import Trigger from './Trigger'




class List extends Component {
    constructor() {
        super();
        this.state = {
            sneakers: [
                'adidas', 'Stan', 'Smith', 'AlfaBOUNCE',
                'Superstar', 'stan_smith_adidas', 'alpfabounce_adidas', 'superstar_adidas', 'Nike', 'Air-Max', 'Air-Force',
                'Huarache', 'Air ZOOM Pegasus ', 'Air Max', 'air-essential-mens-shoe', 'jd_030664_a', 'air-huarache-ultra-shoe',
                'ML574SEAML574SEA', 'MRL247RBMRL247RB', 'Icra-Trainer', 'Blaze Black', 'Suede Classic CITI', 'Vikky Platform', ' ST Runner NL'
            ],
            list_seach: [],
            basket: []
        }

    }

    clickChange = () => {


        this.setState({
            list_seach: this.state.sneakers.map((value) => {
                return value.indexOf(this.refInput.value) === -1 ? null : value
            })
        })
    }

    clickBuy = (v) => {
       var array= this.state.basket;
       array.push(v);
    this.setState({basket: array})

    }

    render() {





        return (

            <Fragment>
                {console.log(this.props.params)}
                <label htmlFor="seach">Enter words to search for </label>
                <input type="text" name={'seach'} id={'seach'} ref={input => this.refInput = input}
                       onChange={this.clickChange}/>
                <div>
                    <h3>Basket : </h3><br/>
                    <ul>

                        {
                            this.state.basket.map((value,key)=>{
                            return <li key={key} >{value}</li>
                        })

                        }


                    </ul>

                </div>
                <h3> List sneakers: </h3>
                <ol>
                    {
                        this.state.list_seach.length === 0 ? this.state.sneakers.map((value, key) => {
                            return (
                               <li key={key}> <Link to={"/"+value}>{value} </Link></li>

                            )
                        }) : this.state.list_seach.map((value, key) => {
                            return (
                                value === null ? '' : <li key={key} data-key={this.key}>{value}

                                    <Trigger click={() => this.clickBuy(value)}/>
                                </li>

                            )
                        })}



                </ol>

            </Fragment>

    )
    }
    }

    export default List;