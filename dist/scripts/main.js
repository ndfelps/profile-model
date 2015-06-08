var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
	}
});

var app = new App();
Backbone.history.start();


console.log(user.name);
$("#inputEmail3").val(user.email);
$('#name').val(user.name);
$('#role').val(user.role);

user.on('change', function(newModel) {
	$('#profName').html(newModel.get('name'));
	$('#profJob').html(newModel.get('role'));
	$('#navName').html(newModel.get('name'));
	$("#inputEmail3").val(newModel.get('email'));
	$('#name').val(newModel.get('name'));
	$('#role').val(newModel.get('role'));
});

$('#stuff').on('click', function(e) {
	console.log('??')
	e.preventDefault();
	user.set({
		email: $("#inputEmail3").val(),
		name: $('#name').val(),
		role: $('#role').val()
	})
})