window.addEventListener('load', function () {
    var editor;
});
ContentTools.StylePalette.add([
    new ContentTools.Style('Author', 'author', ['p'])
]);
editor = ContentTools.EditorApp.get();
editor.init('*[data-editable]', 'data-name');

//SAVE
editor.addEventListener('saved', function (ev) {
    var name, payload, regions, xhr;

    // Check that something changed
    regions = ev.detail().regions;
    if (Object.keys(regions).length == 0) {
        return;
    }

    // Set the editor as busy while we save our changes
    this.busy(true);

    // Collect the contents of each region into a FormData instance
    payload = new FormData();
    for (name in regions) {
        if (regions.hasOwnProperty(name)) {
            let page = document.querySelector('[data-name="' + name + '"]').getAttribute('data-page');
            let lang = document.querySelector('[data-name="' + name + '"]').getAttribute('data-lang');
            payload.append([page, name, lang], regions[name]);
        }
    }

    // Send the update content to the server to be saved
    function onStateChange(ev) {
        // Check if the request is finished
        if (ev.target.readyState == 4) {
            editor.busy(false);
            if (ev.target.status == '200') {
                // Save was successful, notify the user with a flash
                new ContentTools.FlashUI('ok');
            } else {
                // Save failed, notify the user with a flash
                new ContentTools.FlashUI('no');
            }
        }
    };
    var base = document.querySelector('base').getAttribute('href');
    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', onStateChange);
    xhr.open('POST', base + '/save');
    xhr.send(payload);
});

$(window).on('load', function () {
    $("#sortable").sortable({
        cursor: 'move'
    });
    $('#sortable-sort').click(function() {
        var sorted = $('#sortable').sortable('toArray');
        $.ajax({
            url: $('#sortable-sort').attr('data-href'),
            method: 'POST',
            data: {
                name: $('#sortable').attr('data-name'),
                list: sorted
            }
        })
    });
    $('#sortable-refresh').click(function() {
        $.ajax({
            url: $('#sortable-refresh').attr('data-href'),
            method: 'POST',
            data: {
                name: $('#sortable').attr('data-name'),
            },
            success: function() {
                location.reload();
            }
        })
    });
    $('.remove-item').click(function() {
        var self = $(this);
        var gallery = $('#sortable').attr('data-name');
        var item = self.attr('data-item');
        $.ajax({
            url: self.attr('data-href'),
            method: 'POST',
            data: {
                name: gallery,
                item: item
            },
            success: function() {
                $('#sortable li[id^="'+item+'"]').remove();
            }
        })
    });
});
