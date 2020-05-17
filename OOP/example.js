class UserTemplate{

    constructor(name,password,age) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
    }

    login() {
        this.connected = true
        console.log('your login status:, this connected)
    }
}

user1 = new UserTemplateM('Andy','aaa',25)
user2 = new UserTemplateM('Boby','bbb',35)

console.log(user1.name)
console.log(user1.age)
console.log(user1.connected)
user1.login()
console.log(user1.connected)