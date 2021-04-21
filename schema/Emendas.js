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
    nomeAutor: {
      sql: `nome_autor`,
      type: `string`
    },
    nomeFuncao: {
      sql: `nome_funcao`,
      type: `string`
    },
    nomeSubfuncao: {
      sql: `nome_subfuncao`,
      type: `string`
    },
    valorEmpenhado: {
      sql: `valor_empenhado`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
