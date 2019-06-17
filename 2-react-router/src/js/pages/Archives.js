import React from "react";

export default class Archives extends React.Component {
    render() {
        return (
            <h1>Archives ({this.props.match.params.article})</h1>
        );
    }
}