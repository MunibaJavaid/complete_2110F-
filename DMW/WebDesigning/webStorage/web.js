function myfunc(){
        if(typeof(Storage) != undefined){
                var name = document.getElementById("txt").value
                sessionStorage.setItem("First_Name",name);
                var pass = document.getElementById("pass").value
                sessionStorage.setItem("Password",pass)

                var s_name = sessionStorage.getItem("First_Name")
                var s_pass = sessionStorage.getItem("Password")
                alert("Name: "+s_name+ "password: "+s_pass)
        }
}