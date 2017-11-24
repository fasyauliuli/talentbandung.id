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