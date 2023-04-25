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
                console.log("Post successfully created!");
                let search_result = document.getElementById('search_box-result-car-type');

                let table = '<div class="form-group col-sm-8">\n' +
                    '        <label for="myMultiselect">Типы кузова</label>\n' +
                    '        <div id="myMultiselect" class="multiselect">\n' +
                    '            <div id="mySelectLabel" class="selectBox" onclick="toggleCheckboxArea()">\n' +
                    '                <select class="form-select">\n' +
                    '                    <option>Выбери из списка</option>\n' +
                    '                </select>\n' +
                    '                <div class="overSelect"></div>\n' +
                    '            </div>\n' +
                    '            <div id="mySelectOptions">';

                data.forEach(function (d) {
                    table += '<label for="'+d.TypeId+'"><input type="checkbox" id="'+d.TypeId+'" onchange="checkboxStatusChange()" value="'+d.TypeId+'" /> '+ d.Name + '</label>'
                })
                table += '</div>\n' +
                    '        </div>\n' +
                    '<input type="button" onclick="saveCarType()" value="Сохранить тип кузова!">'
                    '    </div>';

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

                let table = '<div class="form-group col-sm-8">\n' +
                    '        <label for="myMultiselect">Типы загрузки-выгрузки</label>\n' +
                    '        <div id="myMultiselect" class="multiselect">\n' +
                    '            <div id="mySelectLabel2" class="selectBox" onclick="toggleCheckboxArea2()">\n' +
                    '                <select class="form-select">\n' +
                    '                    <option>Выбери из списка</option>\n' +
                    '                </select>\n' +
                    '                <div class="overSelect"></div>\n' +
                    '            </div>\n' +
                    '            <div id="mySelectOptions2">';

                data.forEach(function (d) {
                    table += '<label for="'+d.Id+'"><input type="checkbox" id="'+d.Id+'" onchange="checkboxStatusChange2()" value="'+d.Id+'" /> '+ d.Name + '</label>'
                })
                table += '</div>\n' +
                    '        </div>\n' +
                    '<input type="button" onclick="saveLoadingType()" value="Сохранить тип загрузки-выгрузки!">'
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


function checkboxStatusChange2() {
    var multiselect = document.getElementById("mySelectLabel2");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];

    var values = [];
    var checkboxes = document.getElementById("mySelectOptions2");
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

function toggleCheckboxArea2(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectOptions2");
    var displayValue = checkboxes.style.display;

    if (displayValue != "block") {
        if (onlyHide == false) {
            checkboxes.style.display = "block";
        }
    } else {
        checkboxes.style.display = "none";
    }
}

function saveLoadingType() {
    var multiselect = document.getElementById("mySelectLabel2");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];
    var fieldId = document.getElementById("fieldIdLoading").innerText;
    var valueId = multiselectOption.innerText;

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    console.log(sURLVariables);

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

    console.log(clientId);
    console.log(dealId);
    console.log(valueId)

    var w = window.EnvyCrmWidget
    w.changeDealValue({
        input_id: fieldId,
        value: valueId
    })
        .then((data) => {
            console.log(data);
            alert('Тип загрузки и выгрузки успешно обновлен')
        })
        .catch((e) => {
            console.log(e);
        });


    // $.ajax({
    //     url: 'https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/updateDealValue/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f',
    //     headers: {
    //         'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
    //     },
    //     method: 'POST',
    //     dataType: 'json',
    //     data: JSON.stringify({"request":{"deal_id": dealId, "client_id": clientId, "user_id": 73481, "employee_id": 0, "fields":[{ "input_id": fieldId, "value": valueId, "value_type_id": 2}]}}),
    //     success: function(data){
    //         console.log('succes: '+data);
    //         alert('Соответствующее поле в сделке успешно обновлено')
    //     }
    // });
}


function saveCarType() {
    var multiselect = document.getElementById("mySelectLabel");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];
    var fieldId = document.getElementById("fieldIdCar").innerText;
    var valueId = multiselectOption.innerText;

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    console.log(sURLVariables);

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

    console.log(clientId);
    console.log(dealId);
    console.log(valueId)

    var w = window.EnvyCrmWidget
    w.changeDealValue({
        input_id: fieldId,
        value: valueId
    })
        .then((data) => {
            console.log(data);
            alert('Тип кузова успешно обновлен')
        })
        .catch((e) => {
            console.log(e);
        });

    // $.ajax({
    //     url: 'https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/updateDealValue/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f',
    //     headers: {
    //         'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
    //     },
    //     method: 'POST',
    //     dataType: 'json',
    //     data: JSON.stringify({"request":{"deal_id": dealId, "client_id": clientId, "user_id": 73481, "employee_id": 0, "fields":[{ "input_id": fieldId, "value": valueId, "value_type_id": 2}]}}),
    //     success: function(data){
    //         console.log('succes: '+data);
    //         alert('Соответствующее поле в сделке успешно обновлено')
    //     }
    // });
}

