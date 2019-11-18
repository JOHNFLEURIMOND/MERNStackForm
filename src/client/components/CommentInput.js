import React from 'react';

export default class Comments extends React.Component {
  render() {
    return (
      <div className="txt">
        <label htmlFor="FeedbackForm-" {...this.props.name} className="txt-l txt-l--sm">
          {this.props.title ? this.props.title : undefined}
        </label>
        <textarea
          rows={10}
          name={this.props.name}
          className={this.props.error ? 'txt-f txt-f--sm txt-f--err' : 'txt-f txt-f--sm'}
          placeholder={this.props.placeholder}
          value={this.props.value}
          id="FeedbackForm-"
          {...this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
      </div>
    );
  }
}
