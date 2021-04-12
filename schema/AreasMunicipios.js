cube(`AreasMunicipios`, {
  sql: `SELECT * FROM public.municipios_areas`,
  
  joins: {
    
  },
  
  measures: {
    
  },
  
  dimensions: {
    codigoIbge: {
      sql: `codigo_ibge`,
      type: `number`
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
