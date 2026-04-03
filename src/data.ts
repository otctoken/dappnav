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
  'Explorer',   // 把之前代码里出现的 tool 也加上
  'Social', //社会社交
  'Identity', // 身份
  "Learn",//学习
  "DevTools",//构建工具
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
  { id: '5-1', name: 'TradePort', description: 'NFT trading platform', url: 'https://tradeport.xyz', category: 'NFT-MP', hot: true },
  { id: '5-2', name: 'Hokko', description: 'NFT marketplace', url: 'https://www.hokko.io/', category: 'NFT-MP' },
  { id: '5-3', name: 'Shadow', description: 'Discover Confidential NFTs', url: 'https://sui-shadow.vercel.app/dashboard', category: 'NFT-MP' },
  { id: '5-4', name: 'Bidder', description: 'Sui Auction House', url: 'https://bidder.polymedia.app/', category: 'NFT-MP' },
  { id: '5-5', name: 'Mirrorworld', description: 'Be Smart, Make More', url: 'https://www.mirrorworld.fun/', category: 'NFT-MP' },
  { id: '5-6', name: 'Drip', description: 'Collectibles marketplace & NFT tools for Sui', url: 'https://drip.market/', category: 'NFT-MP' },
  //NFT
  { id: '6-1', name: 'PawtatoLand', description: 'Pawtato game', url: 'https://land.pawtato.app/', category: 'NFT' },
  { id: '6-2', name: 'Popkins', description: 'Bite-sized animation. Big character energy', url: 'https://claynosaurz.com/', category: 'NFT' },
  { id: '6-3', name: 'PrimeMachin', description: 'Community is the Future', url: 'https://blog.sm.xyz/', category: 'NFT' },
  { id: '6-4', name: 'SuiNs', description: 'Sui Name Service simplifies your on-chain life', url: 'https://suins.io/', category: 'NFT' },
  { id: '6-5', name: 'Rootlets', description: 'Rootlets Story', url: 'https://rootlets.io/', category: 'NFT' },
  { id: '6-6', name: 'Pandasui', description: 'coin & NFT', url: 'https://www.pandasui.com/analytics', category: 'NFT' },
  // Meme
  { id: '7-1', name: 'FUD', description: 'Premier meme coin', url: 'https://fudthepug.com', category: 'Meme', hot: true },
  { id: '7-2', name: 'LOFI', description: 'A yeti frozen in time, awakened by the $SUI legends', url: 'https://lofitheyeti.com/', category: 'Meme' },
  { id: '7-3', name: 'Sudeng', description: 'just a Hippo ruling the Sui waters', url: 'https://www.hippocto.meme/', category: 'Meme' },
  { id: '7-4', name: 'BLUB', description: 'asy to spread, and built to scale', url: 'https://www.blubsui.com/en', category: 'Meme' },
  { id: '7-5', name: 'SCB', description: 'Sacabam is funniest community on Sui Network', url: 'https://sacabam.fun/', category: 'Meme' },
  { id: '7-6', name: 'Bonk', description: 'MORE THAN ORDINARY', url: 'https://bonkcoin.com/', category: 'Meme' },
  // Gaming
  { id: '8-1', name: 'Brag', description: 'The classic poker game BRAG', url: 'https://brag.dappnav.org/', category: 'Gaming' },
  { id: '8-2', name: 'Suigar', description: 'gambling', url: 'https://suigar.com/', category: 'Gaming', hot: true },
  { id: '8-3', name: 'Doubleup', description: 'On-chain gambling', url: 'https://www.doubleup.fun/', category: 'Gaming' },
  { id: '8-4', name: 'WinX', description: 'WinX.io Originals', url: 'https://winx.io/', category: 'Gaming' },
  { id: '8-5', name: 'Aur', description: 'Mining', url: 'https://aur.supply/', category: 'Gaming' },
  { id: '8-6', name: 'Wata', description: 'WATA - Winner Always Takes All', url: 'https://wata.wal.app/', category: 'Gaming' },
  //Games
  { id: '9-1', name: 'Pebble', description: 'The Pathway from web2 to web3', url: 'https://www.pebblestream.io/', category: 'Games' },
  { id: '9-2', name: 'Lineup', description: 'Proof, Not Promises', url: 'https://www.lineup-games.com/', category: 'Games', hot: true },
  { id: '9-3', name: 'Pawtato', description: 'Pawtato game', url: 'https://land.pawtato.app/', category: 'Games' },
  { id: '9-4', name: 'Samurai', description: 'Samurai Shodown R is a Web3', url: 'https://mini.lumiwavelab.com/', category: 'Games' },
  { id: '9-5', name: 'Vendetta', description: 'A fully on-chain, multiplayer strategy game on Sui Network', url: 'https://vendettagame.xyz/', category: 'Games' },
  { id: '9-6', name: 'PLAYTRON', description: 'tech & entertainment commentary', url: 'https://www.playtron.one/', category: 'Games' },
  // Social 社会 社交
  { id: '28', name: 'Suia', description: 'POAP & Social', url: 'https://suia.io', category: 'Social' },
  { id: '29', name: 'Releap', description: 'Decentralized Social', url: 'https://releap.xyz', category: 'Social' },
  // Explorer 浏览器
  { id: '30', name: 'Shinami', description: 'API & Node Service', url: 'https://shinami.com', category: 'Explorer' },
  { id: '31', name: 'BlockVision', description: 'Data Indexing', url: 'https://blockvision.org', category: 'Explorer' },
  { id: '32', name: 'Pyth', description: 'Oracle Network', url: 'https://pyth.network', category: 'Explorer' },
  { id: '14', name: 'Sui Vision', description: 'Blockchain explorer', url: 'https://suivision.xyz', category: 'Explorer', hot: true },
  { id: '15', name: 'Suiscan', description: 'Analytics and explorer', url: 'https://suiscan.xyz', category: 'Explorer' },
  //Identity 身份
  { id: '14', name: 'Sui Vision', description: 'Blockchain explorer', url: 'https://suivision.xyz', category: 'Identity', hot: true },
  { id: '15', name: 'Suiscan', description: 'Analytics and explorer', url: 'https://suiscan.xyz', category: 'Identity' },
  { id: '9', name: 'SuiNS', description: 'Sui Name Service', url: 'https://suins.io', category: 'Identity', hot: true },
  //Learn 学习
  { id: '2ea-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Learn' },
  //DevTools 构建工具
  { id: '2fb-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'DevTools' },
  //API
  { id: '2dca-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'API' },
  //"Oracle",//预言机
  { id: '2qas-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Oracle' },
  //"AI", //AI
  { id: '2vf-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'AI' },
  //"Infra",//基础设施
  { id: '24g-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Infra' },
  //"Analytics",//分析
  { id: '2bgh-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Analytics' },
  //"Bridge",//桥接
  { id: '2-fvc1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Bridge' },
  //"RWA",//rwa
  { id: '2-aa1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'RWA' },
  //"BTCFi",//sui上的BTC
  { id: '2f32-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'BTCFi' },
  //"Wallets",//钱包
  { id: '2qdz-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Wallets' },
  //"Security",//安全审计
  { id: '2lk-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Security' },
  //"Pay",//支付
  { id: '2-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Pay' },
  //"Privacy",//隐私
  { id: '2-hy51', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Privacy' },
  //"Launch",//启动平台
  { id: '2fhj-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Launch' },
  //Stablecoin //稳定币
  { id: '2fhjwe-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Stablecoin' },
];
