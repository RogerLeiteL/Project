import {
  Cpu,
  HardDriveDownload,
  LaptopMinimal,
  MemoryStick,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const featuredServices = [
  {
    title: "Celulares",
    description:
      "Troca de tela, bateria, conector, camera e reparos em geral com diagnostico claro e atendimento rapido.",
    icon: Smartphone,
  },
  {
    title: "Notebooks",
    description:
      "Manutencao de notebook lento, sem imagem, aquecendo ou que nao liga, com solucao tecnica e pratica.",
    icon: LaptopMinimal,
  },
  {
    title: "Computadores",
    description:
      "Formatacao, limpeza, reparos e manutencao completa para computador travando, lento ou com falhas recorrentes.",
    icon: Cpu,
  },
  {
    title: "Upgrade e Otimizacao",
    description:
      "Upgrade de SSD, memoria, ajustes de desempenho e organizacao do sistema para seu equipamento render mais.",
    icon: Sparkles,
  },
];

export const detailedServices = [
  {
    title: "Manutenção de Celulares",
    icon: Smartphone,
    description:
      "Atendimento para aparelhos com tela quebrada, bateria descarregando rápido, falhas de carga, áudio, câmera e travamentos.",
    problems: [
      "Tela quebrada ou touch com falhas",
      "Bateria viciada ou descarregando rápido",
      "Conector com mau contato",
      "Câmera, áudio ou microfone com defeito",
      "Lentidão, travamentos e reinicializações",
    ],
    benefits: [
      "Diagnóstico técnico com linguagem clara",
      "Mais segurança para decidir o reparo",
      "Atendimento ágil e organizado",
    ],
  },
  {
    title: "Manutenção de Computadores",
    icon: Cpu,
    description:
      "Correções técnicas para computadores lentos, com falhas de inicialização, superaquecimento, tela azul ou problemas de hardware.",
    problems: [
      "PC lento ou travando",
      "Não liga ou não dá vídeo",
      "Erros de sistema e tela azul",
      "Ruídos e aquecimento excessivo",
      "Problemas após atualização",
    ],
    benefits: [
      "Recuperação de desempenho",
      "Maior estabilidade no uso diário",
      "Solução técnica com transparência",
    ],
  },
  {
    title: "Manutenção de Notebooks",
    icon: LaptopMinimal,
    description:
      "Serviço especializado para notebook que não liga, aquece demais, está lento, com teclado falhando ou dobradiças comprometidas.",
    problems: [
      "Notebook não liga",
      "Aquecimento e desligamentos",
      "Teclado, tela ou dobradiça com defeito",
      "Lentidão e falhas no sistema",
      "Bateria ou carregador com problemas",
    ],
    benefits: [
      "Atendimento especializado",
      "Melhor desempenho e vida útil",
      "Mais previsibilidade no orçamento",
    ],
  },
  {
    title: "Formatação e Otimização",
    icon: HardDriveDownload,
    description:
      "Reinstalação do sistema, organização de programas e ajustes de desempenho para equipamentos lentos ou com falhas recorrentes.",
    problems: [
      "Sistema travando constantemente",
      "Excesso de programas desnecessários",
      "Vírus ou comportamento suspeito",
      "Inicialização demorada",
      "Necessidade de reinstalação limpa",
    ],
    benefits: [
      "Equipamento mais rápido",
      "Melhor organização do sistema",
      "Processo orientado com possibilidade de backup",
    ],
  },
  {
    title: "Limpeza e Manutenção Preventiva",
    icon: ShieldCheck,
    description:
      "Limpeza interna, troca de pasta térmica e cuidados preventivos para reduzir riscos de superaquecimento e falhas futuras.",
    problems: [
      "Ventoinha muito barulhenta",
      "Temperatura elevada",
      "Acúmulo de poeira",
      "Queda de desempenho por aquecimento",
      "Falhas recorrentes por falta de manutenção",
    ],
    benefits: [
      "Mais estabilidade",
      "Menor risco de parada inesperada",
      "Melhor conservação do equipamento",
    ],
  },
  {
    title: "Instalação de Programas e Configuração",
    icon: ScanSearch,
    description:
      "Instalação de softwares essenciais, configuração de impressoras, rede, e-mail e ferramentas para uso pessoal ou profissional.",
    problems: [
      "Programas não instalados corretamente",
      "Configuração de impressora e periféricos",
      "E-mail e aplicativos mal configurados",
      "Dificuldade com setup inicial",
      "Necessidade de ambiente pronto para trabalhar",
    ],
    benefits: [
      "Equipamento configurado para uso imediato",
      "Menos perda de tempo",
      "Suporte técnico com orientação objetiva",
    ],
  },
  {
    title: "Diagnóstico Técnico",
    icon: ScanSearch,
    description:
      "Avaliação técnica para identificar a causa real do problema antes da execução do serviço, com explicação clara e honesta.",
    problems: [
      "Origem do defeito indefinida",
      "Falhas intermitentes",
      "Equipamento sem histórico de manutenção",
      "Dúvida entre reparar ou substituir",
      "Necessidade de orçamento mais seguro",
    ],
    benefits: [
      "Mais clareza para tomar decisão",
      "Menos risco de serviço desnecessário",
      "Orçamento com melhor direcionamento",
    ],
  },
  {
    title: "Upgrade de SSD e Memória RAM",
    icon: MemoryStick,
    description:
      "Serviço ideal para quem quer mais velocidade no notebook ou computador, com orientação do upgrade mais adequado para cada caso.",
    problems: [
      "Sistema muito lento",
      "Equipamento demorando para abrir programas",
      "Baixo desempenho em multitarefa",
      "Armazenamento inadequado",
      "Necessidade de prolongar a vida útil do equipamento",
    ],
    benefits: [
      "Ganho perceptível de desempenho",
      "Melhor custo-benefício do que trocar de máquina",
      "Upgrade compatível com o seu uso",
    ],
  },
];
