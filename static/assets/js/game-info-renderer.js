function renderGameInfo(title) {
    var section = document.getElementById('gameInfoSection');
    if (!section) return;

    section.style.display = 'block';
    section.innerHTML = '<div class="gi-loading">Loading game info...</div>';

    fetch('/api/game-info?title=' + encodeURIComponent(title))
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (!data || !data.description) {
                section.style.display = 'none';
                return;
            }

            var tagsHtml = '';
            if (data.tags) {
                for (var i = 0; i < data.tags.length; i++) {
                    tagsHtml += '<span class="gi-tag">' + data.tags[i] + '</span>';
                }
            }

            section.innerHTML =
                '<div class="gi-header">' +
                    '<div class="gi-title-row">' +
                        '<h2 class="gi-game-name">' + title + '</h2>' +
                        '<span class="gi-category">' + data.category + '</span>' +
                    '</div>' +
                    '<div class="gi-tags">' + tagsHtml + '</div>' +
                '</div>' +
                '<div class="gi-grid">' +
                    '<div class="gi-block">' +
                        '<h3>About This Game</h3>' +
                        '<p>' + data.description + '</p>' +
                    '</div>' +
                    '<div class="gi-block">' +
                        '<h3>How to Play</h3>' +
                        '<p>' + data.howToPlay + '</p>' +
                    '</div>' +
                    '<div class="gi-block">' +
                        '<h3>Controls</h3>' +
                        '<p>' + data.controls + '</p>' +
                    '</div>' +
                '</div>';
        })
        .catch(function() {
            section.style.display = 'none';
        });
}
