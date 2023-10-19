const sequence = {
  _id: 1,
  get id() {
    // quando um elemento do objeto é uma função ele pode ser declarado assim, sem o identificador;
    return this._id++;
  },
};

const usuarios = {};

function salvarUsuario(usuario) {
  if (!usuario.id) usuario.id = sequence.id;
  usuarios[usuario.id] = usuario;
  return usuario;
}

function getUsuario(id) {
  return usuarios[id] || {};
}

function getUsuarios() {
  return Object.values(usuarios);
}

function excluirUsuario(id) {
  const usuario = usuarios[id];
  delete usuarios[id];
  return usuario;
}

module.exports = { salvarUsuario, getUsuario, getUsuarios, excluirUsuario };
