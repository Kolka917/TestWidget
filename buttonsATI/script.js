document.querySelector("#myButtonCreate").addEventListener("click", function () {
    createCargo();
}, false);

document.querySelector("#myButtonDelete").addEventListener("click", function () {
    deleteCargo();
}, false);

document.querySelector("#myButtonEdit").addEventListener("click", function () {
    editCargo();
}, false);

function createCargo() {

    let cargoATIIdFieldId
    let cargoNameFieldId
    let cargoQuantityFieldId
    let cargoUnitsFieldId
    let cargoInnerIdFieldId
    let routeLoadingTypeFieldId
    let routeLoadingCityIdFieldId
    let routeLoadingAddressFieldId
    let routeLoadingDatesTypeFieldId
    let routeUnloadingTypeFieldId
    let routeUnloadingCityIdFieldId
    let routeUnloadingAddressFieldId
    let transportLoadingUnloadingTypeCommonFieldId
    let transportLoadingUnloadingTypeExactFieldId
    let transportTypeFieldId
    let paymentTypeFieldId
    let paymentCurrencyTypeFieldId
    let paymentWithVatFieldId
    let paymentWithoutVatFieldId
    let contactsIdFieldId


    $.get({
        url: "https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/getListInputs/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f&type=custom",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        async: false,
        success: async function (data, status) {
            if (status === "success") {
                console.log(data.result)
                Array.prototype.forEach.call(data.result, d => {
                    switch (d.name) {
                        case ('Маршрут. Разгрузка. id города из словаря'):
                            routeUnloadingCityIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Расположение. id Города из словаря'):
                            routeLoadingCityIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Расположение.Тип расположения точки'):
                            routeLoadingTypeFieldId = d.id;
                            break;
                        case ('Маршрут. Загрузка. Адрес'):
                            routeLoadingAddressFieldId = d.id;
                            break;
                        case ('Маршрут. Загрузка. Дата загрузки. Тип.'):
                            routeLoadingDatesTypeFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза. id груза в списке'):
                            cargoInnerIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза. Наименование груза'):
                            cargoNameFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза.Вес. Количество'):
                            cargoQuantityFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза.Вес. Единицы'):
                            cargoUnitsFieldId = d.id;
                            break;
                        case ('Маршрут. Разгрузка. Локация.Тип расположения точки'):
                            routeUnloadingTypeFieldId = d.id;
                            break;
                        case ('Маршрут.Разгрузка.Адрес'):
                            routeUnloadingAddressFieldId = d.id;
                            break;
                        case ('Транспорт.Тип загрузки-выгрузки'):
                            transportLoadingUnloadingTypeCommonFieldId = d.id;
                            break;
                        case ('Транспорт.Тип кузова id из словаря'):
                            transportTypeFieldId = d.id;
                            break;
                        case ('Оплата. Тип оплаты'):
                            paymentTypeFieldId = d.id;
                            break;
                        case ('Оплата. id валюты из словаря'):
                            paymentCurrencyTypeFieldId = d.id;
                            break;
                        case ('Оплата. Ставка безнал с НДС'):
                            paymentWithVatFieldId = d.id;
                            break;
                        case ('Оплата.Ставка безнал без НДС'):
                            paymentWithoutVatFieldId = d.id;
                            break;
                        case ('Контакты. id контактов заявки'):
                            contactsIdFieldId = d.id;
                            break;
                        case ('Тип загрузки и выгрузки. id из словаря'):
                            transportLoadingUnloadingTypeExactFieldId = d.id;
                            break;
                        case ('Идентификатор груза в ATI'):
                            cargoATIIdFieldId = d.id;
                            break;
                        default:
                        // code block
                    }
                })


                let cargoNameValue = await getValue(cargoNameFieldId)
                let cargoQuantityValue = await getValue(cargoQuantityFieldId)
                let cargoUnitsValue = await getValue(cargoUnitsFieldId)
                let cargoInnerIdValue = await getValue(cargoInnerIdFieldId)
                let routeLoadingTypeValue = await getValue(routeLoadingTypeFieldId)
                let routeLoadingCityIdValue = await getValue(routeLoadingCityIdFieldId)
                let routeLoadingAddressValue = await getValue(routeLoadingAddressFieldId)
                let routeLoadingDatesTypeValue = await getValue(routeLoadingDatesTypeFieldId)
                let routeUnloadingTypeValue = await getValue(routeUnloadingTypeFieldId)
                let routeUnloadingCityIdValue = await getValue(routeUnloadingCityIdFieldId)
                let routeUnloadingAddressValue = await getValue(routeUnloadingAddressFieldId)
                let transportLoadingUnloadingTypeCommonValue = await getValue(transportLoadingUnloadingTypeCommonFieldId)
                let transportLoadingUnloadingTypeExactValue = await getValue(transportLoadingUnloadingTypeExactFieldId)
                let transportTypeValue = await getValue(transportTypeFieldId)
                let paymentTypeValue = await getValue(paymentTypeFieldId)
                let paymentCurrencyTypeValue = await getValue(paymentCurrencyTypeFieldId)
                let paymentWithVatValue = await getValue(paymentWithVatFieldId)
                let paymentWithoutVatValue = await getValue(paymentWithoutVatFieldId)
                let contactsIdValue = await getValue(contactsIdFieldId)


                fetch('https://proxy.cors.sh/https://api.ati.su/v2/cargos', {
                    method: 'POST',
                    headers: {
                        'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48',
                        'Authorization': 'Bearer 6143fe5dba704e469631712649f99a7a',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "cargo_application": {
                                "route": {
                                    "loading": {
                                        "dates": {
                                            "type": routeLoadingDatesTypeValue
                                        },
                                        "cargos": [
                                            {
                                                "name": cargoNameValue,
                                                "weight": {
                                                    "quantity": cargoQuantityValue,
                                                    "type": cargoUnitsValue
                                                },
                                                "id": cargoInnerIdValue
                                            }
                                        ],
                                        "location": {
                                            "type": routeLoadingTypeValue,
                                            "city_id": routeLoadingCityIdValue,
                                            "address": routeLoadingAddressValue
                                        }
                                    },
                                    "unloading": {
                                        "location": {
                                            "type": routeUnloadingTypeValue,
                                            "city_id": routeUnloadingCityIdValue,
                                            "address": routeUnloadingAddressValue
                                        }
                                    }
                                },
                                "truck": {
                                    "load_type": transportLoadingUnloadingTypeCommonValue,
                                    "body_types": [
                                        transportTypeValue
                                    ],
                                    "body_loading": {
                                        "types": [
                                            transportLoadingUnloadingTypeExactValue
                                        ]
                                    },
                                    "body_unloading": {
                                        "types": [
                                            transportLoadingUnloadingTypeExactValue
                                        ]
                                    }
                                },
                                "payment": {
                                    "type": paymentTypeValue,
                                    "currency_type": paymentCurrencyTypeValue,
                                    "rate_with_vat": paymentWithVatValue,
                                    "rate_without_vat": paymentWithoutVatValue
                                },
                                "contacts": [
                                    contactsIdValue
                                ]
                            }
                        }
                    )
                }).then(r =>  r.json().then(data => ({status: r.status, body: data})))
                    .then(obj => {
                        console.log(obj)
                        if (obj.status === 200) {
                            alert('Груз успешно создан в ATI')
                        }
                        window.EnvyCrmWidget.changeDealValue({
                            input_id: cargoATIIdFieldId,
                            value: obj.body.cargo_application.cargo_id
                        })
                            .then((r) => {
                                console.log(r);
                                alert('Идентификатор созданного груза успешно добавлен в сделку')
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    })
            }
        }
    })

}


function deleteCargo() {

    let cargoATIIdFieldId


    $.get({
        url: "https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/getListInputs/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f&type=custom",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        async: false,
        success: async function (data, status) {
            if (status === "success") {
                Array.prototype.forEach.call(data.result, d => {
                    if (d.name === 'Идентификатор груза в ATI') {
                        cargoATIIdFieldId = d.id;
                    }
                })

                if (cargoATIIdFieldId === null) {
                    alert('Идентификатор груза не указан в сделке')
                }


                let cargoATIIdValue = await getValue(cargoATIIdFieldId)


                fetch('https://proxy.cors.sh/https://api.ati.su/v1.0/loads/' + cargoATIIdValue, {
                    method: 'DELETE',
                    headers: {
                        'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48',
                        'Authorization': 'Bearer 6143fe5dba704e469631712649f99a7a'
                    }
                }).then(response => {
                    if (response.status === 200) {
                        alert('Груз успешно удален из ATI')
                    }
                })

            }
        }
    })

}


function editCargo() {

    let cargoATIIdFieldId
    let cargoNameFieldId
    let cargoQuantityFieldId
    let cargoUnitsFieldId
    let cargoInnerIdFieldId
    let routeLoadingTypeFieldId
    let routeLoadingCityIdFieldId
    let routeLoadingAddressFieldId
    let routeLoadingDatesTypeFieldId
    let routeUnloadingTypeFieldId
    let routeUnloadingCityIdFieldId
    let routeUnloadingAddressFieldId
    let transportLoadingUnloadingTypeCommonFieldId
    let transportLoadingUnloadingTypeExactFieldId
    let transportTypeFieldId
    let paymentTypeFieldId
    let paymentCurrencyTypeFieldId
    let paymentWithVatFieldId
    let paymentWithoutVatFieldId
    let contactsIdFieldId


    $.get({
        url: "https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/getListInputs/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f&type=custom",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        async: false,
        success: async function (data, status) {
            if (status === "success") {
                Array.prototype.forEach.call(data.result, d => {
                    switch (d.name) {
                        case ('Маршрут. Разгрузка. id города из словаря'):
                            routeUnloadingCityIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Расположение. id Города из словаря'):
                            routeLoadingCityIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Расположение.Тип расположения точки'):
                            routeLoadingTypeFieldId = d.id;
                            break;
                        case ('Маршрут. Загрузка. Адрес'):
                            routeLoadingAddressFieldId = d.id;
                            break;
                        case ('Маршрут. Загрузка. Дата загрузки. Тип.'):
                            routeLoadingDatesTypeFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза. id груза в списке'):
                            cargoInnerIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза. Наименование груза'):
                            cargoNameFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза.Вес. Количество'):
                            cargoQuantityFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза.Вес. Единицы'):
                            cargoUnitsFieldId = d.id;
                            break;
                        case ('Маршрут. Разгрузка. Локация.Тип расположения точки'):
                            routeUnloadingTypeFieldId = d.id;
                            break;
                        case ('Маршрут.Разгрузка.Адрес'):
                            routeUnloadingAddressFieldId = d.id;
                            break;
                        case ('Транспорт.Тип загрузки-выгрузки'):
                            transportLoadingUnloadingTypeCommonFieldId = d.id;
                            break;
                        case ('Транспорт.Тип кузова id из словаря'):
                            transportTypeFieldId = d.id;
                            break;
                        case ('Оплата. Тип оплаты'):
                            paymentTypeFieldId = d.id;
                            break;
                        case ('Оплата. id валюты из словаря'):
                            paymentCurrencyTypeFieldId = d.id;
                            break;
                        case ('Оплата. Ставка безнал с НДС'):
                            paymentWithVatFieldId = d.id;
                            break;
                        case ('Оплата.Ставка безнал без НДС'):
                            paymentWithoutVatFieldId = d.id;
                            break;
                        case ('Контакты. id контактов заявки'):
                            contactsIdFieldId = d.id;
                            break;
                        case ('Тип загрузки и выгрузки. id из словаря'):
                            transportLoadingUnloadingTypeExactFieldId = d.id;
                            break;
                        case ('Идентификатор груза в ATI'):
                            cargoATIIdFieldId = d.id;
                            break;
                        default:
                        // code block
                    }
                })


                let cargoNameValue = await getValue(cargoNameFieldId)
                let cargoQuantityValue = await getValue(cargoQuantityFieldId)
                let cargoUnitsValue = await getValue(cargoUnitsFieldId)
                let cargoInnerIdValue = await getValue(cargoInnerIdFieldId)
                let routeLoadingTypeValue = await getValue(routeLoadingTypeFieldId)
                let routeLoadingCityIdValue = await getValue(routeLoadingCityIdFieldId)
                let routeLoadingAddressValue = await getValue(routeLoadingAddressFieldId)
                let routeLoadingDatesTypeValue = await getValue(routeLoadingDatesTypeFieldId)
                let routeUnloadingTypeValue = await getValue(routeUnloadingTypeFieldId)
                let routeUnloadingCityIdValue = await getValue(routeUnloadingCityIdFieldId)
                let routeUnloadingAddressValue = await getValue(routeUnloadingAddressFieldId)
                let transportLoadingUnloadingTypeCommonValue = await getValue(transportLoadingUnloadingTypeCommonFieldId)
                let transportLoadingUnloadingTypeExactValue = await getValue(transportLoadingUnloadingTypeExactFieldId)
                let transportTypeValue = await getValue(transportTypeFieldId)
                let paymentTypeValue = await getValue(paymentTypeFieldId)
                let paymentCurrencyTypeValue = await getValue(paymentCurrencyTypeFieldId)
                let paymentWithVatValue = await getValue(paymentWithVatFieldId)
                let paymentWithoutVatValue = await getValue(paymentWithoutVatFieldId)
                let contactsIdValue = await getValue(contactsIdFieldId)
                let cargoATIIdValue = await getValue(cargoATIIdFieldId)


                fetch('https://proxy.cors.sh/https://api.ati.su/v2/cargos/' + cargoATIIdValue, {
                    method: 'PUT',
                    headers: {
                        'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48',
                        'Authorization': 'Bearer 6143fe5dba704e469631712649f99a7a',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "cargo_application": {
                                "route": {
                                    "loading": {
                                        "dates": {
                                            "type": routeLoadingDatesTypeValue
                                        },
                                        "cargos": [
                                            {
                                                "name": cargoNameValue,
                                                "weight": {
                                                    "quantity": cargoQuantityValue,
                                                    "type": cargoUnitsValue
                                                },
                                                "id": cargoInnerIdValue
                                            }
                                        ],
                                        "location": {
                                            "type": routeLoadingTypeValue,
                                            "city_id": routeLoadingCityIdValue,
                                            "address": routeLoadingAddressValue
                                        }
                                    },
                                    "unloading": {
                                        "location": {
                                            "type": routeUnloadingTypeValue,
                                            "city_id": routeUnloadingCityIdValue,
                                            "address": routeUnloadingAddressValue
                                        }
                                    }
                                },
                                "truck": {
                                    "load_type": transportLoadingUnloadingTypeCommonValue,
                                    "body_types": [
                                        transportTypeValue
                                    ],
                                    "body_loading": {
                                        "types": [
                                            transportLoadingUnloadingTypeExactValue
                                        ]
                                    },
                                    "body_unloading": {
                                        "types": [
                                            transportLoadingUnloadingTypeExactValue
                                        ]
                                    }
                                },
                                "payment": {
                                    "type": paymentTypeValue,
                                    "currency_type": paymentCurrencyTypeValue,
                                    "rate_with_vat": paymentWithVatValue,
                                    "rate_without_vat": paymentWithoutVatValue
                                },
                                "contacts": [
                                    contactsIdValue
                                ]
                            }
                        }
                    )
                }).then(response => {
                    if (response.status === 200) {
                        alert('Груз успешно редактирован в ATI')
                    }
                })

            }
        }
    })

}

async function getValue(inputId) {
    const response = await window.EnvyCrmWidget.getDealValue({
        input_id: inputId,
        type: 'custom'
    })
    return response.value;
}
