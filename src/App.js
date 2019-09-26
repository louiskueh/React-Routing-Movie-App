import React from 'react';
import axios from 'axios';
import { ListGroup, Container, FormControl,Jumbotron, InputGroup, Button } from 'react-bootstrap'
import DisplayList from './DisplayList';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      searchTerm: ""
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // so it doesn't freeze
  // since constructor is bounded, so doing in
  // component did mount makes sure it continues
  componentDidMount() {
    this.fetchData();
  }
  handleChange(data) {
    this.setState({ searchTerm: data.target.value });
  }
  fetchData() {
    let searchTerm = this.state.searchTerm
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=16bb1142&s="' + searchTerm + '"').then((response) => {
      this.setState({ user: response.data });
      // console.log("=====")
      // console.log(this.state.user.Search)
      // console.log("=====")
    }).catch((error) => {
      console.log("error is" + error)
    })
  }

  render() {
    return (
      <div className="App">
        <Container>

          <Jumbotron>
            <h1>Movie database</h1>
            <p></p>
          </Jumbotron>
          <InputGroup className="mb-3">
            <FormControl onChange={this.handleChange}
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button onClick={this.fetchData} variant="outline-secondary">Submit</Button>
            </InputGroup.Append>
          </InputGroup>

          <ListGroup>
            <DisplayList data={this.state.user.Search}></DisplayList>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
