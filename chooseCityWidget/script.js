$(document).ready(function () {
    $.get({
        url: "https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/getListInputs/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f&type=custom",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            if (status === "success") {
                let fieldId = document.getElementById('fieldId');
                let fieldIdData = '';
                Array.prototype.forEach.call(data.result, d => {
                    if (d.name === "Маршрут.Загрузка.Расположение. id Города из словаря") {
                        fieldIdData += d.id
                    }
                })
                fieldId.innerHTML = fieldIdData;
            }
        }
    })


    $('#search').on('keyup', function () {
        var search = $(this).val();
        if ((search != '') && (search.length > 2)) {
            $.ajax({
                url: "https://proxy.cors.sh/https://api.ati.su/v1.0/dictionaries/cities?name=" + search + "&cityNameOnly=true",
                headers: {
                    'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
                },
                contentType: 'application/json',
                type: 'GET',
                success: function (data, status) {
                    if (status === "success") {
                        let search_result = document.getElementById('citySelect');
                        let table = ''

                        data.forEach(function (d) {
                            table += '<option> ' + d.FullName + ' (' + d.CityId + ')' + ' </option>'
                        })


                        search_result.innerHTML = table;
                        jQuery(".chosen")
                            .chosen({width: "400px"})
                            .trigger("chosen:updated");
                    }
                }
            })


        } else {
            $result.html('');
            $result.fadeOut(100);
        }
    });

});

function saveCity() {
    var select = document.getElementById("citySelect");
    var valueId = getSelectValues(select);
    console.log(valueId);
    var fieldId = document.getElementById("fieldId").innerText;

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    let clientId = '';
    let dealId = '';


    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === 'deal_id') {
            dealId = sParameterName[1];
        }
        if (sParameterName[0] === 'client_id') {
            clientId = sParameterName[1];
        }
    }

    var w = window.EnvyCrmWidget
    w.changeDealValue({
        input_id: fieldId,
        value: valueId.join(', ')
    })
        .then(() => {
            alert('Город отправки успешно обновлен')
        })
        .catch((e) => {
            console.log(e);
        });
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}
