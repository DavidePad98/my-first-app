import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt={this.props.textAlt} />
      </div>
    );
  }
}
export default ImageComponent;
