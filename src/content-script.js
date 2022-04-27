const ids = [
  "incontent_player",
  "top_boxad",
  "incontent_boxad_1",
  "incontent_boxad_1-bottom"
]

function remove() {
  ids
    .map(id => document.getElementById(id))
    .forEach(element => {
      if (element) {
        element.remove()
      }
    })
}

setTimeout(() => {
  remove()
  console.log("😎 removed!")
}, 1000)
