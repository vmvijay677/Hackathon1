let box = document.createElement('div');
box.setAttribute('class', 'box');

let cont = document.createElement('div');
cont.setAttribute('class', 'container');

let row = document.createElement('div');
row.setAttribute('class', 'row');

let col1 = document.createElement('div');
col1.setAttribute('id', 'row1');
col1.setAttribute('class', 'col-lg-3');

let para = document.createElement('p');
para.setAttribute('id', 'item1');
para.innerHTML = "MyAnimeList";
col1.append(para);

let col2 = document.createElement('div');
col2.setAttribute('class', 'col-lg-6');
col2.setAttribute('id', 'row1');

let col3 = document.createElement('div');
col3.setAttribute('class', 'col-lg-3');
col3.setAttribute('id', 'row1');

let icon1 = document.createElement('i');
icon1.setAttribute('class', 'fa fa-user fa-2x');
icon1.setAttribute('id', 'icon1');
col3.append(icon1);

let button1 = document.createElement('button');
button1.setAttribute('type', 'button');
button1.setAttribute('id', 'button');
button1.setAttribute('class', 'btn btn-primary');
button1.innerHTML = "Login";
col3.append(button1);

let button2 = document.createElement('button');
button2.setAttribute('type', 'button');
button2.setAttribute('id', 'button');
button2.setAttribute('class', 'btn btn-success');
button2.innerHTML = "Signup";
col3.append(button2);

let col4 = document.createElement('div');
col4.setAttribute('class', 'col-lg-8');
col4.setAttribute('id', 'row2');

let para1 = document.createElement('p');
para1.setAttribute('id', 'row2');
col4.append(para1);

let a1 = document.createElement('a');
a1.setAttribute('href', '#');
a1.setAttribute('id', 'row2');
a1.innerHTML = "Anime &nbsp; &nbsp;";
para1.append(a1);

let a2 = document.createElement('a');
a2.setAttribute('href', '#');
a2.setAttribute('id', 'row2');
a2.innerHTML = "Movies &nbsp; &nbsp;";
para1.append(a2);

let a3 = document.createElement('a');
a3.setAttribute('href', '#');
a3.setAttribute('id', 'row2');
a3.innerHTML = "Watch &nbsp; &nbsp;";
para1.append(a3);

let a4 = document.createElement('a');
a4.setAttribute('href', '#');
a4.setAttribute('id', 'row2');
a4.innerHTML = "Learn &nbsp; &nbsp;";
para1.append(a4);

let a5 = document.createElement('a');
a5.setAttribute('href', '#');
a5.setAttribute('id', 'row2');
a5.innerHTML = "Read &nbsp; &nbsp;";
para1.append(a5);

let a6 = document.createElement('a');
a6.setAttribute('href', '#');
a6.setAttribute('id', 'row2');
a6.innerHTML = "Help &nbsp; &nbsp;";
para1.append(a6);

let col5 = document.createElement('div');
col5.setAttribute('class', 'col-lg-4');
col5.setAttribute('id', 'row2');

let col6 = document.createElement('div');
col6.setAttribute('class', 'col-lg-12');
col6.setAttribute('id', 'row3');

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'input');
input.setAttribute('class', 'inputbox');
input.setAttribute('id', 'input');
input.setAttribute('placeholder', ' Search for a anime (Eg: Naruto)');
col6.append(input);


let button3 = document.createElement('button');
button3.setAttribute('type', 'button');
button3.setAttribute('id', 'button3');
button3.setAttribute('class', 'btn btn-danger');
button3.addEventListener('click', getdata);
button3.innerHTML = "Search";
col6.append(button3);

let col7 = document.createElement('div');
col7.setAttribute('class', 'col-lg-12');
col7.setAttribute('id', '');

let image = document.createElement('img');
image.setAttribute('src', '');
image.setAttribute('id', 'img');
image.setAttribute('alt', '#');
col7.append(image);

let col8 = document.createElement('div');
col8.setAttribute('class', 'col-lg-12');
col8.setAttribute('id', '');

let head = document.createElement('h1');
head.setAttribute('id', 'h1');
col8.append(head);

let col9 = document.createElement('div');
col9.setAttribute('class', 'col-lg-12');
col9.setAttribute('id', '');

let para2 = document.createElement('p');
para2.setAttribute('id', 'para2');
col9.append(para2);

let col10 = document.createElement('div');
col10.setAttribute('class', 'col-lg-2');
col10.setAttribute('id', '');

let col11 = document.createElement('div');
col11.setAttribute('class', 'col-lg-8');
col11.setAttribute('id', '');

var table1 = document.createElement('table');
table1.setAttribute('class', 'table');

var thead1 = document.createElement('thead');
thead1.setAttribute('class', 'thead');

var tr1 = document.createElement('tr');
var th1 = createelement('th', 'Start Date');
var th2 = createelement('th', 'End Date');
var th3 = createelement('th', 'Total Episodes');
tr1.append(th1, th2, th3);
thead1.append(tr1);

var tbody1 = document.createElement('tbody');
var tr2 = document.createElement('tr');
var td1 = document.createElement('td');
td1.setAttribute('id', 'td1');
var td2 = document.createElement('td');
td2.setAttribute('id', 'td2');
var td3 = document.createElement('td');
td3.setAttribute('id', 'td3');
tr2.append(td1, td2, td3);
tbody1.append(tr2);

table1.append(thead1, tbody1);
col11.append(table1);

let col12 = document.createElement('div');
col12.setAttribute('class', 'col-lg-2');
col12.setAttribute('id', '');

let col13 = document.createElement('div');
col13.setAttribute('class', 'col-lg-2');
col13.setAttribute('id', '');

let col14 = document.createElement('div');
col14.setAttribute('class', 'col-lg-8');
col14.setAttribute('id', '');

var table2 = document.createElement('table');
table2.setAttribute('class', 'table');

var thead2 = document.createElement('thead');
thead2.setAttribute('class', 'thead');

var tr3 = document.createElement('tr');
var th4 = createelement('th', 'Type');
var th5 = createelement('th', 'IMDB Rating');
var th6 = createelement('th', 'Rated Type');
tr3.append(th4, th5, th6);
thead2.append(tr3);

var tbody2 = document.createElement('tbody');
var tr4 = document.createElement('tr');
var td4 = document.createElement('td');
td4.setAttribute('id', 'td4');
var td5 = document.createElement('td');
td5.setAttribute('id', 'td5');
var td6 = document.createElement('td');
td6.setAttribute('id', 'td6');
tr4.append(td4, td5, td6);
tbody2.append(tr4);

table2.append(thead2, tbody2);
col14.append(table2);

let col15 = document.createElement('div');
col15.setAttribute('class', 'col-lg-2');
col15.setAttribute('id', '');

let col16 = document.createElement('div');
col16.setAttribute('class', 'col-lg-12');
col16.setAttribute('id', 'row4');

let a = document.createElement('a');
a.innerHTML = "Click here for more details >>>";
a.setAttribute('href', '');
a.setAttribute('id', 'a');
col16.append(a);

let col17 = document.createElement('div');
col17.setAttribute('class', 'col-lg-12');
col17.setAttribute('id', 'row5');

let para3 = document.createElement('p');
para3.innerHTML = "Follow us at"
para3.setAttribute('id', '')
col17.append(para3);

let col18 = document.createElement('div');
col18.setAttribute('class', 'col-lg-12');
col18.setAttribute('id','row6');

let icon2 = document.createElement('i');
icon2.setAttribute('class', 'fa fa-facebook fa-2x text-white');
icon2.innerHTML = "&nbsp; &nbsp;";

let icon3 = document.createElement('i');
icon3.setAttribute('class', 'fa fa-twitter fa-2x text-white');
icon3.innerHTML = "&nbsp; &nbsp;";

let icon4 = document.createElement('i');
icon4.setAttribute('class', 'fa fa-instagram fa-2x text-white');
icon4.innerHTML = "&nbsp; &nbsp;";

let icon5 = document.createElement('i');
icon5.setAttribute('class', 'fa fa-youtube-play fa-2x text-white');
icon5.innerHTML = "&nbsp; &nbsp;";

let icon6 = document.createElement('i');
icon6.setAttribute('class', 'fa fa-pinterest-p fa-2x text-white');
icon6.innerHTML = "&nbsp; &nbsp;";

let icon7 = document.createElement('i');
icon7.setAttribute('class', 'fa fa-telegram fa-2x text-white');
icon7.innerHTML = "";
col18.append(icon2, icon3, icon4, icon5, icon6, icon7);

let col19 = document.createElement('div');
col19.setAttribute('class', 'col-lg-12');
col19.setAttribute('id','row7');

let para4 = document.createElement('p');
para4.innerHTML = "About &nbsp; &nbsp; &nbsp; Careers &nbsp; &nbsp; &nbsp; Contact Us &nbsp; &nbsp; &nbsp; Privacy & Terms";
para4.setAttribute('id', '');
col19.append(para4);


row.append(col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15, col16, col17, col18, col19);
cont.append(row);
box.append(cont);
document.body.append(box);











async function getdata(){
    let name = document.getElementById("input").value;
    try {
        let res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${name}`);
        let result = await res.json();
        console.log(result);

        const myjson = JSON.stringify(result);
        localStorage.setItem("testJSON",myjson);
        let text  = localStorage.getItem("testJSON");
        let obj = JSON.parse(text);

        document.getElementById("img").src = obj.results[0].image_url;

        document.getElementById("h1").innerHTML = obj.results[0].title;

        document.getElementById("para2").innerHTML = `SYNOPSIS: ${obj.results[0].synopsis} see more`;

        document.getElementById("td1").innerHTML = `${obj.results[0].start_date}`;

        document.getElementById("td2").innerHTML = `${obj.results[0].end_date}`;

        document.getElementById("td3").innerHTML = `${obj.results[0].episodes}`;

        document.getElementById("td4").innerHTML = `${obj.results[0].type}`;

        document.getElementById("td5").innerHTML = `${obj.results[0].score}`;

        document.getElementById("td6").innerHTML = `${obj.results[0].rated}`;

        document.getElementById("a").href = obj.results[0].url;
    } catch (error) {
        console.log(error);
    }
    
}

function createelement(elename, value){
    var element = document.createElement(elename);
    element.innerHTML = value;
    return element;
}
