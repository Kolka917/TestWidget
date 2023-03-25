$(document).ready(function () {
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
                            '<select class="search_output" size="6"  multiple>';

                        data.forEach(function (d) {
                            table += '<option>' + d.FullName + '(' + d.CityId + ')';
                        })
                        table += '</select></form>';

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
