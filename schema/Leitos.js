cube(`Leitos`, {
  sql: `
    SELECT 
      codigo_ibge, 
      nome_fantasia as nome_instituicao, 
      tipo_unidade as tipo_instituicao,
      tipo_gestao,
      tipo_leito, 
      codigo_leito,
      quantidade, 
      quantidade_sus, 
      quantidade - quantidade_sus as quantidade_nao_sus,
      mes,
      ano
    FROM cnes_leitos l 
    JOIN cnes_estabelecimentos e ON(l.codigo_unidade = e.codigo_unidade)
  `,
  
  joins: {
    
  },
  
  measures: {
    quantidade: {
      sql: `quantidade`,
      type: `sum`,
    },
    quantidadeSus: {
      sql: `quantidade_sus`,
      type: `sum`,
    },
    quantidadeNaoSus: {
      sql: `quantidade_nao_sus`,
      type: `sum`,
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

    nomeInstituicao: {
      title: "Nome da instituição",
      sql: `nome_instituicao`,
      type: `string`,
      meta: {
        public: true
      }
    },

    tipoInstituicao: {
      title: "Tipo de instituição",
      sql: `tipo_instituicao`,
      type: `string`,
      meta: {
        public: true
      }
    },

    tipoGestao: {
      title: "Tipo de gestão",
      sql: `CASE 
      WHEN tipo_gestao = 'M' THEN 'Municipal' 
      WHEN tipo_gestao = 'E' THEN 'Estadual'
      WHEN tipo_gestao = 'D' THEN 'Dupla'
      WHEN tipo_gestao = 'S' THEN 'Sem Gestão'
      ELSE 'Outro' END`,
      type: `string`,
      meta: {
        public: true
      }
    },

    classificacao: {
      sql: `codigo_leito`,
      type: `string`,
      meta: {
        public: true
      }
    },
    
    tipo: {
      sql: `tipo_leito`,
      type: `string`,
      meta: {
        public: true
      }
    },

    descricaoTipo: {
      sql: `CASE 
      WHEN tipo_leito = 'ESPEC - CLINICO' THEN 'Clínico' 
      WHEN tipo_leito = 'ESPEC - CIRURGICO' THEN 'Cirúrgico'
      WHEN tipo_leito = 'OBSTETRICO' THEN 'Obstétrico'
      WHEN tipo_leito = 'PEDIATRICO' THEN 'Pediátrico'
      WHEN tipo_leito = 'OUTRAS ESPECIALIDADES' THEN 'Outra especialidade'
      WHEN tipo_leito = 'HOSPITAL DIA' THEN 'Hospital-dia'
      WHEN tipo_leito = 'COMPLEMENTAR' THEN 'Complementar'
      ELSE 'Outro' END`,
      type: `string`
    },

    total: {
      sql: `quantidade`,
      type: `number`,
      meta: {
        public: true
      }
    },
    totalSus: {
      sql: `quantidade_sus`,
      type: `number`,
      meta: {
        public: true
      }
    },
    totalNaoSus: {
      sql: `quantidade_nao_sus`,
      type: `number`,
      meta: {
        public: true
      }
    }
  },
  
  dataSource: `default`
});
