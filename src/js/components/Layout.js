import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: "Welcome" };
    }


    changeTitle(title) {
        this.setState({ title });
    }

    render() {

        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}


{

    // このthis.stateのデータはsetStateを通して値が設定されたり変更されると、自動的に差分更新を検知し、renderメソッドないのJSXによって
    // 必要なところだけdomが再レンタリングされるようになる
    // setStateを使って値を更新するということは、先ほど述べた propsを通じて値を更新するということです


    // props
    // HTMLタグでは属性といったタグ要素に対してパラメータを指定することで同じ要素でも、特定のものだけサイズを変えたり色を変えたり
    // イベントを登録したり、といった細かい違いを設定することができます
    // ReactのJSXでも同様に各コンポーネントに対してパラメーターを渡して使うことができ、そうすることでコンポーネント毎に個別の値の引数を渡すことができます
    // それをReactのJSXではPropsと呼びます
    // <title={title} がthis.propsを通じてアクセスすることができます


    // changeTitleメソッド
    // Headerコンポーネントに渡す
    // Layoutコンポーネントのbind(this)という記述について
    // LayoutコンポーネントからHeaderコンポーネントへメソッドを渡す時に <Header changeTitle={this.changeTitle.bind(this) ...}というよりにbind(this)メソッドを呼び出して
    // 渡していますがこれをやらないで<Header changeTitle={this.changeTitle}... とした場合とした場合、関数自体はHeaderコンポーネントへ渡りますがその関数をHeaderコンポーネントから呼び出した時
    // その関数はLayoutスコープで呼ばれた関数とへ別の関数になってしまいます。
    // そのため,HeaderコンポーネントにchangeTitle関数を呼び出して渡すと
    // changeTitle(title) {
    // this.setState({title});
    // }
    // 上記のthisがLayoutインスタンスではなくなってしまいます。
    // 


}