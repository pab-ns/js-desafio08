// Objeto Consultorio
function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

// Objeto Paciente
function Paciente(nombrePaciente, edadPaciente, rutPaciente, diagnosticoPaciente) {
  
  // Get y Set para cada atributo de Paciente

  // nombre Paciente
  var _nombrePaciente = nombrePaciente;
  Object.defineProperty(this, "nombrePaciente", {
    get: function () {
      return _nombrePaciente;
    },
    set: function (nuevoNombrepaciente) {
      _nombrePaciente = nuevoNombrepaciente;
    },
  });

  // edadPaciente
  var _edadPaciente = edadPaciente;
  Object.defineProperty(this, "edadPaciente", {
    get: function () {
      return _edadPaciente;
    },
    set: function (nuevoEdadpaciente) {
      _edadPaciente = nuevoEdadpaciente;
    },
  });

  // rutPaciente
  var _rutPaciente = rutPaciente;
  Object.defineProperty(this, "rutPaciente", {
    get: function () {
      return _rutPaciente;
    },
    set: function (nuevoRutpaciente) {
      _rutPaciente = nuevoRutpaciente;
    },
  });

  // diagnosticoPaciente
  var _diagnosticoPaciente = diagnosticoPaciente;
  Object.defineProperty(this, "diagnosticoPaciente", {
    get: function () {
      return _diagnosticoPaciente;
    },
    set: function (nuevoDiagnosticopaciente) {
      _diagnosticoPaciente = nuevoDiagnosticopaciente;
    },
  });
}



// Agregar pacientes test // nombrePaciente, edadPaciente, rutPaciente, diagnosticoPaciente
let agregarPacienteuno = new Paciente("Pedro", 30, "12345678", "Resfrio");
let agregarPacientedos = new Paciente("Pablo", 20, "24681012", "Fractura");

// Agregar consultorio // nombre, pacientes  
let agregarConsultorio = new Consultorio("Consultorio RM", [agregarPacienteuno, agregarPacientedos]);



// Metodo (funcion) mostrar TODOS pacientes registados
Consultorio.prototype.mostrarTodospacientes = function () {
  console.log(this.pacientes);
};

agregarConsultorio.mostrarTodospacientes();


// Metodo (funcion) buscar datos de usarios
Consultorio.prototype.buscarUnpaciente = function (nombreDepaciente){
  var index = -1;
  for (var i = 0; i < this.pacientes.length; i++){
    if(this.pacientes[i].nombrePaciente == nombreDepaciente){
      index = i;
    } 
  } 
    if(index >= 0){
      console.log("Paciente encontrado. Nombre del paciente es", this.pacientes[index].nombrePaciente);
    } else {
      console.log("Paciente no existe");
    }
};

agregarConsultorio.buscarUnpaciente("Pedro");
agregarConsultorio.buscarUnpaciente("Pablo");






/*
  // Metodo protoype buscar datos
  Paciente.prototype.searchPacientes = function (search_paciente) {
    this.Paciente.find(Paciente == "nombrePaciente");
  };
  
  Metodo (funcion) mostrar TODOS pacientes registados
  Consultorio.prototype.mostrarTodospacientes = function (mostrarTodospacientes) {
    return Consultorio.values();
  };
  
  Consultorio.prototype.mostrarTodospacientes = function () {
    console.log(this.pacientes);
  };
*/