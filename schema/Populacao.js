cube(`Populacao`, {
  sql: `SELECT * FROM public.municipios_populacao`,
  
  joins: {
    
  },
  
  measures: {
    
  },
  
  dimensions: {
    codigoIbge: {
      sql: `codigo_ibge`,
      type: `number`
    },
    populacao: {
      sql: `populacao`,
      type: `number`
    },
    ano: {
      sql: `ano`,
      type: `number`
    },
  },
  
  dataSource: `default`
});
