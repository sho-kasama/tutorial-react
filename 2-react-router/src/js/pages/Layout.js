import React from "react";
import { Link, withRouter } from "react-router-dom";




class Layout extends React.Component {
    navigate() {
        console.log(this.props.history);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to="/archives/some-other-articles" class="btn btn-warning">archives (some other articles)</Link>
                <Link to="archives"><button class="btn btn-danger">archives</button></Link>
                <Link to="settings"><button class="btn btn-success">settings</button></Link>
                <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
            </div>
        );
    }
}


export default withRouter(Layout);

{

    // 上記の記述をすることで各リンクをクリックすると、client.jsに埋め込まれたRouteコンポーネントがLayoutコンポーネントへ渡されるようになり
    // layoutコンポーネントの this.props.children から Routeコンポーネントを参照することができます



    // props.childrenは全てのコンポーネントで使用可能です
    // これにはコンポーネントの開始タグと終了タグの間の全てのコンテンツが含まれています
    // 例えば,

    // <Welcome>Hello world!</Welcome>

    // 文字列 Hello world! は Welcome コンポーネントの props.childrenで利用できる
    // function Welcome(props){
    //    return <p>{props.children}</p>;
    // }


    // クラスとして定義されたコンポーネントでは、this.props.childrenを使用してください

    // class Welcome extends React.Component {
    //   render() {
    //     return <p>{this.porps.children}</p>;
    //   }
    // }
}