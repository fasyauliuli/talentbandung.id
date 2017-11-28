var toolbarOption = [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['image', 'link'],
    [{ 'align': [] }],

    ['clean']
];

var quill = new Quill('#editor', {
    modules: {
        toolbar : toolbarOption
    },
    placeholder: 'Write here...',
    theme: 'snow'
  });

$(document).ready(function() {
    $('#publish').click(function() {
        new jBox('Notice', {
            content: 'Your Story Has Been Published',
            color: 'blue'
        });
    });
});


// $.get('https://fasyauliuli.github.io/talentbandung.id/ebandy/assets/script/tempat.json', function(data, status) {
//     console.log(data);
// } );