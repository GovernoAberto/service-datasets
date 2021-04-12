const metadata = {
  teste: "Teste"
};

cube(`Empresa`, {
  sql: `SELECT * FROM public.empresa WHERE codigo_municipio = 8801`,
  description: JSON.stringify(metadata),
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    dataSituacaoEspecial: {
      sql: `data_situacao_especial`,
      type: `string`,
    },
    
    dataExclusaoDoSimples: {
      sql: `data_exclusao_do_simples`,
      type: `string`
    },
    
    dataOpcaoPeloSimples: {
      sql: `data_opcao_pelo_simples`,
      type: `string`
    },
    
    opcaoPeloMei: {
      sql: `opcao_pelo_mei`,
      type: `string`
    },
    
    nomeCidadeExterior: {
      sql: `nome_cidade_exterior`,
      type: `string`
    },
    
    uf: {
      sql: `uf`,
      type: `string`
    },
    
    situacaoEspecial: {
      sql: `situacao_especial`,
      type: `string`
    },
    
    opcaoPeloSimples: {
      sql: `opcao_pelo_simples`,
      type: `string`
    },
    
    municipio: {
      sql: `municipio`,
      type: `string`
    },
    
    razaoSocial: {
      sql: `razao_social`,
      type: `string`
    },
    
    cnpj: {
      sql: `cnpj`,
      type: `string`
    },
    
    nomeFantasia: {
      sql: `nome_fantasia`,
      type: `string`
    },
    
    bairro: {
      sql: `bairro`,
      type: `string`
    },

    porte: {
      sql: `porte`,
      type: `number`
    },
    
    dataInicioAtividade: {
      sql: `data_inicio_atividade`,
      type: `time`
    },

    anoInicioAtividade: {
      sql: `TO_CHAR(data_inicio_atividade, 'YYYY')`,
      type: `number`
    },

    mesInicioAtividade: {
      sql: `TO_CHAR(data_inicio_atividade, 'MM')`,
      type: `number`
    },
    
    dataSituacaoCadastral: {
      sql: `data_situacao_cadastral`,
      type: `time`
    },
  }
});
