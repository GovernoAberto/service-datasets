cube(`Leitos`, {
  sql: `SELECT * FROM public.leitos WHERE cep between 93300001 and 93599999`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    },
    quantidadeLeitos: {
      sql: `quantidade`,
      type: `sum`,
    },
    quantidadeSus: {
      sql: `quantidade_sus`,
      type: `sum`,
    }
  },
  
  dimensions: {
    nomeInstituicao: {
      sql: `nome_instituicao`,
      type: `string`
    },

    codigoLeito: {
      sql: `codigo_leito`,
      type: `string`
    },
    
    tipoLeito: {
      sql: `tipo_leito`,
      type: `string`
    },

    cep: {
      sql: `cep`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
