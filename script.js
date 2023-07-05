curtirPortifolio();
incrementaQuantidadeDeVisitas();

function curtirPortifolio() {
  const curtidaBotao = document.querySelectorAll(".btn-like");
  curtidaBotao.forEach((button) => {
    const projectId = button.id;
    const ehFavoritado = localStorage.getItem(projectId);

    if (ehFavoritado === "true") {
      button.classList.add("liked");
      const likeCount = button.querySelector(".like-count");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });

  curtidaBotao.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.id;
      const ehFavoritado = button.classList.contains("liked");

      const likeCount = button.querySelector(".like-count");
      let count = parseInt(likeCount.textContent);

      if (ehFavoritado) {
        count--;
        button.classList.remove("liked");
        localStorage.setItem(projectId, "false");
      } else {
        count++;
        button.classList.add("liked");
        localStorage.setItem(projectId, "true");
      }

      likeCount.textContent = count;
    });
  });
}

function incrementaQuantidadeDeVisitas() {
const contador = document.getElementById("count");

let visitas;

if (!localStorage.getItem("visitas")) localStorage.setItem("visitas", 1);
else {
    visitas = +localStorage.getItem("visitas");
    const contagemIncrementada = visitas + 1;

    localStorage.setItem("visitas", contagemIncrementada)
}
console.log("visitas: ", visitas);

console.log(localStorage.getItem("visitas"))
contador.innerText = localStorage.getItem("visitas")
}