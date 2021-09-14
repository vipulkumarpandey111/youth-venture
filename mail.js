
function sendmail() {

    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
        Host: 'smtp.gmail.com',
        Username: "demomessage.1234@gmail.com",
        Password: "The#Youth&Venture@2021",
        To: 'priyanshu.kr81@gmail.com',
        From: "demomessage.1234@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body
    }).then(
        message => {
            // console.log (Body);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
                window.location = 'index.html';
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')
            }
        }
    );
}