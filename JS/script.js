fetch("http://localhost:3000/users")
.then((res) => {
return res.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
});
const url = ("http://localhost:3000/users");

async function getALLUser() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
getALLUser();

async function getUser(userId) {
    const response = await fetch ('${url}/${url}'); {
    const data = await response.json();
    console.log(data);
    }
getUser(2);

let user ={
    firstName: "John",
    lastName: "Doe",
    username: "JohnDoe",
    email: "john.doe@email.com",
    gender: "Male",
};
async function createUser(user){
    const response = await fetch (url,{
        methode: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
});
const data = await response.json();
console.log(data);
}
createUser(user);

async function updateUser (userId, userData ) {
const response = await fetch(`${url}/${userId}`, {
    methode: "PATCH",
    body: JSON.stringify(userData),
    headers: {
        "Content-Type": "appilication/json",
    },
});
const data = await response.json();
console.log(data);
}
updateUser(51, data);

async function deleteUser(userId) {
    const response = await fetch(`${url}/${userId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    }
}