$(document).ready(function () {

    $('.toggleInput').click(function (e) {
        e.preventDefault();

        $(this).closest('.row').find('.textInput').toggle();
        $(this).closest('.row').find('.imageInput').toggle();
    });

    $('.deleteInput').click(function (e) {
        e.preventDefault();
        $(this).closest('.row').remove();


    });

    $('.btn-floating:not(.toggleInput,.deleteInput)').click(function (e) {
        e.preventDefault();
        var numberOfQuestions = $(this).closest('form').children('.answers').children('div').length + 1;

        $(this).closest('form').find('.answers').append(
            '<div class="row"><div class="col s2 center"><button class="toggleInput btn-floating waves-effect waves-light  ">' +
            '<i class="material-icons">compare_arrows</i></button><button class="deleteInput btn-floating waves-effect waves-light  ">' +
            '<i class="material-icons">clear</i></button></div><div class="input-field col s10 textInput" ' +
            'style="display: block;"><input type="text" name="a' + numberOfQuestions + '"><label>Answer ' + numberOfQuestions + '</label>' +
            '</div><div class="col s12 m8 l9 imageInput" style="display: none;"><div class="dropify-wrapper"><div class="dropify-message">' +
            '<span class="file-icon"></span><p>Drag and drop a file here or click</p><p class="dropify-error">Sorry, this file is too large</p>' +
            '</div><div class="dropify-wrapper"><div class="dropify-message"><span class="file-icon"></span> <p>Drag and drop a file here or click</p>' +
            '<p class="dropify-error">Sorry, this file is too large</p></div><input type="file" name="a' + numberOfQuestions + '" ' +
            'class="dropify" data-disable-remove="true"><div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos">' +
            '<div class="dropify-infos-inner"><p class="dropify-filename"><span class="file-icon"></span> ' +
            '<span class="dropify-filename-inner"></span></p><p class="dropify-infos-message">Drag and drop or click to replace</p></div>' +
            '</div></div></div><div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos">' +
            '<div class="dropify-infos-inner"><p class="dropify-filename"><span class="file-icon"></span> ' +
            '<span class="dropify-filename-inner"></span></p><p class="dropify-infos-message">Drag and drop or click to replace </p>' +
            '</div></div></div></div></div></div>');

    });

    $('.submitQuestion:not(.toggleInput,.deleteInput)').submit(function (e) {
        e.preventDefault();

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


