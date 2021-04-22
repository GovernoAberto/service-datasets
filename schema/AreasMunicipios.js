cube(`AreasMunicipios`, {
  sql: `SELECT * FROM public.municipios_areas`,
  
  joins: {
    
  },
  
  measures: {
    
  },
  
  dimensions: {
    codigoIbge: {
      sql: `codigo_ibge`,
      type: `number`,
      meta: {
        scope: {
          type: 'city',
          columnType: 'ibge'
        }
      }
    },
    area: {
      sql: `area`,
      type: `number`,
      meta: {
        public: true
      }
    },
    ano: {
      sql: `ano`,
      type: `number`,
      meta: {
        public: true
      }
    },
  },
  
  dataSource: `default`
});
