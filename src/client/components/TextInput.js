import React from 'react';

export default class FormWithElement extends React.Component {
  render() {
    return (
      <div className="txt m-b300">
        <label htmlFor="FeedbackForm-" {...this.props.name} className="txt-l txt-l--sm">
          {this.props.title}
          {this.props.required && (
            <span className="t--req" aria-hidden="true">
              {' '}
              Required
            </span>
          )}
        </label>
        <input
          name={this.props.name}
          className={this.props.error ? 'txt-f txt-f--sm txt-f--err' : 'txt-f txt-f--sm'}
          placeholder={this.props.placeholder}
          value={this.props.value}
          id="FeedbackForm-"
          {...this.props.name}
          type="text"
          required={this.props.required}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.error && (
          <div className="t--subinfo t--err m-t100">{this.props.error}</div>
        )}
      </div>
    );
  }
}
