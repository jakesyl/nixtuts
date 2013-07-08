var selected = readCookie('theme-switcher');

if (selected == null) {
    createCookie('theme-switcher', 'deadcream');
    selected = 'deadcream';
} else {
    getStylesheet('deadcream').disabled = true;
    getStylesheet(selected).disabled = false;
}
var ul = $('nav ul'),
    themes = [{
        id: 'darkgrey',
        color: '#474747',
    }, {
        id: 'deadcream',
        color: '#E7EEF2',
    }],
    li, a, visible = false;

for (var i = 0; i < themes.length; i++) {
    if (themes.hasOwnProperty(i)) {
        li = $(createElem('li'));
        a = $(createElem('a'));
        a.addClass('tile')
            .attr('href', '#')
            .attr('id', themes[i].id)
            .css('background-color', themes[i].color)
            .appendTo(li);
        li.appendTo(ul);

        a.click(function (e) {
            e.preventDefault();

            getStylesheet(selected).disabled = true; // disable current selected

            selected = e.target.id;
            console.log(selected);
            getStylesheet(selected).disabled = false; // load lite styles

            eraseCookie('theme-switcher');
            createCookie('theme-switcher', selected, 0);
        });
    }
}
