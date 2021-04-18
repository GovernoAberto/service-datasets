cube(`Populacao`, {
  sql: `SELECT * FROM public.municipios_populacao`,
  
  joins: {
    
  },
  
  measures: {
    total: {
      sql: `populacao`,
      type: `sum`
    },
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
