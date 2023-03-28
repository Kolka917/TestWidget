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
                    if (d.name_id === "crm_582598") {
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
                        let search_result = document.getElementById('search_box-result');
                        if (data.length > 1) {
                            let table = '<form>' +
                                '<select id="selectCity" class="search_output" size="6">';

                            data.forEach(function (d) {
                                table += '<option value="' + d.CityId + '"' + '>' + d.FullName + '(' + d.CityId + ')';
                            })
                            table += '</select>' +
                                '<input type="button" onclick="display()" value="Выбрать город!">'
                            '</form>';

                            search_result.innerHTML = table;


                        } else {
                            let notFoundResult = '<p>Не найдено города с указанным названием. Если вы уверены, что название верное, попробуйте ввести его еще раз.</p>';
                            search_result.innerHTML = notFoundResult;
                        }
                    }
                }
            })


        } else {
            $result.html('');
            $result.fadeOut(100);
        }
    });

});
