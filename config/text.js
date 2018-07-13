module.exports = {
    // users dummy data
     users :[
	    { 
	      id:1,
	      username:"test"
	    },{
	      id:2,
	      username:"test1"
	    }
	 ],

	// users-groups dummy data
	 userGroups :[
		 {
		 	id:1,
		 	user_id:1,
		 	group_name:"test"
		 },{
		 	id:2,
		 	user_id:2,
		 	group_name:"test1"
		  }
	 ],

    // devices dummy data
	 devices :[
		 {
		 	id:1,
		 	device_name:"i-phone"
		 },
		 {
		 	id:2,
		 	device_name:"i-phoneX"
		 }
	 ],

    // device-groups dummy data
	 deviceGroups :[
		 {
		 	id:1,
		 	device_id:1,
		 	group_name:"ios"
		 },
		 {
		 	id:2,
		 	device_id:2,
		 	group_name:"ios1"
		 }
	 ],
	 // reservations dummy data
	 reservations :[
	     {
		 	id:1,
		 	user_id:1,
		 	device_id:1
		 },
		 {
		 	id:2,
		 	user_id:1,
		 	device_id:2
		 },
		 {
		 	id:3,
		 	user_id:2,
		 	device_id:2
		 },
		 {
		 	id:4,
		 	user_id:2,
		 	device_id:1
		 }
	 ]
}