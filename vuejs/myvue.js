
var vm_string = new Vue({
	el: "#string",
	data: {
		string: "hello world!"

	},
	methods: {
		reverseString: function(string) {
			return string.split("").reverse().join("");
		}
	},
	filters: {
		reversed: function(string) {
			return string.split("").reverse().join("");
		}
	},
	computed: {
		computedReverse: function() {
			return this.reverseString(this.string);
		},
		computedCapitalize: function() {
			return this.string.toUpperCase();
		}
	}
});
var vm_question = new Vue({
	el: "#question",
	data: {
		hint: "please input your question:",
		question: "are you ok?",
		answer: "waiting for your input..."
	},
	methods: {
		getAnswer: _.debounce(function() {
			this.answer = "thinking..."
			var result = Math.random()>0.5 ? "yes" : "no";
			setTimeout(()=>{
				this.answer = result;
			}, 1000);
		}, 500)
	},
	watch: {
		question: function() {
			this.answer = "Waiting for you to stop typing...";
			this.getAnswer();
		}
	}
});

var vm_todos = new Vue({
	el: "#todos",
	data: {
		newtodo: "study",
		Add: "btn_add",
		Delete: "btn_delete",
		todos:[
			{text: "vue.js"},
			{text: "node.js"},
			{text: "jquery.js"}
		]
	},
	methods: {
		addTodo: function() {
			this.todos.push({text: this.newtodo});
		},
		deleteTodo: function(index) {
			this.todos.splice(index, 1);
		}
	}
})