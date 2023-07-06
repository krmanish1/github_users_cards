//Q https://api.github.com/users
let article = document.querySelector("article");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users", true);
xhr.responseType = "json";
xhr.onload = function () {
  let data = xhr.response;
  let org;

  for (let i = 0; i < data.length; i++) {
    if (data[i].type !== "User") {
      org = data.splice(i, 1);
      // console.log(org);
    }
  }
  data.unshift(org[0]);
  // console.log(data);

  data.map((value) => {
    article.innerHTML += `
        <div class="card ${value.type !== "User" ? "org" : ""}" >
          <img src=${value.avatar_url}>
            <h2> ${value.login}</h2>
            <a href=${
              value.html_url
            } target="_blank"><i class="fa-brands fa-github"></i> Github Profile</a>
            <h3> ${value.type}</h3>
            </div>
          `;
  });
};

xhr.send();
