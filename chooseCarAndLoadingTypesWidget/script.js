$(document).ready(function () {
    $.ajax({
        url: "https://proxy.cors.sh/https://api.ati.su/v1.0/dictionaries/carTypes",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            if (status === "success") {
                console.log("Post successfully created!");
                let search_result = document.getElementById('search_box-result-car-type');

                let table = '<div class="btn-group">\n' +
                    '    <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                    '        ATI.Типы кузовов c ID\n' +
                    '    </button>\n' +
                    '    <ul class="dropdown-menu">';

                data.forEach(function (d) {
                    table += '<li><a class="dropdown-item" href="#">' + d.Name + '(' + d.TypeId + ')' + '</a></li>';
                })
                table += '</ul>\n' +
                    '</div>';

                search_result.innerHTML = table;
            }
        }
    });


    $.ajax({
        url: "https://proxy.cors.sh/https://api.ati.su/v1.0/dictionaries/loadingTypes",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            if (status === "success") {
                console.log("Post successfully created!");
                let search_result = document.getElementById('search_box-result-loading-type');

                let table = '<div class="btn-group">\n' +
                    '    <button type="button" class="btn btn-success btn-sm  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">\n' +
                    '        ATI.Типы погрузки-разгрузки c ID\n' +
                    '    </button>\n' +
                    '    <ul class="dropdown-menu">';

                data.forEach(function (d) {
                    table += '<li><a class="dropdown-item" href="#">' + d.Name + '(' + d.Id + ')' + '</a></li>';
                })
                table += '</ul>\n' +
                    '</div>';

                search_result.innerHTML = table;
            }
        }
    });

});
