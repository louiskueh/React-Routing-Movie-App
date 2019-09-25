import React from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class DisplayList extends React.Component {

  constructor(props) {
    super(props);

    // constructor only run once

    // props.map((x) => console.log ("item" + x))

    // this.fetchData = this.fetchData.bind(this);
  }

  render() {

    return (
      // <div>
      //   {this.props.data.map((f => (<p>{f.Title}</p>)))}
      // </div>
      
      <div>

        {this.props.data.map((x, i) =>
          (
            <Link to={"/details/" + x.imdbID}>
              <ListGroup.Item key={i} >{x.Title}</ListGroup.Item>
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