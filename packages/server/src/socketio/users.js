class Users {
  constructor() {
    this.users = []
  }

  addUserData(zoneId, zoneName, username) {
    var users = {
      zoneId,
      zoneName,
      username
    }
    this.users.push(users)
    return users
  }

	getUsersList(zoneId) {
		var users  = this.users.filter((user)=> user.zoneId === zoneId )

		var namesArr = users.map((user) => user.username)
		return namesArr
	}
}

export default Users
