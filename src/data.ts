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
  'Analytics',   // 分析 浏览器
  'Social', //社会社交
  'Identity', // 身份
  "Learn",//学习
  "DevTools",//构建工具
  "API",
  //"Oracle",//预言机
  "AI", //AI
  "Infra",//基础设施
  "Bridge",//桥接
  "RWA",//rwa
  "BTCfi",//sui上的BTC
  "Wallets",//钱包
  "Security",//安全审计
  "Pay",//支付
  "Privacy",//隐私
  "Launch",//启动平台
  "Stablecoin",//稳定币
  "Hackathon"//悬赏

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
  { id: '3-2', name: 'Ember', description: 'Manage your wealth onchain', url: 'https://ember.so/', category: 'Yield' },
  { id: '3-3', name: 'Mole', description: 'leveraged yield farms and funds on Sui chain', url: 'https://app.mole.fi/savings', category: 'Yield' },
  { id: '3-4', name: 'KaiFinance', description: 'Single Asset Vaults', url: 'https://kai.finance/vaults', category: 'Yield' },
  { id: '3-5', name: 'Typus', description: 'Deposit to Optimize Crypto Return', url: 'https://typus.finance/yield/', category: 'Yield' },
  { id: '1-5', name: 'current', description: 'alongside spot Margin — all powered by isolated lending markets', url: 'https://app.current.finance/market', category: 'Lend', hot: true },
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
  { id: '8-2', name: 'Suigar', description: 'gambling', url: 'https://suigar.com/', category: 'Gaming' },
  { id: '8-3', name: 'Doubleup', description: 'On-chain gambling', url: 'https://www.doubleup.fun/', category: 'Gaming', hot: true },
  { id: '8-4', name: 'WinX', description: 'WinX.io Originals', url: 'https://winx.io/', category: 'Gaming' },
  { id: '8-5', name: 'Aur', description: 'Mining', url: 'https://aur.supply/', category: 'Gaming' },
  { id: '8-6', name: 'Wata', description: 'WATA - Winner Always Takes All', url: 'https://wata.wal.app/', category: 'Gaming' },
  //Games
  { id: '9-1', name: 'Pebble', description: 'The Pathway from web2 to web3', url: 'https://www.pebblestream.io/', category: 'Games' },
  { id: '9-2', name: 'Lineup', description: 'Proof, Not Promises', url: 'https://www.lineup-games.com/', category: 'Games', hot: true },
  { id: '9-3', name: 'Pawtato', description: 'Pawtato game', url: 'https://land.pawtato.app/', category: 'Games' },
  { id: '9-4', name: 'Samurai', description: 'Samurai Shodown R is a Web3', url: 'https://mini.lumiwavelab.com/', category: 'Games' },
  { id: '9-5', name: 'Vendetta', description: 'A fully on-chain, multiplayer strategy game on Sui Network', url: 'https://vendettagame.xyz/', category: 'Games' },
  { id: '9-6', name: 'Savingsgame', description: 'Lossless Lottery', url: 'https://savingsgame.dappnav.org/', category: 'Games' },
  // Social 社会 社交
  { id: '10-1', name: 'Suiculture', description: 'Suiculture is a website', url: 'https://www.suiculture.com/', category: 'Social' },
  { id: '10-2', name: 'Giverep', description: 'The reputation and engagement must flow on Sui Network', url: 'https://giverep.com/', category: 'Social' },
  { id: '10-3', name: 'Alkimi', description: 'Worlds first decentralised Ad platform', url: 'https://www.alkimi.org/', category: 'Social' },
  { id: '10-4', name: 'Fantv', description: 'WATCH&EARN', url: 'https://fantv.world/', category: 'Social' },
  { id: '10-6', name: 'Forums', description: 'Sui BBS', url: 'https://forums.sui.io/', category: 'Social', hot: true },
  { id: '10-5', name: '6degrees', description: 'Powering word-of-mouth', url: 'https://www.6degrees.co/', category: 'Social' },
  { id: '10-7', name: 'Chatiwal', description: 'Secure messaging with Seal', url: 'https://chatiwal.vercel.app/', category: 'Social' },
  // Analytics 分析 浏览器
  { id: '11-1', name: 'SuiVision', description: 'Blockchain explorer', url: 'https://suivision.xyz', category: 'Analytics' },
  { id: '11-2', name: 'Suiscan', description: 'Analytics and explorer', url: 'https://suiscan.xyz', category: 'Analytics', hot: true },
  { id: '11-3', name: 'UpgradeRadar', description: 'We track the UpgradeCap so you don t have to', url: 'https://radar.dappnav.org/', category: 'Analytics' },
  { id: '11-4', name: 'Pawtato', description: 'pawtato fi', url: 'https://pawtato.app/', category: 'Analytics' },
  { id: '11-5', name: 'Navi', description: 'Navi copilot', url: 'https://app.naviprotocol.io/copilot', category: 'Analytics' },
  { id: '11-6', name: 'Dune', description: 'Sui integration with Dune', url: 'https://dune.com/chains/sui', category: 'Analytics' },
  { id: '11-7', name: 'SuiExplorer', description: 'SuiExplorer', url: 'https://sui.scan.spaceandtime.io/', category: 'Analytics' },
  //Identity 身份
  { id: '12-5', name: 'Enoki', description: 'Welcome to Enoki', url: 'https://enoki.mystenlabs.com/', category: 'Identity' },
  { id: '12-2', name: 'Suilink', description: 'Connect your identities across Sui', url: 'https://www.suilink.io/', category: 'Identity' },
  { id: '12-3', name: 'Karrier', description: 'Building decentralized telecom solutions', url: 'https://www.karrier.one/', category: 'Identity' },
  { id: '12-4', name: 'Zan', description: 'services for your Web3 endeavors', url: 'https://zan.top/', category: 'Identity' },
  { id: '12-1', name: 'SuiNS', description: 'Sui Name Service', url: 'https://suins.io', category: 'Identity', hot: true },
  { id: '12-6', name: 'Zklogin', description: 'Sui Zklogin', url: 'https://www.sui.io/zklogin', category: 'Identity' },
  //Learn 学习
  { id: '13-1', name: 'Movebook', description: 'Learn the move contract', url: 'https://move-book.com/', category: 'Learn' },
  { id: '13-6', name: 'Forums', description: 'Sui BBS', url: 'https://forums.sui.io/', category: 'Learn' },
  { id: '13-1', name: 'Risein', description: 'move on sui course', url: 'https://www.risein.com/courses/move-on-sui-course', category: 'Learn' },
  { id: '13-1', name: 'Blockeden', description: 'sui typescript sdk', url: 'https://blockeden.xyz/docs/sui/sui-typescript-sdk/', category: 'Learn' },
  { id: '13-1', name: 'Movefuns', description: 'Movefuns Dao', url: 'https://movefuns.org/', category: 'Learn' },
  { id: '13-1', name: 'Sui', description: 'Official study materials', url: 'https://docs.sui.io/', category: 'Learn', hot: true },
  //DevTools 构建工具
  { id: '14-1', name: 'Shinami', description: 'Delight your users with zero gas fees', url: 'https://shinami.com', category: 'DevTools' },
  { id: '14-2', name: 'Chainide', description: 'online move ide', url: 'https://chainide.com/', category: 'DevTools' },
  { id: '14-3', name: 'Revela', description: 'Decompile move bytecode', url: 'https://revela.verichains.io/', category: 'DevTools' },
  { id: '14-4', name: 'Bitslab', description: 'online move ide', url: 'https://ide.bitslab.xyz/', category: 'DevTools', hot: true },
  { id: '14-5', name: 'Suigpt', description: 'Sui move ai', url: 'https://suigpt.tools/', category: 'DevTools' },
  { id: '14-6', name: 'Microsui', description: 'MicroSui is a Framework that brings full Sui Protocol functionality to virtually any microcontroller', url: 'https://www.microsui.com/', category: 'DevTools' },
  //API
  { id: '15-1', name: 'Ankr', description: 'Trusted by the best in business and blockchain', url: 'https://www.ankr.com/docs/rpc-service/chains/chains-api/sui/', category: 'API' },
  { id: '15-1', name: 'Blockberry', description: 'blockberry api', url: 'https://blockberry.one/', category: 'API' },
  { id: '15-1', name: 'Quicknode', description: 'The only Sui provider youll ever need', url: 'https://www.quicknode.com/chains/sui', category: 'API' },
  { id: '15-1', name: 'Blockpi', description: 'BlockPI gRPC API', url: 'https://blockpi.io/cn/chain/sui', category: 'API' },
  { id: '15-1', name: 'Zan', description: 'the Fastest', url: 'https://zan.top/blockchain/sui', category: 'API' },
  { id: '15-1', name: 'Chainstack', description: 'Get a low-latency RPC', url: 'https://chainstack.com/zh/build-better-with-sui/', category: 'API' },
  //"AI", //AI
  { id: '16-1', name: 'Beep', description: 'just beep', url: 'https://www.justbeep.it/', category: 'AI' },
  { id: '16-1', name: 'Fantv', description: 'Your favourite AI Agent platform ', url: 'https://fantv.world/', category: 'AI' },
  { id: '16-1', name: 'T2000', description: 'The engine behind', url: 'https://t2000.ai/', category: 'AI' },
  { id: '16-5', name: 'Suigpt', description: 'Sui move ai', url: 'https://suigpt.tools/', category: 'AI' },
  { id: '16-1', name: 'Suisentinel', description: 'Ship AI Agents Without Fear. Test Them Against Real Attacks.', url: 'https://www.suisentinel.xyz/', category: 'AI' },
  { id: '16-1', name: 'DeAgentAI', description: 'Make AI smarter', url: 'https://link3.to/deagentai', category: 'AI' },
  //"Infra",//基础设施
  { id: '17-1', name: 'Walrus', description: 'Decentralized storage', url: 'https://walrus.xyz/', category: 'Infra' },
  { id: '17-2', name: 'Seal', description: 'Seal is a decentralized secrets management (DSM) service built for the next generation of Web3 applications', url: 'https://seal.mystenlabs.com/', category: 'Infra' },
  { id: '17-3', name: 'Nautilus', description: 'Trusted offchain compute, verified onchain', url: 'https://www.sui.io/nautilus', category: 'Infra' },
  { id: '17-4', name: 'DeepBook', description: 'SUI official order book', url: 'https://www.deepbook.tech/', category: 'Infra' },
  { id: '17-5', name: 'SuiNs', description: 'Sui Name Service simplifies your on-chain life', url: 'https://suins.io/', category: 'Infra' },
  { id: '17-6', name: 'Pyth', description: 'The Price of Everything Everywhere', url: 'https://www.pyth.network/', category: 'Infra' },
  { id: '17-7', name: 'Switchboard', description: 'The Everything Oracle', url: 'https://switchboard.xyz/', category: 'Infra' },
  { id: '17-8', name: 'Supra', description: 'The first fully onchain automation is here', url: 'https://supra.com/', category: 'Infra' },
  { id: '17-9', name: 'Stork', description: 'Stork is the leading oracle for low-latency DeFi protocols', url: 'https://www.stork.network/', category: 'Infra' },
  //"Bridge",//桥接
  { id: '2-fvc1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Bridge' },
  //"RWA",//rwa
  { id: '2-aa1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'RWA' },
  //"BTCFi",//sui上的BTC
  { id: '2f32-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'BTCfi' },
  //"Wallets",//钱包
  { id: '2qdz-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Wallets' },
  //"Security",//安全审计 +悬赏
  { id: '2lk-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Security' },
  //"Pay",//支付
  { id: '2-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Pay' },
  //"Privacy",//隐私
  { id: '2-hy51', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Privacy' },
  //"Launch",//启动平台
  { id: '2fhj-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Launch' },
  //Stablecoin //稳定币
  { id: '2fhjwe-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Stablecoin' },
  //"Hackathon"//黑客松
  { id: '2fhjwe-1', name: 'Collecting..', description: 'Stake SUI、WAL', url: 'https://www.haedal.xyz/stake', category: 'Hackathon' },
];
