import React from 'react';

export default class Checkbox extends React.Component {
  render() {
    return (
      <label className="cb">
        <input
          name={this.props.name}
          value={this.props.value}
          required={this.props.required}
          type="checkbox"
          className="cb-f"
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          checked={this.props.checked}
        />
        {this.props.error && (
          <div className="t--subinfo t--err m-t100">{this.props.error}</div>
        )}
        <span className="cb-l">{this.props.title}</span>
      </label>
    );
  }
}
