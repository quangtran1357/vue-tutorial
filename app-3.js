// v-if else && v-show
// v-if, else check condition bth và render lại mỗi khi condition thay đổi
// v-show nó sẽ render 1 lần duy nhất và chỉ thêm style display: block - none khi condition thay đổi
 
const appThree = Vue.createApp({
    data() {
        return {
            isShow: false,
            conditionElseIf: false,
            numbers: [1,2,3,4,5,6,7,8,9,10],
            students: [
                {
                    name: 'Dung',
                    like: 'read book'
                },
                {
                    name: 'Lan',
                    like: 'play game'
                },
                {
                    name: 'Thong',
                    like: 'code'
                }
            ],
            objectStudent: {
                name: 'Dung',
                like: 'Dung',
                age: '18'
            },
            inputName: 'Quang',
            inputAge: 20,
            textarea: 'pqoiepoq2wiepoqw ipeoiq wpoei oqwiepo qwipeo iqpoweipoqwiep oiqw',
            checkbox: false,
            checkedNames: [],
            picked: '',
            selected: '',
            multiSelected: ''
        }
    },
    watch: {
        inputName(value) {
            console.log(value)
        },
        checkbox(value) {
            console.log(value)
        },
        checkedNames(value) {
            console.log(value)
        },
        multiSelected(value) {
            console.log(value)
        }
    },
    methods: {
        changeInputName(e) {
            console.log(e.target)
            this.inputName = e.target.value
        }
    }
})

appThree.mount('#app3')