cube(`Emendas`, {
  sql: `SELECT * FROM public.emendas`,
  
  joins: {
    
  },
  
  measures: {

  },
  
  dimensions: {
    codigoIbge: {
      sql: `codigo_ibge`,
      type: `number`
    },
    ano: {
      sql: `ano`,
      type: `number`
    },
    nomeFuncao: {
      sql: `nome_funcao`,
      type: `string`
    },
    nomeSubfuncao: {
      sql: `nome_subfuncao`,
      type: `string`
    },
    nomeAutor: {
      sql: `nome_autor`,
      type: `string`
    },
    valorEmpenhado: {
      sql: `valor_empenhado`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
