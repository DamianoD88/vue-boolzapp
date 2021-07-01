const app = new Vue({
    el: '#app',
    data: {
      contactActive: 0,
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
    },
    methods: {
        setContactActive(indice){
            this.contactActive = indice;
            console.log(this.contactActive);
            
        },
        // SendMessage(){
        //     console.log(this.newMessage);
        //     const newMess = {
        //         date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        //         message: this.newMessage,
        //         status: 'sent'
        //     };
        //     console.log(newMess);
        //     this.contacts[this.contactActive].messages.push(newMess);
        //     console.log(this.contacts[this.contactActive].messages);

        //     this.newMessage = '';


        //     setTimeout(()=> {
        //         const newRisposta = {
        //             date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        //             message: 'ok',
        //             status: 'received'
        //         };
        //         this.contacts[this.contactActive].messages.push(newRisposta);
        //     },1000);
        // }
       
    }
   
  })