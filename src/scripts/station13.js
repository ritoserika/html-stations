const arrowFunction =()=>{
    return "Arrow"
}
function getData() {
    // Arrowという文字列を返す処理をアロー関数を入れて書きましょう。
    return arrowFunction() // ここにアロー関数の処理を書く
}
export{getData};