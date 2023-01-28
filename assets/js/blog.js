let blogs = [];

function getData(event) {
  event.preventDefault();

  let name = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description-box").value;
  let image = document.getElementById("input-image").files;

  image = URL.createObjectURL(image[0]);

  // technologies checked

  let nodeJs = document.getElementById("nodejs");
  let reactJs = document.getElementById("reactjs");
  let nextJs = document.getElementById("nextjs");
  let typeScript = document.getElementById("typescript");

  let iconNodeJs = ``;
  let iconReactJs = ``;
  let iconNextJs = ``;
  let iconTypeScript = ``;

  if (nodeJs.checked === false) {
    iconNodeJs = `style="display: none;"`;
  }
  if (reactJs.checked === false) {
    iconReactJs = `style="display: none;"`;
  }
  if (nextJs.checked === false) {
    iconNextJs = `style="display: none;"`;
  }
  if (typeScript.checked === false) {
    iconTypeScript = `style="display: none;"`;
  }

  let addBlog = {
    name,
    startDate,
    endDate,
    description,
    image,
    iconNodeJs,
    iconReactJs,
    iconNextJs,
    iconTypeScript,
  };

  console.log(addBlog);
  blogs.push(addBlog);
  showData();
}

function showData() {
  document.getElementById("post-blog").innerHTML = ``;
  for (let i = 0; i < blogs.length; i++) {
    document.getElementById("post-blog").innerHTML += `<div class="card-blog">
    <div class="content-blog">
      <div class="thumbnail">
        <img src="${blogs[i].image}" alt="" />
      </div>

      <div class="title-blog">
        <h3><a href="blog.html">${blogs[i].name}</a></h3>
        <p>durasi : 3 bulan</p>
      </div>

      <div class="description-output">
        ${blogs[i].description}
      </div>

      <div class="technologies-output">
        <div class="nodejs">
          <img src="assets/img/nodejs.png" alt="" ${blogs[i].iconNodeJs} />
        </div>
        <div class="nextjs">
          <img src="assets/img/nextjs.png" alt="" ${blogs[i].iconNextJs}/>
        </div>
        <div class="reactjs">
          <img src="assets/img/reactjs.png" alt="" ${blogs[i].iconReactJs}/>
        </div>
        <div class="typescript">
          <img src="assets/img/typescript.png" alt="" ${blogs[i].iconTypeScript}/>
        </div>
      </div>

      <div class="opsi-blog">
        <div class="edit-blog">
          <a href="">edit</a>
        </div>

        <div class="delete-blog">
          <a href="">delete</a>
        </div>
      </div>
    </div>
  </div>`;
  }
}
