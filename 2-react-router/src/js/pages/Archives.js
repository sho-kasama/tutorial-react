import React from "react";

export default class Archives extends React.Component {
    render() {
        const query = new URLSearchParams(this.props.location.search)
        let message
            = (this.props.match.params.article ? this.props.match.params.article + "," : "")
            + "data=" + query.get("data") + ", filter=" + query.get("filter");
        return (
            <h1>Archives({message})</h1>
        );
    }
}