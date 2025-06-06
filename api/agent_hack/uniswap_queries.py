GET_TOKEN = '''
query GetToken($tokenAddress: String!) {
   tokens(where: {id: $tokenAddress}) {
    id
    name
    symbol
    decimals
    totalSupply
    volume
    volumeUSD
    untrackedVolumeUSD
    feesUSD
    txCount
    poolCount
    totalValueLocked
    totalValueLockedUSD
    totalValueLockedUSDUntracked
    derivedETH
    whitelistPools {
      liquidity
      feeTier
      feesUSD
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      volumeUSD
      txCount
      totalValueLockedToken0
      totalValueLockedToken1
      totalValueLockedUSD
      totalValueLockedETH
      token0 {
        id
        symbol
        name
        decimals
        totalSupply
        volume
        volumeUSD
        untrackedVolumeUSD
        feesUSD
        txCount
        poolCount
        totalValueLocked
        totalValueLockedUSD
        totalValueLockedUSDUntracked
        derivedETH
      }
      token1 {
        id
        symbol
        name
        decimals
        totalSupply
        volume
        volumeUSD
        untrackedVolumeUSD
        feesUSD
        txCount
        poolCount
        totalValueLocked
        totalValueLockedUSD
        totalValueLockedUSDUntracked
        derivedETH
      }
    }
  }
}
'''