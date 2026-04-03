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
  'Social', //社会社交
  'Identity', // 身份
  "Learn",//学习
  "DevTools",//构建工具
  'Explorer',   // 把之前代码里出现的 tool 也加上
  "API",
  "Oracle",//预言机
  "AI", //AI
  "Infra",//基础设施
  "Analytics",//分析
  "Bridge",//桥接
  "RWA",//rwa
  "BTCFi",//sui上的BTC
  "Wallets",//钱包
  "Security",//安全审计
  "Pay",//支付
  "Privacy",//隐私
  "Launch",//启动平台
  "Stablecoin"//稳定币


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
  { id: '0-1', name: 'Cetus', description: 'A leading DEX', url: 'https://cetus.zone', category: 'DEX' },
  { id: '0-2', name: 'Bluefin', description: 'Decentralized Everything Exchange', url: 'https://trade.bluefin.io/swap/USDC-SUI', category: 'DEX', hot: true },
  { id: '0-3', name: 'DeepBook', description: 'SUI official order book', url: 'https://www.deepbook.tech/', category: 'DEX' },
  { id: '0-4', name: 'Momentum', description: 'The central liquidity engine of the Move ecosystem', url: 'https://app.mmt.finance/trade', category: 'DEX' },
  { id: '0-5', name: 'Turbos', description: 'Turbos Finance is a non-custodial and hyper-efficient DEX', url: 'https://app.turbos.finance/#/trade', category: 'DEX' },
  { id: '0-6', name: 'Aftermath', description: 'CEX but on-chain. Your one-stop DeFi hub on Sui', url: 'https://aftermath.finance/trade?from=USDC&to=SUI', category: 'DEX' },
  { id: '0-7', name: 'STEAMM', description: 'AMM with no opportunity cost, powered by Suilend', url: 'https://steamm.fi/swap/0x2::sui::SUI-0xb45fcfcc2cc07ce0702cc2d229621e046c906ef14d9b25e8e4d25f6e8763fef7::send::SEND', category: 'DEX' },
  // Lend
  { id: '1-1', name: 'Suilend', description: 'Autonomous lending and borrowing platform on Sui', url: 'https://suilend.fi', category: 'Lend' },
  { id: '1-2', name: 'Navi', description: 'Navi is the first Native One-Stop Liquidity Protocol on Sui', url: 'https://naviprotocol.io', category: 'Lend' },
  { id: '1-3', name: 'Scallop', description: 'The Next Generation Money Market Based on Sui', url: 'https://scallop.io', category: 'Lend' },
  { id: '1-4', name: 'AlphaLend', description: 'Zero-fee lending powering real DeFi on Sui. Built out of necessity by AlphaFi', url: 'https://alphafi.xyz', category: 'Lend' },
  { id: '1-5', name: 'current', description: 'alongside spot Margin — all powered by isolated lending markets', url: 'https://app.current.finance/market', category: 'Lend', hot: true },
  { id: '1-6', name: 'Bucket', description: 'Stablecoins', url: 'https://www.bucketprotocol.io/borrow', category: 'Lend' },
  //Stake
  { id: '2-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Stake', hot: true },
  { id: '2-2', name: 'Volo', description: 'Stake your SUI to receive vSUI while staking', url: 'https://www.volosui.com/stake', category: 'Stake' },
  { id: '2-1', name: 'Springsui', description: 'Discover rewards and DeFi opportunities with your sSUI', url: 'https://springsui.com/SUI-sSUI', category: 'Stake' },
  { id: '2-1', name: 'Alphafi', description: 'Stake SUI', url: 'https://alphafi.xyz/stsui', category: 'Stake' },
  { id: '2-1', name: 'Aftermath', description: 'Stake your SUI and earn rewards', url: 'https://aftermath.finance/stake?validator=aftermath', category: 'Stake' },
  { id: '2-1', name: 'Momentum', description: 'XSUI', url: 'https://app.mmt.finance/xsui', category: 'Stake' },
  //Yield
  { id: '3-1', name: 'Navi', description: 'Earn Yields in One Click', url: 'https://app.naviprotocol.io/earn', category: 'Yield' },
  { id: '3-2', name: 'Ember', description: 'Manage your wealth onchain', url: 'https://ember.so/', category: 'Yield', hot: true },
  { id: '3-3', name: 'Mole', description: 'leveraged yield farms and funds on Sui chain', url: 'https://app.mole.fi/savings', category: 'Yield' },
  { id: '3-4', name: 'KaiFinance', description: 'Single Asset Vaults', url: 'https://kai.finance/vaults', category: 'Yield' },
  { id: '3-5', name: 'Typus', description: 'Deposit to Optimize Crypto Return', url: 'https://typus.finance/yield/', category: 'Yield' },
  { id: '3-6', name: 'Alphafi', description: 'Yields', url: 'https://alphafi.xyz/strategies', category: 'Yield' },
  //Perps
  { id: '4-1', name: 'Bluefin', description: 'Leveraged contracts', url: 'https://trade.bluefin.io/pro/BTC-PERP', category: 'Perps', hot: true },
  { id: '4-2', name: 'Typus', description: 'Leverage trading', url: 'https://typus.finance/perps/', category: 'Perps' },
  { id: '4-3', name: 'Astros', description: 'Native Perps by NAVI', url: 'https://astros.ag/perp/SUI-USD', category: 'Perps' },
  { id: '4-4', name: 'Deeptrade', description: 'Open-source DEX powered by DeepBook & Walrus', url: 'https://deeptrade.io/trade/DEEP_SUI', category: 'Perps' },
  { id: '4-5', name: 'DeepBook', description: 'SUI official Leverage trading', url: 'https://www.deepbook.tech/', category: 'Perps' },
  { id: '4-6', name: 'Cetus', description: 'Margin Trading', url: 'https://app.cetus.zone/margin', category: 'Perps' },
  // NFT MP
  { id: '5-1', name: 'BlueMove', description: 'NFT marketplace', url: 'https://bluemove.net', category: 'NFT-MP', hot: true },
  { id: '5-2', name: 'TradePort', description: 'NFT trading platform', url: 'https://tradeport.xyz', category: 'NFT-MP', hot: true },
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
  // Social 社会 社交
  { id: '28', name: 'Suia', description: 'POAP & Social', url: 'https://suia.io', category: 'Social' },
  { id: '29', name: 'Releap', description: 'Decentralized Social', url: 'https://releap.xyz', category: 'Social' },
  // Explorer 浏览器
  { id: '30', name: 'Shinami', description: 'API & Node Service', url: 'https://shinami.com', category: 'Explorer' },
  { id: '31', name: 'BlockVision', description: 'Data Indexing', url: 'https://blockvision.org', category: 'Explorer' },
  { id: '32', name: 'Pyth', description: 'Oracle Network', url: 'https://pyth.network', category: 'Explorer' },
  //Identity 身份
  { id: '14', name: 'Sui Vision', description: 'Blockchain explorer', url: 'https://suivision.xyz', category: 'Identity', hot: true },
  { id: '15', name: 'Suiscan', description: 'Analytics and explorer', url: 'https://suiscan.xyz', category: 'Identity' },
  { id: '9', name: 'SuiNS', description: 'Sui Name Service', url: 'https://suins.io', category: 'Identity', hot: true },
  //Learn 学习
  { id: '2ea-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Learn' },
  //DevTools 构建工具
  { id: '2fb-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'DevTools' },
  //API
  { id: '2dca-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'API' },
  //"Oracle",//预言机
  { id: '2qas-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Oracle' },
  //"AI", //AI
  { id: '2vf-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'AI' },
  //"Infra",//基础设施
  { id: '24g-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Infra' },
  //"Analytics",//分析
  { id: '2bgh-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Analytics' },
  //"Bridge",//桥接
  { id: '2-fvc1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Bridge' },
  //"RWA",//rwa
  { id: '2-aa1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'RWA' },
  //"BTCFi",//sui上的BTC
  { id: '2f32-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'BTCFi' },
  //"Wallets",//钱包
  { id: '2qdz-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Wallets' },
  //"Security",//安全审计
  { id: '2lk-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Security' },
  //"Pay",//支付
  { id: '2-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Pay' },
  //"Privacy",//隐私
  { id: '2-hy51', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Privacy' },
  //"Launch",//启动平台
  { id: '2fhj-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Launch' },
  //Stablecoin //稳定币
  { id: '2fhjwe-1', name: 'Haedal', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Stablecoin' },
];
