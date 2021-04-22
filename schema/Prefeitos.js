cube(`Prefeitos`, {
  sql: `SELECT * FROM public.municipios_prefeitos`,
  
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
      sql: `nome_prefeito`,
      type: `string`,
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
    }
  },
  
  dataSource: `default`
});
