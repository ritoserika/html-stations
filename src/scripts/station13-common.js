import { getData } from "./station13";
var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;