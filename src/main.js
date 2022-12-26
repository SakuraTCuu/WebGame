// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

let registerInfo = {
  name: 'register_req',
  data: {
    userName: 'wk1',
    userPwd: '345'
  }
}
let loginInfo = {
  name: 'login_req',
  data: {
    userName: 'wk1',
    userPwd: '345'
  }
}

let joinInfo = {
  name: 'join_room_req',
  data: {
    userId: '49509f',
    userName: 'wk1'
  }
}

let leaveInfo = {
  name: 'exit_room_req',
  data: {
    userId: '49509f',
    userName: 'wk1'
  }
}

// Test
let websocket = new WebSocket('ws://localhost:8091')
function sendMsg (msg) {
  websocket.send(JSON.stringify(msg))
}
websocket.onmessage = (event) => {
  console.log('msg:', event.data)
  let data = JSON.parse(event.data)
  // if (data.errorId !== 0) {
  //   return
  // }
  if (data.eventId === 'register_rsp') {
    sendMsg(loginInfo)
  } else if (data.eventId === 'login_rsp') {
    joinInfo.data.userId = data.data.userId
    sendMsg(joinInfo)
  } else if (data.eventId === 'join_room_rsp') {
    leaveInfo.data.userId = data.data.userId
    sendMsg(leaveInfo)
  }
}

websocket.onopen = (ws) => {
  setTimeout(() => {
    sendMsg(registerInfo)
  }, 1000)
}
