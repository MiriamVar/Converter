 function getRate() {
    let money = document.getElementById('money').value;
    let appid="1bb0aff1f8b21c79723aefa5140f4477";
    let req="http://data.fixer.io/api/latest?access_key=";
    req= req+appid;
    console.log(req);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let obj=JSON.parse(this.responseText);
       document.getElementById("toUSD").innerHTML = obj.rates.USD*money;
       document.getElementById("toHUF").innerHTML = obj.rates.HUF*money;
       document.getElementById("toRUB").innerHTML = obj.rates.RUB*money;
       document.getElementById("toPLN").innerHTML = obj.rates.PLN*money;
       }
    };
    xhttp.open("GET", req , true);
    xhttp.send();
    }

    function getResult() {
      let money2=document.getElementById("money2").value;
      let appid2="1bb0aff1f8b21c79723aefa5140f4477";
      let req2="http://data.fixer.io/api/latest?access_key=";
      req2+=appid2;
      console.log(req2);


      //prva mena
      if (document.getElementById("mena1").value == "USD"){
        res=money2 * 0.88;
        console.log(res);
      }

      if (document.getElementById("mena1").value == "GBP"){
        res=money2 * 1.11;
        console.log(res);
      }

      if (document.getElementById("mena1").value == "PLN"){
        res=money2 * 0.23;
        console.log(res);
      }

      if (document.getElementById("mena1").value == "EUR"){
        res=money2;
      }




      //druha mena
      if (document.getElementById("mena2").value == "USD"){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let obj=JSON.parse(this.responseText);
          document.getElementById("result").innerHTML = obj.rates.USD*res;
       }
      };
      xhttp.open("GET", req2 , true);
      xhttp.send();
      }

      else if (document.getElementById("mena2").value == "GBP"){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let obj=JSON.parse(this.responseText);
          document.getElementById("result").innerHTML = obj.rates.GBP*res;
       }
      };
      xhttp.open("GET", req2 , true);
      xhttp.send();
      }

      else if (document.getElementById("mena2").value == "PLN"){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let obj=JSON.parse(this.responseText);
          document.getElementById("result").innerHTML = obj.rates.PLN*res;
       }
      };
      xhttp.open("GET", req2 , true);
      xhttp.send();
      }

      else if (document.getElementById("mena2").value == "EUR"){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let obj=JSON.parse(this.responseText);
          document.getElementById("result").innerHTML = res;
       }
      };
      xhttp.open("GET", req2 , true);
      xhttp.send();
      }
    }