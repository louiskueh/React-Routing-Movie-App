import React from 'react';
import axios from 'axios';
import { ListGroup, FormControl, InputGroup, Button, Image, Container } from 'react-bootstrap'
import DisplayList from './DisplayList';
import { Link } from 'react-router-dom'
export default class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.match.params.id)
        this.state = {
            id: props.match.params.id,
            movieDetails: {}
        };


        // this.fetchData = this.fetchData.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        let searchTerm = this.state.id
        axios.get('http://www.omdbapi.com/?i=' + searchTerm + '&apikey=16bb1142').then((response) => {
            this.setState({ movieDetails: response.data });
            console.log("=====")
            console.log(this.state.movieDetails)
            console.log("=====")
        }).catch((error) => {
            console.log("error is" + error)
        })
    }



    render() {
        console.log('PROPS', this.props.movieDetails)
        return (
            <div>
                <Container> 
                    <Link to="/"><h1>Home</h1></Link>

                    <ListGroup >
                        <ListGroup.Item action variant="light" >Title: {this.state.movieDetails.Title}</ListGroup.Item>
                        <ListGroup.Item action variant="light">Year: {this.state.movieDetails.Year}</ListGroup.Item>
                        <ListGroup.Item action variant="light">Plot: {this.state.movieDetails.Plot}</ListGroup.Item>
                        <ListGroup.Item action variant="light">Metascore: {this.state.movieDetails.Metascore}</ListGroup.Item>
                        {/* <ListGroup.Item action variant="light">   </ListGroup.Item> */}
                        <Image style={{width: 200, height: 'auto', }} src={this.state.movieDetails.Poster} />


                    </ListGroup>
                </Container>
            </div>
        );
    }
}
