cube(`Gentilicos`, {
  sql: `SELECT * FROM public.municipios_gentilicos`,
  
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
    nome: {
      sql: `nome`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
