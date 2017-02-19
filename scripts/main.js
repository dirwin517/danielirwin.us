/**
 * Created by daniel.irwin on 2/19/17.
 */
function makeProjects(div, opts){
    loadFile('data/'+opts.file+'.json', function(projects){
        // console.log('projects', projects);
        div.appendChild(groupByArray(projects, opts));
    });
}

function loadFile(file, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            schema = JSON.parse(this.responseText);
            callback(schema);
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

function td(innerElement){
    var el = document.createElement('td');

    el.appendChild(innerElement);

    return el;
}

function groupByArray(array, opts){
    var div = document.createElement('table');

    if( array && Array.isArray(array) ) {
        array.forEach(function(el){

            var htmlEl = document.createElement('tr');
            htmlEl.class = "groupRow";

            var title = document.createElement('h3');
            title.innerText = el.name;
            title.style="float: left";
            title.class="padButt";
            htmlEl.appendChild(td(title));

            if(opts.downloadPhoto) {
                var downloadPhoto = document.createElement('img');
                downloadPhoto.src = 'https://img.shields.io/npm/dt/' + el.name + '.svg?maxAge=2592000';
                downloadPhoto.style = "float: left";
                downloadPhoto.class = "padButt";
                htmlEl.appendChild(td(downloadPhoto));
            }

            htmlEl.appendChild(document.createElement('br'));

            var description = document.createElement('p');
            description.innerText = el.description;
            htmlEl.appendChild(td(description));

            div.appendChild(htmlEl);
        });
    }

    return div;
}