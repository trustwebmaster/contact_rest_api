import { db } from "../database";

import { DataTypes, Model, CreationOptional } from "sequelize";

class Contact extends Model {
  declare id: CreationOptional<string>;
  declare email: string;
  declare name: string;
  declare mobileOne: string;
  declare mobileTwo: string;
}

Contact.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    mobileOne: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    mobileTwo: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    timestamps: true,
    tableName: "contacts",
  }
);

export default Contact;
