import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }



    render() {
        return (
            <div>
                <Title title={this.props.title} />
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

{
    // event.target.value
    // イベントバブルのイベントを開始したDOM要素を返すプロパティ
    // イベントバブルは小要素のイベントが発生するとその親要素や先祖要素の同じタイプのイベントが
}