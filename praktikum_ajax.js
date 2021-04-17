$(function() {
    $("#nama").load("test.txt");
});

$(function() {
    let url = "https://jsonplaceholder.typicode.com/photos";

    $("#getPost").on("click", function() {
        //memanggil jquery ajax
        $.ajax({
            //memanggil variable url parameter
            url: url,
            //menggunakan get request
            type: 'GET',
            //jika sukses
            success: function(data) {
                let data_html = '';
                //looping data(ambil satu persatu data)
                $.each(data, function(i, item) {
                    //mengkonversi hasil loop tadi ke html
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '"alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'
                });

                //memasukkan hasil loop tadi ke div dengan id #data_hasil_dari_internet

                $("#data_hasil_dari_internet").html(data_html);
            },
            //jika error
            error: function(error) {
                //tampilkan console log
                console.log(error);
            }
        });
    });
});