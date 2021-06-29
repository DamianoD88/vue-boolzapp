const app = new Vue({
    el: '#app',
    data: {
      count:0,
      contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:55',
                    text: 'Ha magnato??',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:50:55',
                    text: 'sta bello satollo!',
                    status: 'received'
                },
            ]
 
        },
        {
            name: 'Domenico',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:55',
                    text: 'Ha magnato??',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:50:55',
                    text: 'sta bello satollo!',
                    status: 'received'
                },
            ]
 
        },
        {
            name: 'Gofredo',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:55',
                    text: 'Ha magnato??',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:50:55',
                    text: 'sta bello satollo!',
                    status: 'received'
                },
            ]
 
        },
        {
            name: 'Giulia',
            avatar: '_io',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:55',
                    text: 'Ha magnato??',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:50:55',
                    text: 'sta bello satollo!',
                    status: 'received'
                },
            ]
 
        },
      ]
    }
   
  })