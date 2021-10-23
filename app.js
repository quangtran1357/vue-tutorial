const app = Vue.createApp({
    data() {
        return {
            demo: 'Hello world',
            name: 'Quang',
            like: 'Play game',
            age: 26,
            students: ['Dung', 'Linh', 'Duong'],
            student: {
                name: 'Huong'
            },
            seen: false,
            link: 'google.com',
            classPTag: 'color-red',
            rawHtml: '<h1>Đây là raw HTML</h1>'
        }
    },
    methods: {
        // rawHtml() { Không được kahi báo vì trùng tên trong data
        // },
        showAlert() {
            alert('Hello')
        },
        changeName(name) {
            this.name = name
        },
        changeData() { //function
            this.students.push('Luong')
            this.seen = true
            this.changeName('Lan')
        },
        demoMethodReturnText() {
            return 'Demo text'
        }
    }
})

app.mount('#app')


// students[0]
// student.name

// const app2 = Vue.createApp({
//     data() {
//         return {
//             demo2: 'text demo 2'
//         }
//     }
// })

// app2.mount('#app2')