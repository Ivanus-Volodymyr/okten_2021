let maiOfUser = document.createElement('div');
maiOfUser.classList.add('userMainBlock');
let back = document.createElement('div');
let homeButton = document.createElement('button');
homeButton.classList.add('home');
let homeLink = document.createElement('a');
homeLink.href = 'index.html';
homeLink.innerText = 'Back to User List';


let url = new URL(location.href);
let idOFUser = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + idOFUser)
    .then(value => value.json())
    .then(value => {
        let blockDiv = document.createElement('div');
        blockDiv.classList.add('userBlock');
        let buttonElement = document.createElement('button');
        buttonElement.classList.add('userButtonPost');
        buttonElement.innerText = 'posts of current user';
        blockDiv.innerHTML = `
            <div>
            <h3>User name is: <h2>${value.name}</h2></h3>
            <h3>Username is: ${value.username}</h3> 
          
            <h3>User addres is:</h3> 
            <ul>
            <li>${value.address.street} street</li>
            <li>${value.address.suite} suite</li>
            <li>${value.address.city} city</li>
            <li>${value.address.zipcode}</li>
            <li> Geo <ol>
            <li>lat ${value.address.geo.lat}</li>
            <li>lng ${value.address.geo.lng}</li>
            </ol></li>
            </ul>
            <h3>Company: </h3>
            <ul>
            <li>Name of company: ${value.company.name}</li>
            <li>CatchPhrase of company: ${value.company.catchPhrase}</li>
            <li>Bs of company: ${value.company.bs}</li>
            </ul>
            <h3>User email is: ${value.email}</h3> 
            <h3>User phone is: ${value.phone}</h3> 
            <h3>User website is: ${value.website}</h3> 
            </div>
            `
        buttonElement.onclick = () => {
            let postBlockMain = document.createElement('div');
            postBlockMain.classList.add('postBlockMain');
            fetch('https://jsonplaceholder.typicode.com/users/' + value.id + '/posts')
                .then(value => value.json())
                .then(value => {
                    for (const post of value) {
                        buttonElement.style.display = 'none';
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('postDiv');
                        postDiv.innerHTML = `
                        <h3>User post with id ${post.userId}</h3>
                        <h3>Post title: <p>${post.title}</p></h3>
                        `
                        let buttonElementPostDetails = document.createElement('button');
                        buttonElementPostDetails.classList.add('buttonElementPostDetails');
                        let linkPostDetails = document.createElement('a');
                        linkPostDetails.innerHTML = 'details about this post';
                        linkPostDetails.href = 'post-details.html?id=' + post.id;

                        buttonElementPostDetails.append(linkPostDetails);
                        postDiv.appendChild(buttonElementPostDetails);
                        postBlockMain.appendChild(postDiv);
                    }
                });
            blockDiv.appendChild(postBlockMain);
        }
        blockDiv.append(buttonElement);
        maiOfUser.append(blockDiv);
    })

homeButton.appendChild(homeLink);
back.appendChild(homeButton);
maiOfUser.append(back);
document.body.append(maiOfUser);
