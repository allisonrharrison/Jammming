import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    // Bind Methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  /* Render Button */
  renderAction() {
    // if isRemoval = true
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    // if isRemoval = false
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  /* Add Track */
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  /* Remove Track */
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track" id={this.props.track.key}>
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
