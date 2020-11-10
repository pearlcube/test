function test(){
    alert("クリックイベントが実行されました");
}

document.addEventListener('keydown', logKey);

function logKey(event) {
  console.log(event.code);
}

var human = {name:"Taro", sex:"male"};
human.name = "Saki";
console.log(human.name);



