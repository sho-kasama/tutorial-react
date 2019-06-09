var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// outpath.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/client.js",
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }]
        }]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};

{

    // ハンドリングルールを書いていく

    // mode
    // モード(webpack 4から追加された項目)の設定
    // モードはdevelopment, production, none が存在する


    // entry 
    // エントリーポイントの設定、複数設定することも可能
    // エントリーポイントとはモジュール間の依存関係の解析を開始する地点のこと
    // 各モジュールを読み込んでメインの処理をするJavaScriptファイルだと認識しておけばいい


    // output 
    // bundleファイルをwebpackがどこにどのような名前を出力すればいいのかを指定できます。

    // plugin ↪︎ webpackができることの幅を広げてくれます。pluginがあるとbundleファイルの最適化や環境変数の設定など色々できるようになります。
    // Pluginを使うには, require()をして、plugins配列に追加する必要があります。configファイルの中で同じプラグインを別の用途に使うことができるのでnew演算子で都度インスタンスを生成する必要があります






}