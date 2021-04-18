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
      type: `number`
    },
    ano: {
      sql: `ano`,
      type: `number`
    },
  },
  
  dataSource: `default`
});
