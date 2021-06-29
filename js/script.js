const app = new Vue({
    el: '#app',
    data: {
      count:0,
      contacts: [
        {
            name: 'Mchele',
            avatar: '',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                }
            ]


        }
      ]
    }
  })