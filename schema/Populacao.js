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
