const appTwo = Vue.createApp({
    data() {
        return {
            counter: 0,
            text: 'Hello',
            students: ['Linh', 'Lan'],
            object: {
                name: 'Quang',
                like: 'Play game',
                students: [
                    {
                        name: 'Lan'
                    },
                    {
                        name: 'Dung'
                    }
                ],
                color: {
                    one: 'red',
                    two: 'black'
                }
            },
            isActive: true,
            isError: false,
            objectClass: { //objectClass['error'] = false
                'active': true, 
                'error': false
            },
            activeClass: 'active',
            errorClass: '',
            myColor: 'red',
            myPaddingTop: 10,
            objectStyle: {
                color: 'red',
                paddingTop: '10px'
            }
        }
    },
    methods: {
        increment(number, e) {
            this.counter += number // this.counter = this.counter + 1
            console.log(e)
            console.log(e.target) // button
        },
        decrement(e, number) {
            this.counter -= number
            console.log(e)
            console.log(e.target)
        },
        methodDemoE(e) {
            console.log(e)
        },
        reverseTextByMethod() {
            return this.text.split('').reverse().join('')
        },
        changeDataObject() {
            // this.object.name = 'Van'
            this.object.like = 'Play football'
        },
        changeActiveDiv() {
            // false -> !fasle => true
            // true -> !true => false
            this.isActive = !this.isActive
        }
    },
    computed: {
        counterText() {
            return `Giá trị của bộ đếm là: ${this.counter}`
        },
        reverseText() {
            return this.text.split('').reverse().join('') // cached, chỉ cập nhật khi data (text) thay đổi
        }
    },
    watch: { //watcher
        counter(newValue, oldValue) {
            console.log('counter thay đổi', newValue)
            console.log('giá trị counter cũ', oldValue)
        },
        object: {
            handler() {
                console.log('object thay đổi')
            },
            deep: true
        },
        'object.name' () {
            console.log('Object name thay đổi')
        },
        'object.color.one' () {
            console.log('Object name thay đổi')
        }
    }
})
// Khác nhau giữa computed và method:
// - method cho phép truyền tham số, computed thí không
// - method có thể xử lý data hoặc 1 sự kiện, chức năng nào đó, computed chỉ xử lý với data
// - method thay đổi khi có sự kiện hoặc gọi lại, computed chỉ thay đổi khi data thay đổi

// Sử dụng computed khi thao tác với data và data đó ít thay đổi
// Sử dụng method cho sự kiện hoặc xử lý một chức năng nào đó


appTwo.mount('#app2')