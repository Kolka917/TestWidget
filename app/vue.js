new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({ 
    client: null,
    message: 'Загрузка данных..',
    message_text: null,
    message_text_error: false,
    send_message_load: false,
  }),
  methods: {
    axios () {
      axios
      .post(`https://widget.myenvy.ru/widget/message/api.php`, {
        client: this.client,
        type: 'search_client'
      })
      .then(response => {
        if ( response.data.client_object ) {
          this.message = response.data.client_object
        } else {
          this.message = 'Нет данных'
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    send_message () {
      if ( this.message_text ) {
        this.message_text_error = false
        this.send_message_load = true
        axios
        .post(`https://widget.myenvy.ru/widget/message/api.php`, {
          client: this.client,
          message: this.message_text,
          type: 'send_message'
        })
        .then(response => {
          this.message = this.message_text
          this.message_text = null
          this.send_message_load = false
        })
        .catch(error => {
          console.log(error)
          this.send_message_load = false
        })
      } else {
        this.message_text_error = true
      }
    },
  },
  mounted() {
    this.axios()
  },
  created() {
    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)
    this.client = params.get("client_id")
  }
})