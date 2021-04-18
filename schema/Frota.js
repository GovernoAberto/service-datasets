cube(`Frota`, {
  title: "Frota de Veículos: ",
  sql: `SELECT * FROM public.frota`,
  
  joins: {
    
  },
  
  measures: {
    total: {
      sql: `quantidade`,
      type: `sum`,
    },
    ultimoMes: {
      sql: `mes`,
      type: `max`
    },
    ultimoAno: {
      sql: `ano`,
      type: `max`
    }
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

    mes: {
      sql: `mes`,
      type: `number`
    },

    ano: {
      sql: `ano`,
      type: `number`
    },
    
    tipo: {
      sql: `tipo`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
