import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectSortType } from "../actions/selectSortType";

class SortType extends Component {
  handleOnChange = e => {
    this.props.selectSortType(e.target.value, this.props.allEntries);
  };
  render() {
    return (
      <FormGroup>
        <Label for="sortingType">Select Sorting Algorithm</Label>
        <Input
          type="select"
          name="select"
          id="sortingType"
          onChange={this.handleOnChange}
          placeholder="enter number"
        >
          <option value="none" />
          <option value="MERGE_SORT">Merge Sort</option>
          <option value="INSERTION_SORT">Insertion Sort</option>
          <option value="BUBBLE_SORT">Bubble Sort</option>
          <option value="QUICK_SORT">Quick Sort</option>
          <option value="HEAP_SORT">Heap Sort</option>
        </Input>
      </FormGroup>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    sortType: state.sortType,
    allEntries: state.allEntries
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectSortType: selectSortType }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SortType);
