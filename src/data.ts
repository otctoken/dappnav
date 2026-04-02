export type Category = 'DEX' | 'DeFi' | 'NFT' | 'Meme' | 'Gaming' | 'Social' | 'Infrastructure';

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  hot?: boolean;
}

export const categories: Category[] = ['DEX', 'DeFi', 'NFT', 'Meme', 'Gaming', 'Social', 'Infrastructure'];

export const projects: Project[] = [
  //DEX
  { id: '0-1', name: 'Cetus', description: 'DEX', url: 'https://cetus.zone', category: 'DEX' },
  { id: '0-2', name: 'Bluefin', description: 'DEX', url: 'https://trade.bluefin.io/swap/USDC-SUI', category: 'DEX', hot: true },
  { id: '0-3', name: 'DeepBook', description: 'DEX', url: 'https://www.deepbook.tech/', category: 'DEX' },
  { id: '0-3', name: 'Momentum', description: 'DEX', url: 'https://app.mmt.finance/trade', category: 'DEX' },
  { id: '0-300', name: 'Turbos', description: 'DEX', url: 'https://app.turbos.finance/#/trade', category: 'DEX' },

  // DeFi
  { id: '1', name: 'Scallop', description: 'Next Gen Money Market', url: 'https://scallop.io', category: 'DeFi', hot: true },
  { id: '2', name: 'Navi', description: 'Liquidity Protocol', url: 'https://naviprotocol.io', category: 'DeFi', hot: true },
  { id: '5', name: 'Suilend', description: 'Lending protocol', url: 'https://suilend.fi', category: 'DeFi' },
  { id: '11', name: 'Aftermath', description: 'All-in-one DeFi', url: 'https://aftermath.finance', category: 'DeFi' },
  { id: '12', name: 'KriyaDEX', description: 'Institutional DEX', url: 'https://kriya.finance', category: 'DeFi' },
  { id: '16', name: 'Hop Aggregator', description: 'DEX aggregator', url: 'https://hop.ag', category: 'DeFi' },
  { id: '19', name: 'FlowX', description: 'Ecosystem DEX', url: 'https://flowx.finance', category: 'DeFi' },
  { id: '20', name: 'Typus', description: 'Option vaults', url: 'https://typus.finance', category: 'DeFi', hot: true },
  { id: '21', name: 'Bucket', description: 'CDP Protocol', url: 'https://bucketprotocol.io', category: 'DeFi' },

  // NFT
  { id: '6', name: 'BlueMove', description: 'NFT marketplace', url: 'https://bluemove.net', category: 'NFT', hot: true },
  { id: '7', name: 'TradePort', description: 'NFT trading platform', url: 'https://tradeport.xyz', category: 'NFT' },
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
  { id: '26', name: 'Panzerdogs', description: 'P2E Tank Brawler', url: 'https://panzerdogs.io', category: 'Gaming' },
  { id: '27', name: 'Run Legends', description: 'Fitness Battle Game', url: 'https://runlegends.com', category: 'Gaming' },

  // Social
  { id: '9', name: 'SuiNS', description: 'Sui Name Service', url: 'https://suins.io', category: 'Social', hot: true },
  { id: '28', name: 'Suia', description: 'POAP & Social', url: 'https://suia.io', category: 'Social' },
  { id: '29', name: 'Releap', description: 'Decentralized Social', url: 'https://releap.xyz', category: 'Social' },

  // Infrastructure
  { id: '14', name: 'Sui Vision', description: 'Blockchain explorer', url: 'https://suivision.xyz', category: 'tool', hot: true },
  { id: '15', name: 'Suiscan', description: 'Analytics and explorer', url: 'https://suiscan.xyz', category: 'tool' },
  { id: '30', name: 'Shinami', description: 'API & Node Service', url: 'https://shinami.com', category: 'tool' },
  { id: '31', name: 'BlockVision', description: 'Data Indexing', url: 'https://blockvision.org', category: 'tool' },
  { id: '32', name: 'Pyth', description: 'Oracle Network', url: 'https://pyth.network', category: 'tool' }
];
