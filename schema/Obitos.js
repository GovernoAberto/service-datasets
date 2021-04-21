cube(`Obitos`, {
  sql: `SELECT * FROM public.registrocivil where tipo = 'death'`,
  
  joins: {
    
  },
  
  measures: {
    total: {
      title: "Total de óbitos",
      sql: `total`,
      type: `sum`
    }
  },
  
  dimensions: {
    codigoMunicipio: {
      sql: `codigo_ibge`,
      type: `number`,
      meta: {
        scope: {
          type: 'city',
          columnType: 'ibge'
        }
      }
    },

    quantidade: {
      title: "Quantidade",
      sql: `total`,
      type: `number`,
      meta: {
        public: true
      }
    },

    mes: {
      title: "Mês",
      sql: `extract(month from inicio)`,
      type: `number`,
      meta: {
        public: true
      }
    },

    ano: {
      title: "Ano",
      sql: `extract(year from inicio)`,
      type: `number`,
      meta: {
        public: true
      }
    }
  },
  
  dataSource: `default`
});
