cube(`Transferencias`, {
  sql: `SELECT * FROM transferencias`,
  
  joins: {
    
  },
  
  measures: {
    total: {
      sql: `valor_transferido`,
      type: `sum`,
      format: `currency`
    }
    
  },
  
  dimensions: {
    codigoMunicipio: {
      sql: `codigo_siafi`,
      type: `number`,
      meta: {
        scope: {
          type: 'city',
          columnType: 'siafi'
        }
      }
    },

    ano: {
      sql: `ano`,
      type: `number`,
      meta: {
        public: true
      }
    },

    mes: {
      sql: `mes`,
      type: `number`,
      meta: {
        public: true
      }
    },

    tipoTransferencia: {
      sql: `CASE 
        WHEN tipo_transferencia = 1 THEN 'Legais, Voluntárias e Específicas' 
        WHEN tipo_transferencia = 2 THEN 'Constitucionais e Royalties'
        ELSE 'Outro' END`,
      type: `string`,
      meta: {
        public: true
      }
    },

    tipoFavorecido: {
      sql: `tipo_favorecido`,
      type: `string`,
      meta: {
        public: true
      }
    },

    nomeFuncao: {
      sql: `nome_funcao`,
      type: `string`,
      meta: {
        public: true
      }
    },

    nomeFuncaoReduzido: {
      sql: `CASE 
        WHEN nome_funcao = 'Saúde' THEN 'Saúde' 
        WHEN nome_funcao = 'Encargos especiais' THEN 'Encargos especiais'
        WHEN nome_funcao = 'Educação' THEN 'Educação'
        WHEN nome_funcao = 'Assistência social' THEN 'Assistência social'
        ELSE 'Outros' END`,
      type: `string`
    },
    
    nomePrograma: {
      sql: `nome_programa`,
      type: `string`,
      meta: {
        public: true
      }
    },
    
    valor: {
      sql: `valor_transferido`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
