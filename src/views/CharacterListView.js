import React from "react";
import { connect } from "react-redux";
import { getChars } from "../actions";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return "fetching characters";
      // {props.isLoading && (
      //   <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      // )}
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.charsReducer.characters);
  return {
    error: state.charsReducer.error,
    isLoading: state.charsReducer.isLoading,
    characters: state.charsReducer.characters
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChars
  }
)(CharacterListView);
