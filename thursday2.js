// Objects

'string'.length;
[1,2,4].slice(0,1)

const contacts = {
    // key: value
    name: 'Bob Smith',
    phone: "5551234567",
    address: {
        city: "Knoxville",
        state: "TN"
    },
    hobbies: ["hunting", "swimming"],
    walk: function() {
        return this.name + " walks"
    },

    name: 'Boberta Smith',
    phone: "5551234567",
    address: {
        city: "Knoxville",
        state: "TN"
    },
    hobbies: ["hunting", "swimming"],
    walk: function() {
        return this.name + " runs"
    }
}

for (var i = 0; i < contacts.length; i ++) {
    console.log(contacts[i].name);
}

// console.log(person.name)
// console.log(person.address.city)

