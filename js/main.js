const saveButton = document.getElementById('saveButton')
var editor = new EditorJS({
  holderID: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link'],
      config: {
        placeholder: 'Header'
      },
      shortcut: 'CMD+SHIFT+H'
    },
    image: {
      class: SimpleImage,
      inlineToolbar: ['link']
    },
    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L'
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: "Quote's author"
      },
      shortcut: 'CMD+SHIFT+O'
    },
    warning: Warning,
    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    code: {
      class: CodeTool,
      shortcut: 'CMD+SHIFT+C'
    },
    delimiter: Delimiter,
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C'
    },
    linkTool: LinkTool,
    embed: Embed,
    table: {
      class: Table,
      inlineToolbar: true,
      shortcut: 'CMD+ALT+T'
  }},
  data: {
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Editor.js',
          level: 2
        }
      }

    ]
  },
  onReady: function () {
    saveButton.click()
  },
  onChange: function () {
    console.log('something is changinggggggggg')
  }
})
saveButton.addEventListener('click', function () {
  editor.save().then((savedData) => {
    var output = document.getElementById('output')
    var createNode = document.createElement('div')
    console.log(Object.keys(savedData.blocks).length)
    for (i = 0;i < Object.keys(savedData.blocks).length;i++) {
      createNode.innerHTML += savedData.blocks[i].data.text + '<br>'
    }

    output.appendChild(createNode)
  })
})
