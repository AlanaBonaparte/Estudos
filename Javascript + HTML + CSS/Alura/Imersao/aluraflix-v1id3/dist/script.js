var filmes = [
  "https://cinema10.com.br/upload/filmes/filmes_3399_Mulan.jpg",
  "https://picfiles.alphacoders.com/110/thumb-1920-110671.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBuRmp0bueewl2doCDbx5SWqkSH8S0aUozM7o5K4tNu7IpO5SVHcdT6yt9zguAMjd2yY&usqp=CAU",
  "https://http2.mlstatic.com/D_NQ_NP_14037-MLB3238515750_102012-O.jpg"
];

for (indice = 0; indice < filmes.length; indice++) {
  document.write("<img src=" + filmes[indice] + ">");
}