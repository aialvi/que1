let allRead = false; 

let notifications = [
{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: false},
{message: 'Amet', read: true}
];


const changeReadValue = notifications.map(notification => {
	return {
    	allread: notification.read = allRead
 	 };
});


console.log(notifications);