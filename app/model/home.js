module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Main = app.model.define(
    'device_controller',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      active: INTEGER,
      ip: STRING(20),
      name: STRING(50),
    },
    { timestamps: true }
  );

  return Main;
};
