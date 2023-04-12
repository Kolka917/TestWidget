document.querySelector("#myButton").addEventListener("click", function() {
    createCargo();
}, false);

function createCargo() {
    var w = window.EnvyCrmWidget
    w.getDealValues()
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });

    let cargoName
    let cargoQuantity
    let cargoUnits
    let cargoInnerId
    let routeLoadingType
    let routeLoadingCityIdFieldIf
    let routeLoadingAddress
    let routeLoadingDatesType
    let routeUnloadingType
    let routeUnloadingCityIdFieldId
    let routeUnloadingAddress
    let transportLoadingUnloadingTypeCommon
    let transportLoadingUnloadingTypeExact
    let transportType
    let paymentType
    let paymentCurrencyType
    let paymentWithVat
    let paymentWithoutVat
    let contactsId



    $.get({
        url: "https://proxy.cors.sh/https://logisticplus.envycrm.com/openapi/v1/deal/getListInputs/?api_key=44ac90e848a1b3a3efd692e259461c47e8405b5f&type=custom",
        headers: {
            'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48'
        },
        contentType: 'application/json',
        type: 'GET',
        success: function (data, status) {
            if (status === "success") {
                Array.prototype.forEach.call(data.result, d => {
                    switch(d.name) {
                        case ('Маршрут. Разгрузка. id города из словаря'):
                            routeUnloadingCityIdFieldId = d.id;
                            break;
                        case ('Маршрут.Загрузка.Расположение. id Города из словаря'):
                            routeLoadingCityIdFieldIf = d.id;
                            break;
                        default:
                        // code block
                    }
                })

                w.getDealValue({
                    input_id: routeLoadingCityIdFieldIf,
                    type: 'custom'
                })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });

                w.getDealValue({
                    input_id: routeUnloadingCityIdFieldId,
                    type: 'custom'
                })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        }
    })



    // $.ajax({
    //     url: 'https://proxy.cors.sh/https://api.ati.su/v2/cargos',
    //     headers: {
    //         'x-cors-api-key': 'temp_96f3dd2cacb5a4a98c8728b253decd48',
    //         'Authorization': 'Bearer 6143fe5dba704e469631712649f99a7a'
    //     },
    //     method: 'POST',
    //     dataType: 'json',
    //     data: JSON.stringify(
    //         {
    //             "cargo_application": {
    //                 "route": {
    //                     "loading": {
    //                         "dates": {
    //                             "type": routeLoadingDatesType
    //                         },
    //                         "cargos": [
    //                             {
    //                                 "name": cargoName,
    //                                 "weight": {
    //                                     "quantity": cargoQuantity,
    //                                     "type": cargoUnits
    //                                 },
    //                                 "id": cargoInnerId
    //                             }
    //                         ],
    //                         "location": {
    //                             "type": routeLoadingType,
    //                             "city_id": routeLoadingCityId,
    //                             "address": routeLoadingAddress
    //                         }
    //                     },
    //                     "unloading": {
    //                         "location": {
    //                             "type": routeUnloadingType,
    //                             "city_id": routeUnloadingCityId,
    //                             "address": routeUnloadingAddress
    //                         }
    //                     }
    //                 },
    //                 "truck": {
    //                     "load_type": transportLoadingUnloadingTypeCommon,
    //                     "body_types": [
    //                         transportType
    //                     ],
    //                     "body_loading": {
    //                         "types": [
    //                             transportLoadingUnloadingTypeExact
    //                         ]
    //                     },
    //                     "body_unloading": {
    //                         "types": [
    //                             transportLoadingUnloadingTypeExact
    //                         ]
    //                     }
    //                 },
    //                 "payment": {
    //                     "type": paymentType,
    //                     "currency_type": paymentCurrencyType,
    //                     "rate_with_vat": paymentWithVat,
    //                     "rate_without_vat": paymentWithoutVat
    //                 },
    //                 "contacts": [
    //                     contactsId
    //                 ]
    //             }
    //         }
    //         ),
    //     success: function(data){
    //         console.log('succes: '+data);
    //         alert('Соответствующее поле в сделке успешно обновлено')
    //     }
    // });
}
