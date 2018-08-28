const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola', opts)
    .command('crear', 'Genera archivo con tabla', opts)
    .argv;

module.exports = {
    argv
}