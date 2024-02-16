fetch("./class.json")
  .then((res) => res.json())
  .then((data) => {
    const cardList = document.getElementById("cardList");
    const card = data.map(
      (item) => `
    <div class="card">
        <img src=${item.ImageUrl} alt="img"/>
        <div class="card-body">
         <h5 class="title bold">${item.Name}</h5>
         <p>${item.ShortDesc.slice(0, 60)}...</p>
         <button class="btn btn-outline-gray border border-gray  shadow-sm">View</button>
        </div>
    </div>
    `
    );
    cardList.innerHTML = card.join("");
  });
