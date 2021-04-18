cube(`EstatisticasEmpresas`, {
  title: "Estatisticas de Empresas Brasileiras",
  sql: `SELECT * FROM public.estatisticas_empresas`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    },
    total: {
      title: "Total",
      sql: `total`,
      type: `sum`
    }
  },
  
  dimensions: {
    codigoMunicipio: {
      sql: `codigo_municipio`,
      type: `number`,
      meta: {
        scope: {
          type: 'city',
          columnType: 'ibge'
        }
      }
    },

    situacaoCadastral: {
      sql: `situacao_cadastral`,
      type: `number`
    },

    porte: {
      sql: `porte`,
      type: `number`
    },

    opcaoPeloMei: {
      sql: `opcao_pelo_mei`,
      type: `boolean`
    },

    opcaoPeloSimples: {
      sql: `opcao_pelo_simples`,
      type: `boolean`
    },

    mesInicioAtividade: {
      sql: `mes_inicio_atividade`,
      type: `number`
    },

    anoInicioAtividade: {
      sql: `ano_inicio_atividade`,
      type: `number`
    },

    descricaoPorte: {
      sql: `CASE 
        WHEN porte = 0 THEN 'Não Informado' 
        WHEN porte = 1 THEN 'Micro'
        WHEN porte = 3 THEN 'Pequeno porte'
        WHEN porte = 5 THEN 'Outro'
        ELSE 'Outro' END`,
      type: `number`
    },

    descricaoSituacao: {
      sql: `CASE 
        WHEN situacao_cadastral = 1 THEN 'Outro' 
        WHEN situacao_cadastral = 2 THEN 'Ativo'
        WHEN situacao_cadastral = 3 THEN 'Suspenso'
        WHEN situacao_cadastral = 4 THEN 'Inapto'
        WHEN situacao_cadastral = 8 THEN 'Baixado'
        ELSE 'Outro' END`,
      type: `number`
    },
    
  },
  
  dataSource: `default`
});
