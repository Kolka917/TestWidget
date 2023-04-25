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
                let search_result = document.getElementById('search_box-result-contacts');

                let table = '<div class="form-group col-sm-8">\n' +
                    '        <label for="myMultiselect">Контакты</label>\n' +
                    '        <div id="myMultiselect" class="multiselect">\n' +
                    '            <div id="mySelectLabel" class="selectBox" onclick="toggleCheckboxArea()">\n' +
                    '                <select class="form-select">\n' +
                    '                    <option>Выбери из списка</option>\n' +
                    '                </select>\n' +
                    '                <div class="overSelect"></div>\n' +
                    '            </div>\n' +
                    '            <div id="mySelectOptions">';

                data.forEach(function (d) {
                    table += '<label for="'+d.id+'"><input type="checkbox" id="'+d.id+'" onchange="checkboxStatusChange()" value="'+d.id+'" /> '+ d.name + '</label>'
                })
                table += '</div>\n' +
                    '        </div>\n' +
                    '<input type="button" onclick="saveContacts()" value="Сохранить контакты">'
                    '    </div>';

                search_result.innerHTML = table;
            }
        }
    });

});

function checkboxStatusChange() {
    var multiselect = document.getElementById("mySelectLabel");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];

    var values = [];
    var checkboxes = document.getElementById("mySelectOptions");
    var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');

    for (const item of checkedCheckboxes) {
        var checkboxValue = item.getAttribute('value');
        values.push(checkboxValue);
    }

    var dropdownValue = "Nothing is selected";
    if (values.length > 0) {
        dropdownValue = values.join(', ');
    }

    multiselectOption.innerText = dropdownValue;
}

function toggleCheckboxArea(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectOptions");
    var displayValue = checkboxes.style.display;

    if (displayValue != "block") {
        if (onlyHide == false) {
            checkboxes.style.display = "block";
        }
    } else {
        checkboxes.style.display = "none";
    }
}

function saveContacts() {
    var multiselect = document.getElementById("mySelectLabel");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];
    var fieldId = document.getElementById("fieldIdContacts").innerText;
    var valueId = multiselectOption.innerText;

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
        value: valueId
    })
        .then((data) => {
            console.log(data);
            alert('Контакты успешно обновлены')
        })
        .catch((e) => {
            console.log(e);
        });
}

