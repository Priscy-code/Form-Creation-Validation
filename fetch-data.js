async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')

    try{
        const response = await fetch(apiUrl)
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');
        userList.forEach(user => {
            const userListItem = document.createElement('li')
            userListItem.textContent = `Name: ${user.name}`
            userList.appendChild(userListItem);
        });
    }catch{
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
    }
}
document.addEventListener("DOMContentLoaded", function() {
  fetchUserData();
});