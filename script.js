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
                        console.log("Post successfully created!");
                        let search_result = document.getElementById('search_box-result');
                        let table = '<table><tr><th>Наименование</th><th>Id для отправки в ATI</th></tr>';

                        data.forEach(function (d) {
                            table +=
                                "<tr>\n" +
                                "<td className=\"search_result-name\">\n" +
                                "	<a href=\"#\">" + d.FullName + "</a>\n" +
                                "</td>\n" +
                                "<td className=\"search_result-name\">\n" +
                                "	<a href=\"#\">" + d.CityId + "</a>\n" +
                                "</td>\n" +
                                "</tr>";
                        })
                        table += '</table>';

                        search_result.innerHTML = table;
                    }
                }
            })
        } else {
            $result.html('');
            $result.fadeOut(100);
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search_box').length) {
            $result.html('');
            $result.fadeOut(100);
        }
    });

    $(document).on('click', '.search_result-name a', function () {
        $('#search').val($(this).text());
        $result.fadeOut(100);
        return false;
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search_box').length) {
            $result.html('');
            $result.fadeOut(100);
        }
    });

});
