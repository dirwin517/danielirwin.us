/**
 * Created by daniel.irwin on 2/19/17.
 */

runTemplate({ dataFile : 'header.json', templateFile : 'header.html' }, function(html){
    document.getElementById('headers').innerHTML = html;
});

runTemplate({ dataFile : 'nav.json', templateFile : 'nav.html' }, function(html){
    document.getElementById('nav').innerHTML = html;
});

runTemplate({ dataFile : 'about.json', templateFile : 'about.html' }, function(html){
    document.getElementById('content').innerHTML = html;
});



function loadTemplate(div, templateFile, dataFile){
    runTemplate({ dataFile : dataFile, templateFile : templateFile }, function(html){
        document.getElementById('content').innerHTML = html;
    });
}