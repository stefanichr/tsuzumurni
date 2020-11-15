'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsemuamenu')
        .get(jsonku.tampilsemuamenu);

    app.route('/tampilsemuatipe')
        .get(jsonku.tampilsemuatipe);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahMahasiswa);
        
    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
}