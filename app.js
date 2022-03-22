new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],
        form:{
            question:"",
            answer:"",
            category:"",
            flipped:""

        }
    },
    methods:{
        submit:function (){
            this.cards.push(this.form);
            this.form={
                question:"",
                answer:"",
                category:"",
                flipped:""
            }
        }

    }
})