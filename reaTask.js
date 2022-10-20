function cek() {
  fetch("https://630de3d8b37c364eb70df7d4.mockapi.io/todos").then((res) => {
    res.json().then((data) => {
      console.log(data.data);

      var temp = "";
      data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td> " + itemData.id + "</td>";
        temp += "<td>" + itemData.gorev + "</td>";
        temp += "<td>" + itemData.gtanim + "</td></tr>";
       
      });
      document.getElementById("data").innerHTML = temp;
    });
  });
}
function gonder() {
    document.forms[0].onsubmit = async(e) => {
        e.preventDefault();
        const params = new URLSearchParams([...new FormData(e.target).entries()]);
        fetch("https://630de3d8b37c364eb70df7d4.mockapi.io/todos", {method:"POST", body:params})
        const response = await new Response(params).text();
        console.log(response);
      }
 }