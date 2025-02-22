module.exports = {
  name: 'addresses',
  idField: 'id',
  primaryKeys: ['id'],
  isCompositePrimary: false,
  fields: [
    {
      field: 'user',
      type: 'Json',
      reference: 'users.id',
      get: () => ({ dataValues: { id: 123 } }),
      isVirtual: true,
      isFilterable: false,
      isSortable: false,
      isReadOnly: true,
      defaultValue: null,
      isRequired: false,
      description: null,
      inverseOf: null,
      relationships: null,
      enums: null,
      validations: [],
      integration: null,
    },
    {
      field: 'id',
      type: 'String',
      columnName: 'id',
      primaryKey: true,
      isRequired: true,
      validations: [Array],
      defaultValue: null,
      isReadOnly: false,
      isSortable: true,
      isFilterable: true,
      isVirtual: false,
      description: null,
      reference: null,
      inverseOf: null,
      relationships: null,
      enums: null,
      integration: null,
    },
  ],
  isSearchable: true,
  actions: [],
  segments: [],
  onlyForRelationships: false,
  isVirtual: false,
  isReadOnly: false,
  paginationType: 'page',
  icon: null,
  nameOld: 'addresses',
  integration: null,
};
