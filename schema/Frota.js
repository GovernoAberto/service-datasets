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
    
    tipo: {
      sql: `tipo`,
      type: `string`,
      meta: {
        public: true
      }
    },

    tipoReduzido: {
      sql: `CASE 
        WHEN tipo = 'AUTOMOVEL' THEN 'AUTOMOVEL' 
        WHEN tipo = 'MOTOCICLETA' THEN 'MOTOCICLETA'
        WHEN tipo = 'MOTONETA' THEN 'MOTONETA'
        WHEN tipo = 'CAMINHONETE' THEN 'CAMINHONETE'
        WHEN tipo = 'CAMINHAO' THEN 'CAMINHAO'
        WHEN tipo = 'ONIBUS' THEN 'ONIBUS'
        ELSE 'OUTROS' END`,
      type: `string`
    },

    quantidade: {
      sql: `quantidade`,
      type: `number`,
    },
  },
  
  dataSource: `default`
});
