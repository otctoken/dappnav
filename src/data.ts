export const categories = [
  'DEX',
  'Lend',
  'Stake',
  'Yield',
  'Perps',
  'NFT-MP',
  'NFT',
  'Meme',
  'Gaming',
  'Games',
  'Social',
  'Infra', // 统一使用简写，或者都用全称
  'tool'   // 把之前代码里出现的 tool 也加上
] as const;

// 2. 这一行是魔法：直接从数组中提取类型
// 现在的 Category 自动等于 'DEX' | 'Lend' | 'Stake' | ...
export type Category = (typeof categories)[number];

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  hot?: boolean;
}
export const projects: Project[] = [
  //DEX
  { id: '0-1', name: 'Cetus', description: 'DEX', url: 'https://cetus.zone', category: 'DEX' },
  { id: '0-2', name: 'Bluefin', description: 'DEX', url: 'https://trade.bluefin.io/swap/USDC-SUI', category: 'DEX', hot: true },
  { id: '0-3', name: 'DeepBook', description: 'DEX', url: 'https://www.deepbook.tech/', category: 'DEX' },
  { id: '0-4', name: 'Momentum', description: 'DEX', url: 'https://app.mmt.finance/trade', category: 'DEX' },
  { id: '0-300', name: 'Turbos', description: 'DEX', url: 'https://app.turbos.finance/#/trade', category: 'DEX' },
  { id: '1-w2', name: 'Navi', description: 'Liquidity Protocol', url: 'https://naviprotocol.io', category: 'DEX', hot: true },
  { id: '1-q3', name: 'Suilend', description: 'Lending protocol', url: 'https://suilend.fi', category: 'DEX' },
  // Lend
  { id: '1-1', name: 'Scallop', description: 'Next Gen Money Market', url: 'https://scallop.io', category: 'Lend', hot: true },
  { id: '1-2', name: 'Navi', description: 'Liquidity Protocol', url: 'https://naviprotocol.io', category: 'Lend', hot: true },
  { id: '1-3', name: 'Suilend', description: 'Lending protocol', url: 'https://suilend.fi', category: 'Lend' },

  //Stake
  { id: '2-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Stake' },
  //Yield
  { id: '3-1', name: 'Ember', description: 'Manage your wealth onchain', url: 'https://ember.so/', category: 'Yield' },
  //Perps
  { id: '4-1', name: 'Bluefin', description: 'Leveraged contracts', url: 'https://trade.bluefin.io/pro/BTC-PERP', category: 'Perps' },
  // NFT MP
  { id: '6', name: 'BlueMove', description: 'NFT marketplace', url: 'https://bluemove.net', category: 'NFT-MP', hot: true },
  { id: '7', name: 'TradePort', description: 'NFT trading platform', url: 'https://tradeport.xyz', category: 'NFT-MP' },
  //NFT
  { id: '13', name: 'Hyperspace', description: 'Multi-chain NFT', url: 'https://hyperspace.xyz', category: 'NFT' },
  { id: '22', name: 'Keepsake', description: 'Gaming NFT Marketplace', url: 'https://keepsake.gg', category: 'NFT' },
  { id: '23', name: 'Clutchy', description: 'Gaming & NFT', url: 'https://clutchy.io', category: 'NFT' },
  // Meme
  { id: '8', name: 'FUD', description: 'Premier meme coin', url: 'https://fudthepug.com', category: 'Meme', hot: true },
  { id: '18', name: 'HSUI', description: 'Community meme', url: 'https://hsui.io', category: 'Meme' },
  { id: '24', name: 'BLUB', description: 'Dirty meme coin', url: 'https://blub.io', category: 'Meme', hot: true },
  { id: '25', name: 'LIQ', description: 'Liquidity meme', url: 'https://liq.io', category: 'Meme' },
  // Gaming
  { id: '10', name: 'Sui8192', description: 'On-chain 2048', url: 'https://ethoswallet.github.io/Sui8192/', category: 'Gaming' },
  { id: '17', name: 'Abyss World', description: 'Action-RPG Web3', url: 'https://abyssworld.games', category: 'Gaming', hot: true },
  //Games
  { id: '26', name: 'Panzerdogs', description: 'P2E Tank Brawler', url: 'https://panzerdogs.io', category: 'Games' },
  { id: '27', name: 'Run Legends', description: 'Fitness Battle Game', url: 'https://runlegends.com', category: 'Games' },
  // Social
  { id: '28', name: 'Suia', description: 'POAP & Social', url: 'https://suia.io', category: 'Social' },
  { id: '29', name: 'Releap', description: 'Decentralized Social', url: 'https://releap.xyz', category: 'Social' },
  // tool
  { id: '30', name: 'Shinami', description: 'API & Node Service', url: 'https://shinami.com', category: 'tool' },
  { id: '31', name: 'BlockVision', description: 'Data Indexing', url: 'https://blockvision.org', category: 'tool' },
  { id: '32', name: 'Pyth', description: 'Oracle Network', url: 'https://pyth.network', category: 'tool' },
  //Infra
  { id: '14', name: 'Sui Vision', description: 'Blockchain explorer', url: 'https://suivision.xyz', category: 'Infra', hot: true },
  { id: '15', name: 'Suiscan', description: 'Analytics and explorer', url: 'https://suiscan.xyz', category: 'Infra' },
  { id: '9', name: 'SuiNS', description: 'Sui Name Service', url: 'https://suins.io', category: 'Infra', hot: true },

];
