cube(`Transferencias`, {
  sql: `SELECT * FROM public.transferencias`,
  
  joins: {
    
  },
  
  measures: {
    valorTransferido: {
      sql: `valor_transferido`,
      type: `sum`,
      format: `currency`
    }
    
  },
  
  dimensions: {
    ano: {
      sql: `ano`,
      type: `number`
    },

    mes: {
      sql: `mes`,
      type: `number`
    },

    codigo_municipio: {
      sql: `codigo_municipio`,
      type: `number`
    },

    tipoTransferencia: {
      sql: `tipo_transferencia`,
      type: `string`
    },

    tipoFavorecido: {
      sql: `tipo_favorecido`,
      type: `string`
    },

    nomeFuncao: {
      sql: `nome_funcao`,
      type: `string`
    },
    
    nomePrograma: {
      sql: `nome_programa`,
      type: `string`
    },
    
  },
  
  dataSource: `default`
});
