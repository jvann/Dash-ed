$(document).ready(function () {

    $('div').on('click', "button.toggleInput", function (e) {
        e.preventDefault();
        $(this).closest('.row').find(':input').val("");

        $(this).closest('.row').find('.textInput').toggle();
        $(this).closest('.row').find('.imageInput').toggle();
    });

    $('div').on('click', "button.deleteInput", function (e) {
        e.preventDefault();
        $(this).closest('.row').remove();
    });


    $('.btn-floating:not(.toggleInput,.deleteInput)').click(function (e) {
        e.preventDefault();
        var numberOfQuestions = $(this).closest('form').children('.answers').children('div').length + 1;

        $(this).closest('form').find('.answers').append(
        '<div class="row"><div class="col s2 center"><button type="button"class="toggleInput btn-floating waves-effect waves-light">' +
            '<i class="material-icons">compare_arrows</i></button><button type="button" class="deleteInput btn-floating waves-effect waves-light">' +
            '<i class="material-icons">clear</i></button></div><div class="input-field col s10 textInput" style="display: block">' +
            '<input type="text" name="a'+numberOfQuestions+'"><label>Answer '+numberOfQuestions+'</label></div>' +
            '<div class="col s12 m8 l9 imageInput" style="display: none"><div class="file-field input-field"><div class="btn">' +
            '<span>Image</span><input type="file" name="file'+numberOfQuestions+'" accept=".png, .jpg, .jpeg"></div><div class="file-path-wrapper">' +
            '<input class="file-path validate" type="text"></div></div></div></div>');

    });

    $('.submitQuestion:not(.toggleInput,.deleteInput)').submit(function (e) {
        e.preventDefault();
        var options = { target: '#output' };
        $(this).ajaxSubmit(options);

        var i = 0;
        var data = $(this).serializeArray().reduce(function (obj, item) {
            // obj[item.name] = item.value;
            obj["answer" + i] = item.value;
            i++;
            return obj;
        }, {});
        console.log(data);
    });
});


