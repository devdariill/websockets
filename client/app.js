const socket = new WebSocket('ws://localhost:8080')

function sendMessage (e){
  e.preventDefault()
  const message = document.querySelector('input')
  if (!message.value) return
  socket.send(message.value)
  message.value = ''  
}

document.querySelector('form')
  .addEventListener('submit', sendMessage)


socket.addEventListener('message',({data})=>{  
  console.log(data)
  const li = document.createElement('li')
  li.textContent = data
  document.querySelector('ul').appendChild(li)
})