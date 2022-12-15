const alumno = {
  no_control : "20415082060218",
  nombre : "Arturo",
  ap : "peralta",
  am : "mendez",
  dirección : {
    calle : "los sabinos",
    no : 41,
    colonia : "casas geo",
    municipio : "Tecamac",
    cp : 55614,
  },
  casado : true,
  hermanos : ["kary","brenda"]
}

const {nombre, casado, ap, am}=alumno;
console.log("Nombre: " +nombre, " "+ap, " " +am);
console.log("Casado: "+casado);
console.log(JSON.stringify(alumno));


const alumno2=JSON.parse(`{"no_control":"20415082060218","nombre":"Arturo","ap":"peralta","am":"mendez","dirección":{"calle":"los sabinos","no":41,"colonia":"casas geo","municipio":"Zumpango","cp":55614},"casado":true,"hermanos":["kary","brenda"]}`);

console.log(alumno2);
console.log(alumno2.nombre+" "+alumno2.ap+" "+alumno2.am);

localStorage.setItem("alumno1",JSON.stringify(alumno));
localStorage.setItem("alumno2",JSON.stringify(alumno2));


const api=async()=>{
  const url=await fetch('alumnos.json');
  const json=await url.json();
  console.log(json);
  divRes=document.querySelector("#Res");
  json.map(user=>{
    divRes.innerHTML+=`
    <p>${user.nombre}
    ${user.ap}
    ${user.am}</p>
    `;
  })
}