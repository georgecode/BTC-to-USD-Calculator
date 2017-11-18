import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// class YearDropDown extends Component {
//   render() {
//     return (
// 	    <DropdownButton title="Dropdown">
// 	      <MenuItem href="#books">Books</MenuItem>
// 	      <MenuItem href="#podcasts">Podcasts</MenuItem>
// 	      <MenuItem href="#">Tech I Like</MenuItem>
// 	      <MenuItem href="#">About me</MenuItem>
// 	      <MenuItem href="#addBlog">Add a Blog</MenuItem>
// 	    </DropdownButton>
//     );
//   }
// }


const YearDropDown = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
);

ReactDOM.render(YearDropDown, mountNode);


// var YearDropDown = (
//   <ButtonGroup>
//     <DropdownButton id="dropdown-btn-menu" bsStyle="success" title="Dropdown">
//       <MenuItem key="1">Dropdown link</MenuItem>
//       <MenuItem key="2">Dropdown link</MenuItem>
//     </DropdownButton>
//     <Button bsStyle="info">Middle</Button>
//     <Button bsStyle="info">Right</Button>
//   </ButtonGroup>
// );

export default YearDropDown;