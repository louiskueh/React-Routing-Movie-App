import React from 'react';
import axios from 'axios';
import { ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
let url = "http://13.80.18.211:5000/"

export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieIdVisited: []
    };
  }
  componentDidMount() {
    axios.get(url+"all/").then((response) => {
      console.log("Recieved movies" , response)
      this.setState({ movieIdVisited: response.data });
    }).catch((error) => {
      console.log("error is" + error)
    })
  }
  sendMovie(movieDetails) {

    axios.get(url+"add/" + movieDetails).then((response) => {
      console.log("Posted movie " + movieDetails)
    }).catch((error) => {
      console.log("error is" + error)
    })
  }
  

  render() {

    return (


      <div>

        {this.props.data.map((x, i) =>
          (
            <Link to={"/details/" + x.imdbID} onClick={() => this.sendMovie(x.imdbID)} >
              <ListGroup.Item action variant={
                this.state.movieIdVisited.includes(String(x.imdbID))  ?
                "success" : "light"

              } style={{ display: 'flex', justifyContent: 'center' }} key={i} >{x.Title}  <Image style={{ width: 50, height: 'auto' }} src={x.Poster} thumbnail /></ListGroup.Item>
              {/* <ListGroup.Item key={i} >{x.imdbID}</ListGroup.Item> */}
            </Link>
          )
        )}
      </div>
    );
  }


}
DisplayList.defaultProps = {
  data: []
};