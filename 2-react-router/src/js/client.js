import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');


ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Featured}></Route>
            <Route exact path="/archives" component={Archives}></Route>
            <Route path="/archives/:article" component={Archives}></Route>
            <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
        </Layout>
    </Router>,
    app);


{
    // URLのパラメータ取得
    // ここではURLに情報を渡す方法として手っ取り早いGetパラメータを使ってアクセスされた時にURLパラメータから情報を取得する方法について勉強していきます。
    // 例えばhttp://localhost:8080/archives/some-article とURL が入力された時に"some-article" の部分を取得したい場合、:変数名 という形式で取得することができます。
    // /archivesが部分一致するため、例えば/archives/foo ロケーションにアクセスした時に両方のコンポーネントがレンダリングされることになる
    // なのでexactを使ってキーワードが完全一致した場合のみレンダリングするように変更します。





}