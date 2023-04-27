document.querySelector("#myButtonCreate").addEventListener("click", (evt) => {
    createCargo(evt);
}, false);

document.querySelector("#myButtonDelete").addEventListener("click", (evt) => {
    deleteCargo(evt);
}, false);

document.querySelector("#myButtonEdit").addEventListener("click", (evt) => {
    editCargo(evt);
}, false);

const btns = document.querySelectorAll('button');
btns.forEach((items) => {
    items.addEventListener('click', (evt) => {
        evt.target.classList.add('activeLoading');
    })
})

async function createCargo(evt) {
    await new Promise(resolve => setTimeout(resolve, 1));

    let cargoATIIdFieldId
    let cargoNameFieldId
    let cargoQuantityFieldId
    let cargoVolumeFieldId
    let cargoHeightFieldId
    let cargoWidthFieldId
    let cargoLengthFieldId
    let routeLoadingCityIdFieldId
    let routeLoadingAddressFieldId
    let routeLoadingDatesTypeFieldId
    let routeLoadingDatesBeginFieldId
    let routeLoadingDatesEndFieldId
    let routeUnloadingCityIdFieldId
    let routeUnloadingAddressFieldId
    let transportLoadingUnloadingTypeCommonFieldId
    let transportLoadingUnloadingTypeExactFieldId
    let transportTypeFieldId
    let paymentTypeFieldId
    let paymentWithVatFieldId
    let paymentWithoutVatFieldId
    let paymentCashFieldId
    let paymentAvailableWithVatFieldId
    let paymentAvailableWithoutVatFieldId
    let paymentAvailableCashFieldId
    let contactsIdFieldId
    let noteFieldId


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
                        case ('Маршрут. Загрузка. Адрес'):
                            routeLoadingAddressFieldId = d.id;
                            break;
                        case ('Маршрут. Загрузка. Дата загрузки. Тип.'):
                            routeLoadingDatesTypeFieldId = d.id;
                            break;
                        case ('Загрузка. Дата начала'):
                            routeLoadingDatesBeginFieldId = d.id;
                            break;
                        case ('Загрузка. Дата конца'):
                            routeLoadingDatesEndFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза. Наименование груза'):
                            cargoNameFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза.Вес. Количество'):
                            cargoQuantityFieldId = d.id;
                            break;
                        case ('Груз. Объем'):
                            cargoVolumeFieldId = d.id;
                            break;
                        case ('Груз. Длина'):
                            cargoLengthFieldId = d.id;
                            break;
                        case ('Груз. Высота'):
                            cargoHeightFieldId = d.id;
                            break;
                        case ('Груз. Ширина'):
                            cargoWidthFieldId = d.id;
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
                        case ('Оплата. Без торга. Ставка безнал с НДС'):
                            paymentWithVatFieldId = d.id;
                            break;
                        case ('Оплата. Без торга. Ставка безнал без НДС'):
                            paymentWithoutVatFieldId = d.id;
                            break;
                        case ('Оплата. Без торга. Ставка наличными'):
                            paymentCashFieldId = d.id;
                            break;
                        case ('Оплата. Возможен запрос ставки безнал с НДС'):
                            paymentAvailableWithVatFieldId = d.id;
                            break;
                        case ('Оплата. Возможен запрос ставки безнал без НДС'):
                            paymentAvailableWithoutVatFieldId = d.id;
                            break;
                        case ('Оплата. Возможен запрос ставки наличными'):
                            paymentAvailableCashFieldId = d.id;
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
                        case ('Примечание'):
                            noteFieldId = d.id;
                            break;
                        default:
                        // code block
                    }
                })


                let cargoNameValue = await getValue(cargoNameFieldId)
                let cargoQuantityValue = await getValue(cargoQuantityFieldId)
                let cargoVolumeValue = await getValue(cargoVolumeFieldId)
                let cargoHeightValue = await getValue(cargoHeightFieldId)
                let cargoWidthValue = await getValue(cargoWidthFieldId)
                let cargoLengthValue = await getValue(cargoLengthFieldId)
                let routeLoadingCityIdValue = await getValue(routeLoadingCityIdFieldId)
                let routeLoadingAddressValue = await getValue(routeLoadingAddressFieldId)
                let routeLoadingDatesTypeValue = await getValue(routeLoadingDatesTypeFieldId)
                let routeLoadingDatesBeginValue = await getValue(routeLoadingDatesBeginFieldId)
                console.log(routeLoadingDatesBeginValue=== null + routeLoadingDatesBeginValue)
                let routeLoadingDatesEndValue= await getValue(routeLoadingDatesEndFieldId)
                let routeUnloadingCityIdValue = await getValue(routeUnloadingCityIdFieldId)
                let routeUnloadingAddressValue = await getValue(routeUnloadingAddressFieldId)
                let transportLoadingUnloadingTypeCommonValue = await getValue(transportLoadingUnloadingTypeCommonFieldId)
                let transportLoadingUnloadingTypeExactValue = await getValue(transportLoadingUnloadingTypeExactFieldId)
                let transportTypeValue = await getValue(transportTypeFieldId)
                let paymentTypeValue = await getValue(paymentTypeFieldId)
                let paymentWithVatValue = await getValue(paymentWithVatFieldId)
                let paymentWithoutVatValue = await getValue(paymentWithoutVatFieldId)
                let paymentCashValue = await getValue(paymentCashFieldId)
                let paymentAvailableWithVatValue = await getValue(paymentAvailableWithVatFieldId)
                let paymentAvailableWithoutVatValue = await getValue(paymentAvailableWithoutVatFieldId)
                let paymentAvailableCashValue = await getValue(paymentAvailableCashFieldId)
                let contactsIdValue = await getValue(contactsIdFieldId)
                let noteValue = await getValue(noteFieldId)

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
                                "note": noteValue,
                                "route": {
                                    "loading": {
                                        "dates": {
                                            "type": (routeLoadingDatesTypeValue === "3391147") ? "from-date" : "ready",
                                            "first_date": (routeLoadingDatesBeginValue === null) ? null :  routeLoadingDatesBeginValue.split(".").reverse().join("-")+'T00:00:00',
                                            "last_date": (routeLoadingDatesEndValue === null) ? null :  routeLoadingDatesEndValue.split(".").reverse().join("-")+'T00:00:00'
                                        },
                                        "cargos": [
                                            {
                                                "name": cargoNameValue,
                                                "weight": {
                                                    "quantity": cargoQuantityValue,
                                                    "type": "tons"
                                                },
                                                "volume": {
                                                    "quantity": cargoVolumeValue
                                                },
                                                "sizes": {
                                                    "length": {
                                                        "value": cargoLengthValue
                                                    },
                                                    "height": {
                                                        "value": cargoHeightValue
                                                    },
                                                    "width": {
                                                        "value": cargoWidthValue
                                                    }
                                                },
                                                "id": 1
                                            }
                                        ],
                                        "location": {
                                            "type": "manual",
                                            "city_id": routeLoadingCityIdValue.match(/\d+/)[0],
                                            "address": routeLoadingAddressValue
                                        }
                                    },
                                    "unloading": {
                                        "location": {
                                            "type": "manual",
                                            "city_id": routeUnloadingCityIdValue.match(/\d+/)[0],
                                            "address": routeUnloadingAddressValue
                                        }
                                    }
                                },
                                "truck": {
                                    "load_type": (transportLoadingUnloadingTypeCommonValue === "3391156") ? "dont-care" : "ftl",
                                    "body_types":
                                        transportTypeValue.match(/\d+/g),
                                    "body_loading": {
                                        "types": transportLoadingUnloadingTypeExactValue.match(/\d+/g)

                                    },
                                    "body_unloading": {
                                        "types": transportLoadingUnloadingTypeExactValue.match(/\d+/g)
                                    }
                                },
                                "payment": {
                                    "hide_counter_offers": true,
                                    "type": (paymentTypeValue === "3390607") ? "without-bargaining" : "rate-request",
                                    "currency_type": 1,
                                    "rate_with_vat": paymentWithVatValue,
                                    "rate_without_vat": paymentWithoutVatValue,
                                    "cash": paymentCashValue,
                                    "rate_with_vat_available": !!parseInt(paymentAvailableWithVatValue),
                                    "rate_without_vat_available": !!parseInt(paymentAvailableWithoutVatValue),
                                    "cash_available": !!parseInt(paymentAvailableCashValue)
                                },
                                "contacts":
                                    contactsIdValue.match(/\d+/g)
                            }
                        }
                    )
                }).then(r => r.json().then(data => ({status: r.status, body: data})))
                    .then(obj => {
                        console.log(obj)
                        if (obj.status === 200) {
                            alert('Груз успешно создан в ATI')
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
                        } else {
                            alert(JSON.stringify(obj.body))
                        }
                    })
            }
            evt.target.classList.remove('activeLoading');
        }
    })

}


async function deleteCargo(evt) {
    await new Promise(resolve => setTimeout(resolve, 1));


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
                }).then(r => r.json().then(data => ({status: r.status, body: data})))
                    .then(obj => {
                        if (obj.status === 200) {
                            window.EnvyCrmWidget.changeDealValue({
                                input_id: cargoATIIdFieldId,
                                value: ""
                            })
                            alert('Груз успешно удален из ATI')
                        } else {
                            alert(JSON.stringify(obj.body))
                        }
                    })
            }
            evt.target.classList.remove('activeLoading');
        }
    })

}


async function editCargo(evt) {
    await new Promise(resolve => setTimeout(resolve, 1));

    let cargoATIIdFieldId
    let cargoNameFieldId
    let cargoQuantityFieldId
    let cargoVolumeFieldId
    let cargoHeightFieldId
    let cargoWidthFieldId
    let cargoLengthFieldId
    let routeLoadingCityIdFieldId
    let routeLoadingAddressFieldId
    let routeLoadingDatesTypeFieldId
    let routeLoadingDatesBeginFieldId
    let routeLoadingDatesEndFieldId
    let routeUnloadingCityIdFieldId
    let routeUnloadingAddressFieldId
    let transportLoadingUnloadingTypeCommonFieldId
    let transportLoadingUnloadingTypeExactFieldId
    let transportTypeFieldId
    let paymentTypeFieldId
    let paymentWithVatFieldId
    let paymentWithoutVatFieldId
    let paymentCashFieldId
    let paymentAvailableWithVatFieldId
    let paymentAvailableWithoutVatFieldId
    let paymentAvailableCashFieldId
    let contactsIdFieldId
    let noteFieldId


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
                        case ('Маршрут. Загрузка. Адрес'):
                            routeLoadingAddressFieldId = d.id;
                            break;
                        case ('Маршрут. Загрузка. Дата загрузки. Тип.'):
                            routeLoadingDatesTypeFieldId = d.id;
                            break;
                        case ('Загрузка. Дата начала'):
                            routeLoadingDatesBeginFieldId = d.id;
                            break;
                        case ('Загрузка. Дата конца'):
                            routeLoadingDatesEndFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза. Наименование груза'):
                            cargoNameFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Параметры груза.Вес. Количество'):
                            cargoQuantityFieldId = d.id;
                            break;
                        case ('Груз. Объем'):
                            cargoVolumeFieldId = d.id;
                            break;
                        case ('Груз. Длина'):
                            cargoLengthFieldId = d.id;
                            break;
                        case ('Груз. Высота'):
                            cargoHeightFieldId = d.id;
                            break;
                        case ('Груз. Ширина'):
                            cargoWidthFieldId = d.id;
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
                        case ('Оплата. Без торга. Ставка безнал с НДС'):
                            paymentWithVatFieldId = d.id;
                            break;
                        case ('Оплата. Без торга. Ставка безнал без НДС'):
                            paymentWithoutVatFieldId = d.id;
                            break;
                        case ('Оплата. Без торга. Ставка наличными'):
                            paymentCashFieldId = d.id;
                            break;
                        case ('Оплата. Возможен запрос ставки безнал с НДС'):
                            paymentAvailableWithVatFieldId = d.id;
                            break;
                        case ('Оплата. Возможен запрос ставки безнал без НДС'):
                            paymentAvailableWithoutVatFieldId = d.id;
                            break;
                        case ('Оплата. Возможен запрос ставки наличными'):
                            paymentAvailableCashFieldId = d.id;
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
                        case ('Примечание'):
                            noteFieldId = d.id;
                            break;
                        default:
                        // code block
                    }
                })


                let cargoNameValue = await getValue(cargoNameFieldId)
                let cargoQuantityValue = await getValue(cargoQuantityFieldId)
                let cargoVolumeValue = await getValue(cargoVolumeFieldId)
                let cargoHeightValue = await getValue(cargoHeightFieldId)
                let cargoWidthValue = await getValue(cargoWidthFieldId)
                let cargoLengthValue = await getValue(cargoLengthFieldId)
                let routeLoadingCityIdValue = await getValue(routeLoadingCityIdFieldId)
                let routeLoadingAddressValue = await getValue(routeLoadingAddressFieldId)
                let routeLoadingDatesTypeValue = await getValue(routeLoadingDatesTypeFieldId)
                let routeLoadingDatesBeginValue = await getValue(routeLoadingDatesBeginFieldId)
                let routeLoadingDatesEndValue= await getValue(routeLoadingDatesEndFieldId)
                let routeUnloadingCityIdValue = await getValue(routeUnloadingCityIdFieldId)
                let routeUnloadingAddressValue = await getValue(routeUnloadingAddressFieldId)
                let transportLoadingUnloadingTypeCommonValue = await getValue(transportLoadingUnloadingTypeCommonFieldId)
                let transportLoadingUnloadingTypeExactValue = await getValue(transportLoadingUnloadingTypeExactFieldId)
                let transportTypeValue = await getValue(transportTypeFieldId)
                let paymentTypeValue = await getValue(paymentTypeFieldId)
                let paymentWithVatValue = await getValue(paymentWithVatFieldId)
                let paymentWithoutVatValue = await getValue(paymentWithoutVatFieldId)
                let paymentCashValue = await getValue(paymentCashFieldId)
                let paymentAvailableWithVatValue = await getValue(paymentAvailableWithVatFieldId)
                let paymentAvailableWithoutVatValue = await getValue(paymentAvailableWithoutVatFieldId)
                let paymentAvailableCashValue = await getValue(paymentAvailableCashFieldId)
                let contactsIdValue = await getValue(contactsIdFieldId)
                let cargoATIIdValue = await getValue(cargoATIIdFieldId)
                let noteValue = await getValue(noteFieldId)


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
                                "note": noteValue,
                                "route": {
                                    "loading": {
                                        "dates": {
                                            "type": (routeLoadingDatesTypeValue === "3391147") ? "from-date" : "ready",
                                            "first_date": (routeLoadingDatesBeginValue === null) ? null :  routeLoadingDatesBeginValue.split(".").reverse().join("-")+'T00:00:00',
                                            "last_date": (routeLoadingDatesEndValue === null) ? null :  routeLoadingDatesEndValue.split(".").reverse().join("-")+'T00:00:00'
                                        },
                                        "cargos": [
                                            {
                                                "name": cargoNameValue,
                                                "weight": {
                                                    "quantity": cargoQuantityValue,
                                                    "type": "tons"
                                                },
                                                "volume": {
                                                    "quantity": cargoVolumeValue
                                                },
                                                "sizes": {
                                                    "length": {
                                                        "value": cargoLengthValue
                                                    },
                                                    "height": {
                                                        "value": cargoHeightValue
                                                    },
                                                    "width": {
                                                        "value": cargoWidthValue
                                                    }
                                                },
                                                "id": 1
                                            }
                                        ],
                                        "location": {
                                            "type": "manual",
                                            "city_id": routeLoadingCityIdValue.match(/\d+/)[0],
                                            "address": routeLoadingAddressValue
                                        }
                                    },
                                    "unloading": {
                                        "location": {
                                            "type": "manual",
                                            "city_id": routeUnloadingCityIdValue.match(/\d+/)[0],
                                            "address": routeUnloadingAddressValue
                                        }
                                    }
                                },
                                "truck": {
                                    "load_type": (transportLoadingUnloadingTypeCommonValue === "3391156") ? "dont-care" : "ftl",
                                    "body_types":
                                        transportTypeValue.match(/\d+/g),
                                    "body_loading": {
                                        "types":
                                            transportLoadingUnloadingTypeExactValue.match(/\d+/g)
                                    },
                                    "body_unloading": {
                                        "types":
                                            transportLoadingUnloadingTypeExactValue.match(/\d+/g)
                                    }
                                },
                                "payment": {
                                    "hide_counter_offers": true,
                                    "type": (paymentTypeValue === "3390607") ? "without-bargaining" : "rate-request",
                                    "currency_type": 1,
                                    "rate_with_vat": paymentWithVatValue,
                                    "rate_without_vat": paymentWithoutVatValue,
                                    "cash": paymentCashValue,
                                    "rate_with_vat_available": !!parseInt(paymentAvailableWithVatValue),
                                    "rate_without_vat_available": !!parseInt(paymentAvailableWithoutVatValue),
                                    "cash_available": !!parseInt(paymentAvailableCashValue)
                                },
                                "contacts":
                                    contactsIdValue.match(/\d+/g)
                            }
                        }
                    )
                }).then(r => r.json().then(data => ({status: r.status, body: data})))
                    .then(obj => {
                        if (obj.status === 200) {
                            alert('Груз успешно редактирован в ATI')
                        } else {
                            alert(JSON.stringify(obj.body))
                        }
                    })

            }
            evt.target.classList.remove('activeLoading');
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