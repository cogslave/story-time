var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('users', {
		id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
		name: { type: 'string', unique: true, notNull: true },
		password: { type: 'string', notNull: true }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('users', callback);
};