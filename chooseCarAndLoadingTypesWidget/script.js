$(document).ready(function () {
    $.get({
        url: "https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/getListInputs/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f&type=custom",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            console.log(data);
            if (status === "success") {
                let fieldIdCar = document.getElementById('fieldIdCar');
                let fieldIdLoading = document.getElementById('fieldIdLoading');
                Array.prototype.forEach.call(data.result, d => {
                    if (d.name === "Транспорт.Тип кузова id из словаря") {
                        fieldIdCar.innerHTML= d.id
                    }
                    if (d.name === "Тип загрузки и выгрузки. id из словаря") {
                        fieldIdLoading.innerHTML= d.id
                    }
                })
            }
        }
    })

    $.ajax({
        url: "https://proxy.cors.sh/https://api.ati.su/v1.0/dictionaries/carTypes",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            if (status === "success") {
                let search_result = document.getElementById('carTypeSelect');
                let table = ''

                data.forEach(function (d) {
                    table += '<option> ' + d.Name + ' (' + d.TypeId + ')' + ' </option>'
                })


                search_result.innerHTML = table;
                jQuery(".chosenCar").chosen(
                    {
                        hide_results_on_select: false
                    })
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
                let search_result = document.getElementById('loadingTypeSelect');
                let table = ''

                data.forEach(function (d) {
                    table += '<option> ' + d.Name + ' (' + d.Id + ')' + ' </option>'
                })


                search_result.innerHTML = table;
                jQuery(".chosenLoading").chosen(
                    {
                        hide_results_on_select: false
                    })
            }
        }
    });

});

function saveCarTypes() {
    var select = document.getElementById("carTypeSelect");
    var valueId = getSelectValues(select);
    var fieldId = document.getElementById("fieldIdCar").innerText;

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
            alert('Типы кузова успешно обновлены')
        })
        .catch((e) => {
            console.log(e);
        });
}

function saveLoadingTypes() {
    var select = document.getElementById("loadingTypeSelect");
    var valueId = getSelectValues(select);
    var fieldId = document.getElementById("fieldIdLoading").innerText;

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
            alert('Типы загрузки-выгрузки успешно обновлены')
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

