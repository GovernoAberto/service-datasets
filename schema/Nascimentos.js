cube(`Nascimentos`, {
  sql: `SELECT * FROM public.registro_civil where tipo_registro = 'nascimento'`,
  
  joins: {
    
  },
  
  measures: {
    total: {
      title: "Total de nascimentos",
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

    mes: {
      title: "Mês",
      sql: `extract(month from inicio)`,
      type: `number`
    },

    ano: {
      title: "Ano",
      sql: `extract(year from inicio)`,
      type: `number`
    },
    
    quantidade: {
      title: "Quantidade",
      sql: `total`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
