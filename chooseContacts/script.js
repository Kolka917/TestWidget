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
                let fieldIdContacts = document.getElementById('fieldIdContacts');
                Array.prototype.forEach.call(data.result, d => {
                    if (d.name === "Контакты. id контактов заявки") {
                        fieldIdContacts.innerHTML= d.id
                    }
                })
            }
        }
    })

    $.ajax({
        url: "https://proxy.cors.sh/https://api.ati.su/v1.0/firms/contacts",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48',
            'Authorization': 'Bearer 6143fe5dba704e469631712649f99a7a',
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            if (status === "success") {
                let search_result = document.getElementById('contactsSelect');
                let table = ''

                data.forEach(function (d) {
                        table += '<option> '+d.name + ' (' + d.id + ')' +' </option>'
                    })


                search_result.innerHTML = table;
                console.log(search_result)
                jQuery(".chosen").data("placeholder","Select Frameworks...").chosen();

            }
        }
    });

});

function saveContacts() {
    var select = document.getElementById("contactsSelect");
    var valueId = getSelectValues(select);
    console.log(valueId);
    var fieldId = document.getElementById("fieldIdContacts").innerText;

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    let clientId = '';
    let dealId = '';


    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === 'deal_id')
        {
            dealId = sParameterName[1];
        }
        if (sParameterName[0] === 'client_id')
        {
            clientId = sParameterName[1];
        }
    }

    var w = window.EnvyCrmWidget
    w.changeDealValue({
        input_id: fieldId,
        value: valueId.join(', ')
    })
        .then(() => {
            alert('Контакты успешно обновлены')
        })
        .catch((e) => {
            console.log(e);
        });
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i=0, iLen=options.length; i<iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

